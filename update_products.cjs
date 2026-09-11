const fs = require('fs');
const path = require('path');

const specsPath = 'c:/Users/nem.jmoises/Downloads/bicis_specs.txt';
const outPath = path.join(process.cwd(), 'src/data/products.ts');

const rawData = fs.readFileSync(specsPath, 'utf-8');
const data = JSON.parse(rawData);

const products = data.map((item, index) => {
  return {
    id: String(index + 1),
    ...item,
    disciplina: item.category,
    gama: item.gama,
    garantia_años: item.garantia_años,
    isFeatured: item.isFeatured !== undefined ? item.isFeatured : item.is_featured
  };
});

const interfaceStr = `export interface ProductComponentes {
  estructura?: { cuadro?: string; horquilla?: string };
  transmision?: { desviador_trasero?: string; mandos?: string };
  frenos?: { conjunto?: string };
  ruedas?: { llantas?: string; neumaticos?: string };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  affiliate_link?: string;
  isFeatured?: boolean;
  retailPrice?: number;
  discountedPrice?: number;
  category?: string;
  showInTopMenu?: boolean;

  image_url: string;

  marca: string;
  disciplina: 'urbana' | 'ruta' | 'montaña' | 'gravel' | 'electrica';
  gama: 'entrada' | 'media' | 'alta';

  tipo_frenos: 'disco hidraulico' | 'disco mecanico' | 'zapata';
  material_cuadro: 'aluminio' | 'carbono' | 'acero';
  peso_bici_kg: number;
  num_marchas: number;
  talla_cuadro: 'S' | 'M' | 'L' | 'XL' | 'unica';
  garantia_años: number;

  tipo_motor?: 'central' | 'trasero' | 'delantero' | 'ninguna';
  autonomia_km?: number;
  capacidad_bateria_wh?: number;
  potencia_w?: number;
  velocidad_max_kmh?: number;
  tiempo_carga_h?: number;

  score_rendimiento: number;
  score_comodidad: number;
  score_durabilidad: number;
  score_calidad_precio: number;
  score_peso: number;
  score_versatilidad: number;

  ideal_para: string;
  pros: string;
  contras: string;
  destacado_editorial: string;

  valoracion_media: number;
  resenas_cantidad?: number;
  resenas_resumen: string;
  
  componentes?: ProductComponentes;
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(outPath, interfaceStr);
console.log('Products generated successfully.');
