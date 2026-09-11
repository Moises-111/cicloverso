export interface ProductComponentes {
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

export const products: Product[] = [
  {
    "id": "1",
    "name": "Schwinn Discover Hybrid Bike",
    "marca": "Schwinn",
    "category": "urbana",
    "gama": "entrada",
    "description": "Una bicicleta híbrida diseñada para el confort diario en la ciudad y parques.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Schwinn+Discover+Hybrid+Bike",
    "image_url": "https://m.media-amazon.com/images/I/81fH+uYl1xL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 7500,
    "discountedPrice": 6899,
    "showInTopMenu": true,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 15.5,
    "num_marchas": 21,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 6.5,
    "score_comodidad": 8.5,
    "score_durabilidad": 7,
    "score_calidad_precio": 8,
    "score_peso": 6,
    "score_versatilidad": 7.5,
    "ideal_para": "Desplazamientos urbanos diarios y paseos recreativos.",
    "pros": "Excelente relación calidad-precio|Postura muy cómoda|Incluye accesorios",
    "contras": "Componentes de entrada|Peso algo elevado",
    "destacado_editorial": "La reina de la movilidad urbana accesible.",
    "valoracion_media": 4.3,
    "resenas_cantidad": 1850,
    "resenas_resumen": "Muy cómoda para ir al trabajo y la postura erguida evita dolores de espalda.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio con geometría híbrida",
        "horquilla": "Suspensión delantera de acero"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney, 21v",
        "mandos": "Shimano RevoShift"
      },
      "frenos": {
        "conjunto": "Promax de tiro lineal"
      },
      "ruedas": {
        "llantas": "700c aluminio",
        "neumaticos": "700x38c"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "2",
    "name": "Giordano 700c Libero",
    "marca": "Giordano",
    "category": "urbana",
    "gama": "entrada",
    "description": "Bicicleta urbana con cuadro de aluminio y componentes ligeros para agilizar el tráfico diario.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Giordano+Libero+Bike",
    "image_url": "https://m.media-amazon.com/images/I/71qV-6N+8LL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 8200,
    "discountedPrice": 7599,
    "showInTopMenu": false,
    "tipo_frenos": "zapata",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 13,
    "num_marchas": 16,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 7,
    "score_comodidad": 7.5,
    "score_durabilidad": 7,
    "score_calidad_precio": 8,
    "score_peso": 7.5,
    "score_versatilidad": 7,
    "ideal_para": "Trayectos urbanos rápidos en asfalto plano.",
    "pros": "Ligera y rápida|Estética limpia",
    "contras": "Desarrollos limitados en cuestas empinadas",
    "destacado_editorial": "Agilidad y rapidez urbana con un toque clásico.",
    "valoracion_media": 4.1,
    "resenas_resumen": "Muy ligera de llevar, excelente para sortear el tráfico de la ciudad.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio ligero",
        "horquilla": "Acero rígida"
      },
      "transmision": {
        "desviador_trasero": "Shimano Claris",
        "mandos": "Shimano STI"
      },
      "frenos": {
        "conjunto": "Pinzas de pivote clásico"
      },
      "ruedas": {
        "llantas": "700c doble pared",
        "neumaticos": "700x28c"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "3",
    "name": "Raleigh Detour 1",
    "marca": "Raleigh",
    "category": "urbana",
    "gama": "entrada",
    "description": "Comodidad y versatilidad en una sola bicicleta de cuadro abierto para ciudad.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Raleigh+Detour+1",
    "image_url": "https://m.media-amazon.com/images/I/71Q3hP8z+9L._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 9000,
    "discountedPrice": 8499,
    "showInTopMenu": false,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 14.2,
    "num_marchas": 21,
    "talla_cuadro": "S",
    "garantia_años": 2,
    "score_rendimiento": 6.8,
    "score_comodidad": 9,
    "score_durabilidad": 7.5,
    "score_calidad_precio": 7.8,
    "score_peso": 6.5,
    "score_versatilidad": 8,
    "ideal_para": "Paseos tranquilos y transporte diario sin prisas.",
    "pros": "Asiento comodísimo|Geometría relajada",
    "contras": "Poco orientada a la velocidad pura",
    "destacado_editorial": "El confort como máxima prioridad para rodar por la ciudad.",
    "valoracion_media": 4.4,
    "resenas_resumen": "El sillín es comodísimo desde el primer día y la postura erguida es perfecta.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio con sloping bajo",
        "horquilla": "Rígida de acero"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney",
        "mandos": "Shimano EZ-Fire"
      },
      "frenos": {
        "conjunto": "Disco mecánico básico"
      },
      "ruedas": {
        "llantas": "700c",
        "neumaticos": "700x40c"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "4",
    "name": "Trek FX 2 Disc",
    "marca": "Trek",
    "category": "urbana",
    "gama": "media",
    "description": "Bicicleta híbrida versátil con cuadro de aluminio y frenos de disco hidráulicos.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Trek+FX+2+Disc",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 14500,
    "discountedPrice": 13999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 11.7,
    "num_marchas": 18,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8,
    "score_comodidad": 8,
    "score_durabilidad": 9,
    "score_calidad_precio": 8.5,
    "score_peso": 8,
    "score_versatilidad": 9,
    "ideal_para": "Ciclistas urbanos exigentes y entrenamiento fitness.",
    "pros": "Frenos hidráulicos potentes|Cuadro ligero y ágil",
    "contras": "Precio más elevado",
    "destacado_editorial": "Equilibrio perfecto entre rendimiento y practicidad urbana.",
    "valoracion_media": 4.7,
    "resenas_cantidad": 420,
    "resenas_resumen": "Frena de maravilla bajo la lluvia y se siente muy ligera en cuestas.",
    "componentes": {
      "estructura": {
        "cuadro": "Alpha Gold Aluminum",
        "horquilla": "FX Alloy"
      },
      "transmision": {
        "desviador_trasero": "Shimano Altus, 9v",
        "mandos": "Shimano Altus"
      },
      "frenos": {
        "conjunto": "Tektro HD-R280 hidráulico"
      },
      "ruedas": {
        "llantas": "Bontrager Connection",
        "neumaticos": "Bontrager H2 Comp 700x35c"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "5",
    "name": "Cannondale Quick 4",
    "marca": "Cannondale",
    "category": "urbana",
    "gama": "media",
    "description": "Diseñada para ganar velocidad en ciudad con gran comodidad y detalles reflectantes de 360 grados.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Cannondale+Quick+4",
    "image_url": "https://m.media-amazon.com/images/I/71qS+c4tLFL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 15200,
    "discountedPrice": 14499,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 11.2,
    "num_marchas": 9,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8.2,
    "score_comodidad": 8,
    "score_durabilidad": 8.8,
    "score_calidad_precio": 8.2,
    "score_peso": 8.5,
    "score_versatilidad": 8.5,
    "ideal_para": "Desplazamientos rápidos y seguros de noche en la ciudad.",
    "pros": "Excelente reflectividad 360°|Geometría ágil",
    "contras": "Transmisión monoplato puede quedarse corta en bajadas extremas",
    "destacado_editorial": "Seguridad nocturna y velocidad en un diseño impecable.",
    "valoracion_media": 4.6,
    "resenas_resumen": "Los detalles reflectantes son increíbles de noche y la bicicleta vuela en el pavimento.",
    "componentes": {
      "estructura": {
        "cuadro": "SmartForm C3 Alloy",
        "horquilla": "Alloy blades"
      },
      "transmision": {
        "desviador_trasero": "MicroShift Advent X, 9v",
        "mandos": "MicroShift"
      },
      "frenos": {
        "conjunto": "Tektro HD-R275 hidráulico"
      },
      "ruedas": {
        "llantas": "Cannondale Disc",
        "neumaticos": "Schwalbe Spicer 700x35c"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "6",
    "name": "Specialized Sirrus X 2.0",
    "marca": "Specialized",
    "category": "urbana",
    "gama": "media",
    "description": "Una bicicleta cómoda y capaz que te anima a rodar más y explorar más allá del asfalto.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+Sirrus+X+2.0",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 16000,
    "discountedPrice": 14999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 11.8,
    "num_marchas": 8,
    "talla_cuadro": "L",
    "garantia_años": 5,
    "score_rendimiento": 8.3,
    "score_comodidad": 8.5,
    "score_durabilidad": 9,
    "score_calidad_precio": 8,
    "score_peso": 8.2,
    "score_versatilidad": 9.2,
    "ideal_para": "Exploración urbana y caminos mixtos de tierra y pavimento.",
    "pros": "Neumáticos más anchos que absorben impactos|Transmisión simple y eficiente",
    "contras": "Desarrollo de 8 velocidades algo justo para subidas muy duras",
    "destacado_editorial": "Libertad total para conectar la ciudad con caminos de terracería ligera.",
    "valoracion_media": 4.7,
    "resenas_resumen": "Versátil y robusta, pasa por baches y caminos de tierra con total soltura.",
    "componentes": {
      "estructura": {
        "cuadro": "Specialized A1 Premium Aluminum",
        "horquilla": "A1 Alloy con soportes"
      },
      "transmision": {
        "desviador_trasero": "microSHIFT Advent, 8v",
        "mandos": "microSHIFT"
      },
      "frenos": {
        "conjunto": "Tektro HD-R280"
      },
      "ruedas": {
        "llantas": "Alloy, 700c",
        "neumaticos": "Pathfinder Sport 700x42c"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "7",
    "name": "Brompton C Line Explore",
    "marca": "Brompton",
    "category": "urbana",
    "gama": "alta",
    "description": "La icónica bicicleta plegable británica de alta gama, ideal para combinar transporte público y oficinas.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Brompton+C+Line+Explore",
    "image_url": "https://m.media-amazon.com/images/I/61tJm1U8L+L._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 38000,
    "discountedPrice": 35999,
    "showInTopMenu": true,
    "tipo_frenos": "zapata",
    "material_cuadro": "acero",
    "peso_bici_kg": 11.5,
    "num_marchas": 6,
    "talla_cuadro": "unica",
    "garantia_años": 7,
    "score_rendimiento": 8.5,
    "score_comodidad": 8,
    "score_durabilidad": 9.8,
    "score_calidad_precio": 7.5,
    "score_peso": 9,
    "score_versatilidad": 9.8,
    "ideal_para": "Ejecutivos y viajeros urbanos que necesitan plegarla y guardarla bajo el escritorio.",
    "pros": "Mecanismo de plegado ultra compacto insuperable|Durabilidad legendaria del cuadro de acero",
    "contras": "Precio elevado|Dirección muy nerviosa al principio",
    "destacado_editorial": "La obra maestra definitiva de la ingeniería de plegado urbano.",
    "valoracion_media": 4.9,
    "resenas_resumen": "Se pliega en segundos y cabe en cualquier rincón del metro o la oficina. Una inversión para toda la vida.",
    "componentes": {
      "estructura": {
        "cuadro": "Acero tratado con soldadura fuerte",
        "horquilla": "Acero"
      },
      "transmision": {
        "desviador_trasero": "Sistema interno de maza BWR de 6 velocidades",
        "mandos": "Brompton trigger"
      },
      "frenos": {
        "conjunto": "Brompton dual pivot"
      },
      "ruedas": {
        "llantas": "16 pulgadas doble pared",
        "neumaticos": "Schwalbe Marathon Racer"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "8",
    "name": "Tern Verge P10",
    "marca": "Tern",
    "category": "urbana",
    "gama": "alta",
    "description": "Bicicleta plegable de alto rendimiento con ruedas de 20 pulgadas y cuadro rígido para rodar a gran velocidad.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Tern+Verge+P10",
    "image_url": "https://m.media-amazon.com/images/I/71Yv3C9rEBL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 32000,
    "discountedPrice": 29999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 11.7,
    "num_marchas": 10,
    "talla_cuadro": "unica",
    "garantia_años": 5,
    "score_rendimiento": 9,
    "score_comodidad": 8.2,
    "score_durabilidad": 9,
    "score_calidad_precio": 7.8,
    "score_peso": 8.8,
    "score_versatilidad": 9,
    "ideal_para": "Ciclistas urbanos que buscan la velocidad de una bicicleta de ruta en un formato plegable.",
    "pros": "Rigidez de cuadro sobresaliente para ser plegable|Transmisión de 10 velocidades muy capaz",
    "contras": "Ocupa un poco más de espacio plegada que una Brompton",
    "destacado_editorial": "Rendimiento sin concesiones en una bicicleta plegable deportiva.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Impresionante cómo rueda en carretera. No parece una bicicleta plegable por lo rígida y rápida que se siente.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio hydroformed Tarsus",
        "horquilla": "Aluminio aero"
      },
      "transmision": {
        "desviador_trasero": "Shimano Deore, 10v",
        "mandos": "Shimano Deore"
      },
      "frenos": {
        "conjunto": "Shimano hydraulic disc"
      },
      "ruedas": {
        "llantas": "Kinetix Pro Disc",
        "neumaticos": "Schwalbe Kojak 20x1.35"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "9",
    "name": "Specialized Sirrus X 6.0",
    "marca": "Specialized",
    "category": "urbana",
    "gama": "alta",
    "description": "Cuadro completo de carbono FACT 9r con tecnología Future Shock para absorber vibraciones en ciudad.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+Sirrus+X+6.0",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 45000,
    "discountedPrice": 41999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 9.8,
    "num_marchas": 12,
    "talla_cuadro": "L",
    "garantia_años": 5,
    "score_rendimiento": 9.5,
    "score_comodidad": 9.2,
    "score_durabilidad": 8.8,
    "score_calidad_precio": 7.2,
    "score_peso": 9.5,
    "score_versatilidad": 9,
    "ideal_para": "Entusiastas del fitness y transporte urbano de lujo ultraligero.",
    "pros": "Cuadro de carbono ultraligero|Sistema Future Shock que elimina fatiga en manos",
    "contras": "Precio exclusivo",
    "destacado_editorial": "La cúspide de la ingeniería ligera para la movilidad urbana moderna.",
    "valoracion_media": 4.9,
    "resenas_resumen": "Pesa casi nada y el sistema Future Shock en el manillar es magia pura contra los baches de la calle.",
    "componentes": {
      "estructura": {
        "cuadro": "FACT 9r Carbon, Future Shock 1.5",
        "horquilla": "Carbon monocoque"
      },
      "transmision": {
        "desviador_trasero": "SRAM NX Eagle, 12v",
        "mandos": "SRAM NX Eagle trigger"
      },
      "frenos": {
        "conjunto": "SRAM Level TL hidráulico"
      },
      "ruedas": {
        "llantas": "Alloy Disc, tubeless ready",
        "neumaticos": "Pathfinder Pro 2Bliss Ready 700x38c"
      }
    },
    "disciplina": "urbana"
  },
  {
    "id": "10",
    "name": "Triban RC 100",
    "marca": "Triban",
    "category": "ruta",
    "gama": "entrada",
    "description": "Bicicleta de ruta accesible, robusta y con geometría cómoda para iniciarse en el ciclismo de carretera.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Triban+RC+100",
    "image_url": "https://m.media-amazon.com/images/I/71mZ6x8-yLL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 8500,
    "discountedPrice": 7999,
    "showInTopMenu": true,
    "tipo_frenos": "zapata",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 11.3,
    "num_marchas": 7,
    "talla_cuadro": "M",
    "garantia_años": 2,
    "score_rendimiento": 6.8,
    "score_comodidad": 7.8,
    "score_durabilidad": 8,
    "score_calidad_precio": 9,
    "score_peso": 7,
    "score_versatilidad": 7.5,
    "ideal_para": "Principiantes que quieren probar el ciclismo de ruta sin gastar una fortuna.",
    "pros": "Precio imbatible para entrar a la ruta|Cuadro de aluminio resistente con garantía",
    "contras": "Manetas de cambio de puño (grip shift) poco convencionales en ruta",
    "destacado_editorial": "El pasaporte más económico y fiable al mundo del asfalto y las rodadas largas.",
    "valoracion_media": 4.5,
    "resenas_cantidad": 1200,
    "resenas_resumen": "Sorprende lo bien que rueda en carretera plana. Perfecta para dar los primeros pedazos en ruta.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio 6061 T6 con geometría confort",
        "horquilla": "Acero"
      },
      "transmision": {
        "desviador_trasero": "Microshift 7 velocidades",
        "mandos": "Microshift giratorio"
      },
      "frenos": {
        "conjunto": "Brakes Promax RC-471"
      },
      "ruedas": {
        "llantas": "Triban 700c aluminio",
        "neumaticos": "Triban Resist 700x28c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "11",
    "name": "Schwinn Phocus 1400",
    "marca": "Schwinn",
    "category": "ruta",
    "gama": "entrada",
    "description": "Bicicleta de ruta con cuadro de aluminio y horquilla de carbono para mayor absorción de impactos.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Schwinn+Phocus+1400",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "is_featured": false,
    "retailPrice": 9500,
    "discountedPrice": 8899,
    "showInTopMenu": false,
    "tipo_frenos": "zapata",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 12,
    "num_marchas": 14,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 7,
    "score_comodidad": 7.5,
    "score_durabilidad": 7.5,
    "score_calidad_precio": 8.2,
    "score_peso": 7.2,
    "score_versatilidad": 7,
    "ideal_para": "Entrenamientos iniciales de ruta y traslados rápidos.",
    "pros": "Horquilla de carbono incluida en gama de entrada|Transmisión Shimano Tourney de doble plato",
    "contras": "Peso un poco elevado para exigencias de competición",
    "destacado_editorial": "Tecnología de carbono al alcance de cualquier bolsillo rutero.",
    "valoracion_media": 4.2,
    "resenas_resumen": "Muy bonita estética y responde bien en carretera. El cambio al manillar de carreras toma días de adaptación.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio Schwinn road",
        "horquilla": "Carbono road"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney 14v",
        "mandos": "Shimano A050"
      },
      "frenos": {
        "conjunto": "Promax aleación pivot"
      },
      "ruedas": {
        "llantas": "Alex Alum 700c",
        "neumaticos": "700x25c"
      }
    },
    "disciplina": "ruta",
    "isFeatured": false
  },
  {
    "id": "12",
    "name": "Giant Contend 3",
    "marca": "Giant",
    "category": "ruta",
    "gama": "entrada",
    "description": "Fabricada por el mayor productor mundial de cuadros, ofrece una excelente base de aluminio con geometría all-rounder.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Giant+Contend+3",
    "image_url": "https://m.media-amazon.com/images/I/71qV-6N+8LL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 12500,
    "discountedPrice": 11899,
    "showInTopMenu": false,
    "tipo_frenos": "zapata",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 9.9,
    "num_marchas": 16,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 7.8,
    "score_comodidad": 8,
    "score_durabilidad": 9,
    "score_calidad_precio": 8.8,
    "score_peso": 8.2,
    "score_versatilidad": 8,
    "ideal_para": "Salidas de fin de semana en carretera y entrenamiento cardiovascular.",
    "pros": "Cuadro de aluminio de altísima calidad industrial|Peso muy contenido para su gama",
    "contras": "Frenos de zapata tradicionales (no disco)",
    "destacado_editorial": "Calidad de cuadro insuperable para dar el salto al ciclismo serio.",
    "valoracion_media": 4.7,
    "resenas_resumen": "Se nota la calidad Giant en cada soldadura. Es ligera, rueda suave y los componentes Shimano Claris van perfectos.",
    "componentes": {
      "estructura": {
        "cuadro": "ALUXX-Grade Aluminum",
        "horquilla": "Advanced-Grade Composite"
      },
      "transmision": {
        "desviador_trasero": "Shimano Claris, 16v",
        "mandos": "Shimano Claris"
      },
      "frenos": {
        "conjunto": "Tektro TK-B177"
      },
      "ruedas": {
        "llantas": "Giant S-R3 wheelset",
        "neumaticos": "Giant S-R3 AC 700x28c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "13",
    "name": "Specialized Allez Sport",
    "marca": "Specialized",
    "category": "ruta",
    "gama": "media",
    "description": "Una bicicleta de ruta ágil, ligera y versátil con transmisión Shimano Sora de 9 velocidades.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+Allez+Sport",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 18500,
    "discountedPrice": 17499,
    "showInTopMenu": false,
    "tipo_frenos": "zapata",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 9.5,
    "num_marchas": 18,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8.5,
    "score_comodidad": 8,
    "score_durabilidad": 9.2,
    "score_calidad_precio": 8.5,
    "score_peso": 8.8,
    "score_versatilidad": 8.5,
    "ideal_para": "Entrenamientos de ruta frecuentes, granfondos y grupos de ciclismo.",
    "pros": "Geometría de competición accesible|Cuadro de aluminio premium E5",
    "contras": "Frenos de zapata en un mercado que migra a disco",
    "destacado_editorial": "El estándar de oro de las bicicletas de ruta de aluminio.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Ágil, rígida donde debe serlo y muy reactiva al pedalear de pie en las subidas.",
    "componentes": {
      "estructura": {
        "cuadro": "Specialized E5 Premium Aluminum",
        "horquilla": "FACT full carbon"
      },
      "transmision": {
        "desviador_trasero": "Shimano Sora, 9v",
        "mandos": "Shimano Sora STI"
      },
      "frenos": {
        "conjunto": "Axis 1.0 dual-pivot"
      },
      "ruedas": {
        "llantas": "Axis Sport",
        "neumaticos": "RoadSport 700x26c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "14",
    "name": "Trek Domane AL 4",
    "marca": "Trek",
    "category": "ruta",
    "gama": "media",
    "description": "Bicicleta de ruta endurance con frenos de disco hidráulicos y espacio para neumáticos más anchos.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Trek+Domane+AL+4",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 24000,
    "discountedPrice": 22499,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 10.3,
    "num_marchas": 20,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8.6,
    "score_comodidad": 9.2,
    "score_durabilidad": 9,
    "score_calidad_precio": 8.5,
    "score_peso": 8,
    "score_versatilidad": 9.2,
    "ideal_para": "Rodadas de larga distancia en superficies mixtas con total comodidad.",
    "pros": "Frenos de disco hidráulicos seguros en todo clima|Geometría endurance que previene fatiga en espalda",
    "contras": "Un poco más pesada que modelos de pura competición",
    "destacado_editorial": "Comodidad legendaria para devorar kilómetros sin fatiga en carretera.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Puedes rodar durante 4 horas seguidas sin sentir el cuerpo adolorido. Los frenos hidráulicos son una delicia.",
    "componentes": {
      "estructura": {
        "cuadro": "Alpha Aluminum Serie 100 endurance",
        "horquilla": "Domane AL carbon"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tiagra, 10v",
        "mandos": "Shimano Tiagra hydraulic"
      },
      "frenos": {
        "conjunto": "Shimano Tiagra hydraulic disc"
      },
      "ruedas": {
        "llantas": "Bontrager Tubeless Ready",
        "neumaticos": "Bontrager R1 Hard-Case Lite 700x32c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "15",
    "name": "Cannondale Synapse Sora",
    "marca": "Cannondale",
    "category": "ruta",
    "gama": "media",
    "description": "Geometría orientada a la comodidad con micro-suspensión SAVE integrada para absorber baches en carretera.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Cannondale+Synapse+Sora",
    "image_url": "https://m.media-amazon.com/images/I/71qS+c4tLFL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 19999,
    "discountedPrice": 18499,
    "showInTopMenu": false,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 10.5,
    "num_marchas": 18,
    "talla_cuadro": "L",
    "garantia_años": 5,
    "score_rendimiento": 8.2,
    "score_comodidad": 9,
    "score_durabilidad": 8.8,
    "score_calidad_precio": 8.3,
    "score_peso": 8,
    "score_versatilidad": 8.8,
    "ideal_para": "Granfondos y cicloturismo de media distancia por carreteras secundarias.",
    "pros": "Tecnología SAVE que absorbe vibraciones|Postura cómoda",
    "contras": "Frenos de disco mecánicos en lugar de hidráulicos",
    "destacado_editorial": "Ingeniería de absorción inteligente para rutas largas.",
    "valoracion_media": 4.6,
    "resenas_resumen": "Absorbe de manera increíble las irregularidades del pavimento agrietado.",
    "componentes": {
      "estructura": {
        "cuadro": "SmartForm C2 Alloy con micro-suspensión SAVE",
        "horquilla": "BallisTec Carbon"
      },
      "transmision": {
        "desviador_trasero": "Shimano Sora, 9v",
        "mandos": "Shimano Sora"
      },
      "frenos": {
        "conjunto": "Promax Revelator mechanical disc"
      },
      "ruedas": {
        "llantas": "RD 3.0, 28h",
        "neumaticos": "Vittoria Zaffiro 700x30c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "16",
    "name": "Specialized S-Works Tarmac SL8",
    "marca": "Specialized",
    "category": "ruta",
    "gama": "alta",
    "description": "La bicicleta de ruta más rápida del mundo, combinando aerodinámica extrema y ligereza superior.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+S-Works+Tarmac+SL8",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 180000,
    "discountedPrice": 169999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 6.8,
    "num_marchas": 24,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 10,
    "score_comodidad": 8.5,
    "score_durabilidad": 9,
    "score_calidad_precio": 6.5,
    "score_peso": 10,
    "score_versatilidad": 8.5,
    "ideal_para": "Competencia profesional, criteriums y ciclistas que exigen lo absoluto máximo nivel.",
    "pros": "Aerodinámica y peso pluma imbatibles (6.8kg legales UCI)|Transmisión electrónica inalámbrica SRAM RED AXS",
    "contras": "Precio exclusivo para competición de alto nivel",
    "destacado_editorial": "La obra maestra absoluta de la velocidad en ruta.",
    "valoracion_media": 5,
    "resenas_resumen": "Es una auténtica nave espacial. Las subidas parecen llanos y la velocidad en bajada corta el aire como ninguna otra.",
    "componentes": {
      "estructura": {
        "cuadro": "FACT 12r Carbon, Rider First Engineered",
        "horquilla": "FACT 12r Carbon"
      },
      "transmision": {
        "desviador_trasero": "SRAM RED AXS electronic, 12v",
        "mandos": "SRAM RED AXS hydraulic"
      },
      "frenos": {
        "conjunto": "SRAM RED AXS hydraulic disc"
      },
      "ruedas": {
        "llantas": "Roval Rapide CLX II tubeless",
        "neumaticos": "S-Works Turbo Rapidair 700x26c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "17",
    "name": "Trek Madone SLR 9",
    "marca": "Trek",
    "category": "ruta",
    "gama": "alta",
    "description": "Superbike aerodinámica con tecnología IsoFlow en el cuadro para flexión aerodinámica y confort.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Trek+Madone+SLR+9",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 175000,
    "discountedPrice": 164999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 7.3,
    "num_marchas": 24,
    "talla_cuadro": "L",
    "garantia_años": 5,
    "score_rendimiento": 9.8,
    "score_comodidad": 8.8,
    "score_durabilidad": 9,
    "score_calidad_precio": 6.8,
    "score_peso": 9.5,
    "score_versatilidad": 8,
    "ideal_para": "Triatlones, contrarreloj y etapas de velocidad pura en carretera.",
    "pros": "Tecnología IsoFlow única que absorbe impactos en sillín|Aerodinámica de túnel de viento extrema",
    "contras": "Mantenimiento complejo debido a la integración total de cables",
    "destacado_editorial": "Rendimiento aerodinámico cortando el viento con elegancia futurista.",
    "valoracion_media": 4.9,
    "resenas_resumen": "A partir de 35 km/h sientes cómo la bicicleta corta el aire. El diseño con el agujero IsoFlow llama la atención de todos.",
    "componentes": {
      "estructura": {
        "cuadro": "OCLV Carbon Serie 800 con IsoFlow",
        "horquilla": "Madone SLR full carbon aero"
      },
      "transmision": {
        "desviador_trasero": "Shimano Dura-Ace Di2 R9250, 12v",
        "mandos": "Shimano Dura-Ace Di2"
      },
      "frenos": {
        "conjunto": "Shimano Dura-Ace hydraulic disc"
      },
      "ruedas": {
        "llantas": "Bontrager Aeolus RSL 51 Tubeless Ready",
        "neumaticos": "Bontrager R4 320 700x25c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "18",
    "name": "Pinarello Dogma F",
    "marca": "Pinarello",
    "category": "ruta",
    "gama": "alta",
    "description": "La leyenda italiana de competición utilizada por campeones del Tour de Francia.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Pinarello+Dogma+F",
    "image_url": "https://m.media-amazon.com/images/I/71qV-6N+8LL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 190000,
    "discountedPrice": 179999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 6.9,
    "num_marchas": 24,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 9.9,
    "score_comodidad": 8.5,
    "score_durabilidad": 9.5,
    "score_calidad_precio": 6.5,
    "score_peso": 9.8,
    "score_versatilidad": 8.2,
    "ideal_para": "Amantes del ciclismo clásico de máxima gama que buscan exclusividad y rendimiento Pro Tour.",
    "pros": "Estética italiana inconfundible y asimétrica|Rigidez extrema en caja de pedalier",
    "contras": "Costo extremadamente alto",
    "destacado_editorial": "El arte y la ciencia del ciclismo profesional italiano en sus manos.",
    "valoracion_media": 5,
    "resenas_resumen": "Una joya de la ingeniería. La transferencia de potencia al pedalear de pie es perfecta.",
    "componentes": {
      "estructura": {
        "cuadro": "Carbono Torayca T1100 1K Dream Carbon",
        "horquilla": "Onda F fork con aeroblade"
      },
      "transmision": {
        "desviador_trasero": "Campagnolo Super Record EPS Wireless 12v",
        "mandos": "Campagnolo EPS"
      },
      "frenos": {
        "conjunto": "Campagnolo hydraulic disc"
      },
      "ruedas": {
        "llantas": "FULCRUM Wind 40 DB",
        "neumaticos": "Continental Grand Prix 5000 700x25c"
      }
    },
    "disciplina": "ruta"
  },
  {
    "id": "19",
    "name": "Schwinn High Timber AL",
    "marca": "Schwinn",
    "category": "montana",
    "gama": "entrada",
    "description": "Bicicleta de montaña polivalente con cuadro de aluminio y suspensión delantera para caminos rurales.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Schwinn+High+Timber+AL",
    "image_url": "https://m.media-amazon.com/images/I/81fH+uYl1xL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 7800,
    "discountedPrice": 7199,
    "showInTopMenu": true,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 16,
    "num_marchas": 21,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 6.5,
    "score_comodidad": 7.5,
    "score_durabilidad": 7.5,
    "score_calidad_precio": 8.5,
    "score_peso": 5.8,
    "score_versatilidad": 8,
    "ideal_para": "Paseos recreativos por terracería ligera, parques y caminos rurales.",
    "pros": "Precio económico para iniciarse en montaña|Cuadro de aluminio resistente",
    "contras": "Peso elevado y componentes mecánicos básicos",
    "destacado_editorial": "Aventuras accesibles en caminos de tierra sin romper la alcancía.",
    "valoracion_media": 4.2,
    "resenas_resumen": "Buena bicicleta para caminos de terracería y uso recreativo de fin de semana.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio MTB geometry",
        "horquilla": "Suspensión delantera acero 60mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney 21v",
        "mandos": "Shimano twist shifters"
      },
      "frenos": {
        "conjunto": "Frenos de disco mecánico"
      },
      "ruedas": {
        "llantas": "Aluminio 27.5\"",
        "neumaticos": "MTB tacos 27.5x2.1\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "20",
    "name": "Mongoose Switchback",
    "marca": "Mongoose",
    "category": "montana",
    "gama": "entrada",
    "description": "Diseñada para soportar castigo en senderos principiantes con geometría divertida y componentes firmes.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Mongoose+Switchback",
    "image_url": "https://m.media-amazon.com/images/I/71Q3hP8z+9L._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 8400,
    "discountedPrice": 7799,
    "showInTopMenu": false,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 15.8,
    "num_marchas": 21,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 6.8,
    "score_comodidad": 7.5,
    "score_durabilidad": 8,
    "score_calidad_precio": 8.5,
    "score_peso": 6,
    "score_versatilidad": 8,
    "ideal_para": "Iniciación al ciclismo off-road y caminos de terracería.",
    "pros": "Cuadro robusto a prueba de errores de principiante|Buena tracción en tierra",
    "contras": "Suspensión delantera básica",
    "destacado_editorial": "Diversión garantizada en tu primer contacto con la montaña.",
    "valoracion_media": 4.3,
    "resenas_resumen": "Aguanta muy bien los baches y caminos rudos de tierra.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio Tectonic T1",
        "horquilla": "Suspensión de muelle 80mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney 21v",
        "mandos": "Shimano EZ-Fire"
      },
      "frenos": {
        "conjunto": "Disco mecánico Promax"
      },
      "ruedas": {
        "llantas": "Alloy 27.5",
        "neumaticos": "Knobby 2.1\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "21",
    "name": "Specialized Rockhopper Sport",
    "marca": "Specialized",
    "category": "montana",
    "gama": "entrada",
    "description": "Una auténtica máquina de montaña con cuadro de aluminio premium y frenos de disco hidráulicos.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+Rockhopper+Sport",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 16500,
    "discountedPrice": 15499,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 13.5,
    "num_marchas": 18,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8.2,
    "score_comodidad": 8,
    "score_durabilidad": 9.2,
    "score_calidad_precio": 8.8,
    "score_peso": 7.5,
    "score_versatilidad": 9,
    "ideal_para": "Senderos de montaña intermedios y rutas de fin de semana con desniveles.",
    "pros": "Frenos hidráulicos fiables en bajadas con lodo|Cuadro de aluminio de alta gama con cableado interno",
    "contras": "Peso moderado en componentes de entrada",
    "destacado_editorial": "El punto de referencia en rendimiento para bicicletas de montaña accesibles.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Los frenos hidráulicos marcan una diferencia abismal en bajada. Es una bicicleta muy noble en los senderos.",
    "componentes": {
      "estructura": {
        "cuadro": "Specialized A1 Premium Aluminum",
        "horquilla": "SR Suntour XCM con bloqueo"
      },
      "transmision": {
        "desviador_trasero": "Shimano Alivio, 9v (doble plato)",
        "mandos": "Shimano Altus"
      },
      "frenos": {
        "conjunto": "Shimano BR-MT200 hidráulico"
      },
      "ruedas": {
        "llantas": "Alloy, 25mm internal width",
        "neumaticos": "Fast Trak Sport 29x2.35\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "22",
    "name": "Trek Marlin 7",
    "marca": "Trek",
    "category": "montana",
    "gama": "media",
    "description": "Bicicleta de montaña lista para senderos técnicos con transmisión monoplato moderna.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Trek+Marlin+7",
    "image_url": "https://m.media-amazon.com/images/I/61kX5j5w5LL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 18999,
    "discountedPrice": 17499,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 13.8,
    "num_marchas": 10,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8.5,
    "score_comodidad": 7.5,
    "score_durabilidad": 9,
    "score_calidad_precio": 8.5,
    "score_peso": 7.5,
    "score_versatilidad": 9,
    "ideal_para": "Senderos técnicos de XC, piedras y raíces con total seguridad.",
    "pros": "Transmisión monoplato Shimano Deore 1x10 eficiente|Geometría moderna de trail",
    "contras": "Llantas de fábrica no tubeless",
    "destacado_editorial": "La puerta de entrada ideal al verdadero rendimiento de montaña.",
    "valoracion_media": 4.8,
    "resenas_cantidad": 950,
    "resenas_resumen": "La transmisión monoplato es increíblemente cómoda en subidas técnicas. Cero cadenas caídas.",
    "componentes": {
      "estructura": {
        "cuadro": "Alpha Silver Aluminum, guiado interno",
        "horquilla": "RockShox Judy, 100mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Deore M5120, 10v",
        "mandos": "Shimano Deore M4100"
      },
      "frenos": {
        "conjunto": "Shimano MT200 hidráulico"
      },
      "ruedas": {
        "llantas": "Bontrager Connection",
        "neumaticos": "Bontrager XR2 Comp 29x2.20\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "23",
    "name": "Giant Talon 1",
    "marca": "Giant",
    "category": "montana",
    "gama": "media",
    "description": "Geometría equilibrada para subir con eficiencia y bajar con control absoluto.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Giant+Talon+1",
    "image_url": "https://m.media-amazon.com/images/I/71qV-6N+8LL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 17999,
    "discountedPrice": 16899,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 13.2,
    "num_marchas": 10,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8.4,
    "score_comodidad": 7.8,
    "score_durabilidad": 9,
    "score_calidad_precio": 8.7,
    "score_peso": 8,
    "score_versatilidad": 8.9,
    "ideal_para": "Cross-country recreativo y excursiones largas por la montaña.",
    "pros": "Horquilla con bloqueo remoto al manillar|Cuadro ligero ALUXX",
    "contras": "Puños de manillar algo firmes",
    "destacado_editorial": "Eficiencia japonesa y cuadro Giant para dominar cualquier colina.",
    "valoracion_media": 4.7,
    "resenas_resumen": "El bloqueo remoto de la suspensión en el manillar es comodísimo al pasar de terracería a pavimento.",
    "componentes": {
      "estructura": {
        "cuadro": "ALUXX-Grade Aluminum",
        "horquilla": "SXC32-2 RL air, 100mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Deore, 10v",
        "mandos": "Shimano Deore"
      },
      "frenos": {
        "conjunto": "Tektro HDM-275 hidráulico"
      },
      "ruedas": {
        "llantas": "Giant GX03V 29",
        "neumaticos": "Maxxis Rekon Race 29x2.25\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "24",
    "name": "Cannondale Trail 4",
    "marca": "Cannondale",
    "category": "montana",
    "gama": "media",
    "description": "Cuadro con diseño SAVE y dirección lanzada para estabilidad superior en descensos rápidos.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Cannondale+Trail+4",
    "image_url": "https://m.media-amazon.com/images/I/71qS+c4tLFL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 19500,
    "discountedPrice": 17999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 13.4,
    "num_marchas": 11,
    "talla_cuadro": "L",
    "garantia_años": 5,
    "score_rendimiento": 8.6,
    "score_comodidad": 8,
    "score_durabilidad": 9,
    "score_calidad_precio": 8.5,
    "score_peso": 8,
    "score_versatilidad": 9,
    "ideal_para": "Senderos dinámicos y descensos técnicos divertidos.",
    "pros": "Transmisión Shimano Deore de 11 velocidades de rango amplio|Excelente absorción trasera vertical",
    "contras": "Peso competitivo estándar",
    "destacado_editorial": "Control y agilidad superior en cada bajada técnica.",
    "valoracion_media": 4.8,
    "resenas_resumen": "En las bajadas rápidas de terracería se siente muy plantada y segura gracias a su geometría.",
    "componentes": {
      "estructura": {
        "cuadro": "SmartForm C3 Alloy, SAVE micro-suspensión",
        "horquilla": "SR Suntour XCR LO, 100mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Deore M5100, 11v",
        "mandos": "Shimano Deore"
      },
      "frenos": {
        "conjunto": "Shimano MT200 hidráulico"
      },
      "ruedas": {
        "llantas": "WTB SX19, 32h",
        "neumaticos": "Schwalbe Rocket Rick 29x2.25\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "25",
    "name": "Specialized Epic World Cup Pro",
    "marca": "Specialized",
    "category": "montana",
    "gama": "alta",
    "description": "La bicicleta de doble suspensión más avanzada del mundo para Cross-Country de competición.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+Epic+World+Cup+Pro",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 150000,
    "discountedPrice": 139999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 10.4,
    "num_marchas": 12,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 10,
    "score_comodidad": 8.5,
    "score_durabilidad": 9,
    "score_calidad_precio": 6.8,
    "score_peso": 9.8,
    "score_versatilidad": 8.5,
    "ideal_para": "Competición XC profesional y circuitos de Copa del Mundo.",
    "pros": "Amortiguador trasero integrado con tecnología Brain (rígida cuando pedaleas, suave al impactar)|Carbono FACT 12r ultraligero",
    "contras": "Precio exclusivo de alta gama",
    "destacado_editorial": "La cúspide tecnológica para ganar carreras de montaña.",
    "valoracion_media": 5,
    "resenas_resumen": "Es una locura cómo sube: parece una bici rígida al pedalear sentado, pero absorbe los golpes fuertes al bajar.",
    "componentes": {
      "estructura": {
        "cuadro": "FACT 12r Carbon, WC Specific Geometry",
        "horquilla": "RockShox SID SL Ultimate Brain, 110mm"
      },
      "transmision": {
        "desviador_trasero": "SRAM X0 Eagle AXS inalámbrico, 12v",
        "mandos": "SRAM AXS Controller"
      },
      "frenos": {
        "conjunto": "SRAM Level Silver hidráulico 4 pistones"
      },
      "ruedas": {
        "llantas": "Roval Control Carbon tubeless",
        "neumaticos": "Specialized Fast Trak 29x2.3\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "26",
    "name": "Trek Supercaliber SLR 9.9",
    "marca": "Trek",
    "category": "montana",
    "gama": "alta",
    "description": "Cuadro de carbono OCLV serie 800 con amortiguador integrado Strut de 80mm para máxima velocidad en XC.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Trek+Supercaliber+SLR+9.9",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 160000,
    "discountedPrice": 149999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 9.5,
    "num_marchas": 12,
    "talla_cuadro": "L",
    "garantia_años": 5,
    "score_rendimiento": 9.9,
    "score_comodidad": 8.4,
    "score_durabilidad": 9,
    "score_calidad_precio": 6.7,
    "score_peso": 10,
    "score_versatilidad": 8.2,
    "ideal_para": "Maratones de montaña y XC de competición pura.",
    "pros": "Peso pluma casi idéntico a una rígida (9.5kg)|Transmisión SRAM XX SL Eagle AXS con medidor de potencia",
    "contras": "Recorrido trasero ajustado puramente a rendimiento XC",
    "destacado_editorial": "La fusión perfecta entre la ligereza de una rígida y el control de una doble.",
    "valoracion_media": 4.9,
    "resenas_resumen": "Acelera como un cohete en las subidas de terracería y baja con una estabilidad pasmosa.",
    "componentes": {
      "estructura": {
        "cuadro": "OCLV Mountain Carbon serie SLR",
        "horquilla": "Fox 34 Step-Cast Factory, 110mm"
      },
      "transmision": {
        "desviador_trasero": "SRAM XX SL Eagle AXS T-Type, 12v",
        "mandos": "SRAM AXS Pod Ultimate"
      },
      "frenos": {
        "conjunto": "SRAM Level Ultimate hidráulico"
      },
      "ruedas": {
        "llantas": "Bontrager Kovee RSL Carbon Tubeless Ready",
        "neumaticos": "Bontrager Sainte-Anne RSL 29x2.20\""
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "27",
    "name": "Santa Cruz Blur CC",
    "marca": "Santa Cruz",
    "category": "montana",
    "gama": "alta",
    "description": "Suspensión VPP legendaria de carbono CC para arrasar en maratones de montaña y resistencia.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Santa+Cruz+Blur+CC",
    "image_url": "https://m.media-amazon.com/images/I/71qV-6N+8LL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 145000,
    "discountedPrice": 135999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 10.8,
    "num_marchas": 12,
    "talla_cuadro": "M",
    "garantia_años": 10,
    "score_rendimiento": 9.8,
    "score_comodidad": 9,
    "score_durabilidad": 9.8,
    "score_calidad_precio": 7,
    "score_peso": 9.5,
    "score_versatilidad": 9.2,
    "ideal_para": "Senderos agresivos de montaña y carreras de resistencia tipo maratón.",
    "pros": "Garantía de cuadro de por vida Santa Cruz|Sistema de suspensión VPP súper activo",
    "contras": "Precio muy elevado",
    "destacado_editorial": "La robustez y rendimiento californiano optimizado para ganar en los cerros.",
    "valoracion_media": 5,
    "resenas_resumen": "La suspensión trasera traba y absorbe como ninguna otra. Es una bicicleta indestructible y rápida.",
    "componentes": {
      "estructura": {
        "cuadro": "Carbon CC 100mm Travel VPP",
        "horquilla": "Fox 34 Float SC Factory, 120mm"
      },
      "transmision": {
        "desviador_trasero": "SRAM X01 Eagle AXS, 12v",
        "mandos": "SRAM AXS Controller"
      },
      "frenos": {
        "conjunto": "SRAM Level Silver Stealth hidráulico"
      },
      "ruedas": {
        "llantas": "Reserve 28nc Carbon rims",
        "neumaticos": "Maxxis Aspen 29x2.4\" WT"
      }
    },
    "disciplina": "montana"
  },
  {
    "id": "28",
    "name": "State Bicycle Co. All-Road",
    "marca": "State Bicycle",
    "category": "gravel",
    "gama": "entrada",
    "description": "Bicicleta de gravel versátil con opción de ruedas 700c o 650b, lista para explorar caminos de tierra y asfalto.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=State+Bicycle+Co+All-Road",
    "image_url": "https://m.media-amazon.com/images/I/71Yv3C9rEBL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 11500,
    "discountedPrice": 10499,
    "showInTopMenu": true,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 11.9,
    "num_marchas": 11,
    "talla_cuadro": "M",
    "garantia_años": 2,
    "score_rendimiento": 7.5,
    "score_comodidad": 8.2,
    "score_durabilidad": 8.5,
    "score_calidad_precio": 9.2,
    "score_peso": 7.5,
    "score_versatilidad": 9.5,
    "ideal_para": "Aventuras de bikepacking económico y exploración de caminos mixtos.",
    "pros": "Excelente relación calidad-precio en gravel|Múltiples ojales para portabultos y bolsas de viaje",
    "contras": "Frenos de disco mecánicos requieren ajuste frecuente",
    "destacado_editorial": "La puerta de entrada más divertida y económica al mundo del gravel y bikepacking.",
    "valoracion_media": 4.6,
    "resenas_cantidad": 640,
    "resenas_resumen": "Una maravilla para salir a explorar caminos rurales sin gastar una fortuna. Muy cómoda y estable.",
    "componentes": {
      "estructura": {
        "cuadro": "4130 Chromoly steel o Aluminum 6061",
        "horquilla": "Carbono con soportes de carga"
      },
      "transmision": {
        "desviador_trasero": "State All-Road 1x11",
        "mandos": "State All-Road brake/shift lever"
      },
      "frenos": {
        "conjunto": "Disc brakes mecánicos con rotores 160mm"
      },
      "ruedas": {
        "llantas": "Tubeless compatible 700c / 650b",
        "neumaticos": "All-Road 38c o 47c"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "29",
    "name": "Retrospec Amzell Gravel Bike",
    "marca": "Retrospec",
    "category": "gravel",
    "gama": "entrada",
    "description": "Diseñada para rodar con soltura en grava, pavimento y tierra con manillar abierto flare.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Retrospec+Amzell+Gravel+Bike",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 10200,
    "discountedPrice": 9499,
    "showInTopMenu": false,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 12.2,
    "num_marchas": 14,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 7.2,
    "score_comodidad": 8,
    "score_durabilidad": 7.8,
    "score_calidad_precio": 8.8,
    "score_peso": 7.2,
    "score_versatilidad": 8.8,
    "ideal_para": "Paseos mixtos de fin de semana y trayectos diarios de aventura.",
    "pros": "Manillar con apertura (flare) que da gran control en bajadas de terracería|Precio accesible",
    "contras": "Componentes de entrada básicos",
    "destacado_editorial": "Aventuras de gravel al alcance de todos.",
    "valoracion_media": 4.4,
    "resenas_resumen": "Muy divertida en terracería y se comporta decentemente bien en pavimento.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio ligero gravel",
        "horquilla": "Acero de alta resistencia"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney/Claris mix 14v",
        "mandos": "Integrated shift levers"
      },
      "frenos": {
        "conjunto": "Disco mecánico dual"
      },
      "ruedas": {
        "llantas": "Alloy 700c",
        "neumaticos": "Gravel 700x38c"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "30",
    "name": "Schwinn Mendocino Gravel Bike",
    "marca": "Schwinn",
    "category": "gravel",
    "gama": "entrada",
    "description": "Geometría cómoda de aventura con manillar de ruta ensanchado y neumáticos de gran balón.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Schwinn+Mendocino+Gravel+Bike",
    "image_url": "https://m.media-amazon.com/images/I/81fH+uYl1xL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 10900,
    "discountedPrice": 9999,
    "showInTopMenu": false,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 12.5,
    "num_marchas": 16,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 7.3,
    "score_comodidad": 8.3,
    "score_durabilidad": 8,
    "score_calidad_precio": 8.6,
    "score_peso": 7,
    "score_versatilidad": 9,
    "ideal_para": "Exploración de caminos de tierra y rutas mixtas urbanas.",
    "pros": "Postura cómoda para rodadas largas|Cubiertas anchas absorbentes",
    "contras": "Peso algo elevado",
    "destacado_editorial": "Confort y versatilidad para explorar más allá del pavimento.",
    "valoracion_media": 4.5,
    "resenas_resumen": "Los neumáticos anchos tragan muy bien las piedras y baches del camino.",
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio Schwinn adventure",
        "horquilla": "Acero rígida"
      },
      "transmision": {
        "desviador_trasero": "Shimano Claris 16v",
        "mandos": "Shimano Claris STI"
      },
      "frenos": {
        "conjunto": "Disco mecánico"
      },
      "ruedas": {
        "llantas": "Alloy 700c",
        "neumaticos": "700x40c gravel"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "31",
    "name": "Specialized Diverge E5 Elite",
    "marca": "Specialized",
    "category": "gravel",
    "gama": "media",
    "description": "La referente del gravel con geometría progresiva, espacio para cubiertas anchas y frenos hidráulicos.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+Diverge+E5+Elite",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 25000,
    "discountedPrice": 23499,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 10.2,
    "num_marchas": 10,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 8.8,
    "score_comodidad": 9,
    "score_durabilidad": 9.2,
    "score_calidad_precio": 8.5,
    "score_peso": 8.5,
    "score_versatilidad": 9.6,
    "ideal_para": "Rutas largas de gravel, bikepacking y exploración todoterreno.",
    "pros": "Geometría Future Shock compatible y súper estable|Frenos hidráulicos GRX de alta gama para gravel",
    "contras": "Precio medio-alto",
    "destacado_editorial": "La bicicleta definitiva para perderse por caminos sin asfaltar.",
    "valoracion_media": 4.9,
    "resenas_resumen": "Es increíble lo estable que se siente en bajadas de terracería con piedras sueltas. Una gozada total.",
    "componentes": {
      "estructura": {
        "cuadro": "Specialized E5 Premium Aluminum, Future Shock drop",
        "horquilla": "FACT carbon"
      },
      "transmision": {
        "desviador_trasero": "Shimano GRX RX400, 10v",
        "mandos": "Shimano GRX hydraulic"
      },
      "frenos": {
        "conjunto": "Shimano GRX 400 hidráulico"
      },
      "ruedas": {
        "llantas": "Axis Elite Disc",
        "neumaticos": "Pathfinder Sport 700x38c"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "32",
    "name": "Trek Checkpoint ALR 5",
    "marca": "Trek",
    "category": "gravel",
    "gama": "media",
    "description": "Cuadro de aluminio Alpha serie 300 con transmisión Shimano GRX específica para gravel.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Trek+Checkpoint+ALR+5",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 28000,
    "discountedPrice": 25999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 10,
    "num_marchas": 11,
    "talla_cuadro": "L",
    "garantia_años": 5,
    "score_rendimiento": 9,
    "score_comodidad": 9,
    "score_durabilidad": 9.5,
    "score_calidad_precio": 8.8,
    "score_peso": 8.8,
    "score_versatilidad": 9.8,
    "ideal_para": "Exploración todoterreno exigente y competencias de gravel.",
    "pros": "Transmisión Shimano GRX 1x11 específica para gravel con embrague antirrebote|Pasos de rueda generosos para cubiertas anchas",
    "contras": "Inversión importante",
    "destacado_editorial": "Rendimiento y resistencia sin límites en los terrenos más salvajes.",
    "valoracion_media": 4.9,
    "resenas_resumen": "El embrague del desviador GRX evita que la cadena salte en los tramos más picados de piedra.",
    "componentes": {
      "estructura": {
        "cuadro": "Alpha Aluminium Serie 300, StashPoint",
        "horquilla": "Checkpoint carbon"
      },
      "transmision": {
        "desviador_trasero": "Shimano GRX RX810, 11v",
        "mandos": "Shimano GRX RX600"
      },
      "frenos": {
        "conjunto": "Shimano GRX hydraulic disc"
      },
      "ruedas": {
        "llantas": "Bontrager Paradigm Tubeless Ready",
        "neumaticos": "Bontrager Girona Comp 700x40c"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "33",
    "name": "Canyon Grizl 6",
    "marca": "Canyon",
    "category": "gravel",
    "gama": "media",
    "description": "Bicicleta de gravel alemana robusta, diseñada para expediciones de aventura y rendimiento implacable.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Canyon+Grizl+6",
    "image_url": "https://m.media-amazon.com/images/I/71qV-6N+8LL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 26500,
    "discountedPrice": 24999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 9.9,
    "num_marchas": 20,
    "talla_cuadro": "M",
    "garantia_años": 6,
    "score_rendimiento": 8.9,
    "score_comodidad": 8.8,
    "score_durabilidad": 9.2,
    "score_calidad_precio": 9,
    "score_peso": 9,
    "score_versatilidad": 9.5,
    "ideal_para": "Rutas de aventura extrema y bikepacking de varios días.",
    "pros": "Geometría lista para cargas pesadas de bikepacking|Frenos hidráulicos Shimano GRX",
    "contras": "Venta directa online (requiere montaje parcial)",
    "destacado_editorial": "Ingeniería alemana indestructible para la aventura gravel.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Impresionante estabilidad cargada con alforjas en caminos de terracería montañosa.",
    "componentes": {
      "estructura": {
        "cuadro": "Canyon Grizl AL aluminium",
        "horquilla": "Canyon FK0087 CF carbon"
      },
      "transmision": {
        "desviador_trasero": "Shimano GRX RX400, 2x10",
        "mandos": "Shimano GRX RX400"
      },
      "frenos": {
        "conjunto": "Shimano GRX RX400 hidráulico"
      },
      "ruedas": {
        "llantas": "DT Swiss Gravel LN",
        "neumaticos": "Schwalbe G-One Bite 45mm"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "34",
    "name": "Specialized S-Works Diverge",
    "marca": "Specialized",
    "category": "gravel",
    "gama": "alta",
    "description": "Cuadro de carbono FACT 11r con sistema Future Shock 2.0 hidráulico ajustable para gravel extremo.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Specialized+S-Works+Diverge",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 160000,
    "discountedPrice": 149999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 8.9,
    "num_marchas": 12,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 9.9,
    "score_comodidad": 9.8,
    "score_durabilidad": 9.2,
    "score_calidad_precio": 6.8,
    "score_peso": 9.8,
    "score_versatilidad": 10,
    "ideal_para": "Competiciones Pro de gravel y exploración de nivel supremo sin límites de terreno.",
    "pros": "Suspensión Future Shock 2.0 en el manillar con ajuste hidráulico|Cuadro FACT 11r ultraligero con compartimento SWAT interno",
    "contras": "Precio exclusivo",
    "destacado_editorial": "La cúspide tecnológica indiscutible para el gravel de competición.",
    "valoracion_media": 5,
    "resenas_resumen": "El sistema Future Shock absorbe todas las vibraciones de las piedras. Es como flotar sobre la terracería.",
    "componentes": {
      "estructura": {
        "cuadro": "FACT 11r Carbon, SWAT door, Future Shock 2.0",
        "horquilla": "FUTURE SHOCK 2.0 w/ Damper"
      },
      "transmision": {
        "desviador_trasero": "SRAM RED XPLR eTap AXS, 12v",
        "mandos": "SRAM RED eTap AXS hydraulic"
      },
      "frenos": {
        "conjunto": "SRAM RED eTap AXS hydraulic disc"
      },
      "ruedas": {
        "llantas": "Roval Terra CLX Carbon tubeless",
        "neumaticos": "Pathfinder Pro 2Bliss Ready 700x42c"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "35",
    "name": "Canyon Grizl CF SLX 8",
    "marca": "Canyon",
    "category": "gravel",
    "gama": "alta",
    "description": "Carbono de alto módulo SLX con tija de sillín de ballesta y transmisión electrónica SRAM Force AXS.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Canyon+Grizl+CF+SLX+8",
    "image_url": "https://m.media-amazon.com/images/I/71qV-6N+8LL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 115000,
    "discountedPrice": 105999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 8.7,
    "num_marchas": 12,
    "talla_cuadro": "L",
    "garantia_años": 6,
    "score_rendimiento": 9.7,
    "score_comodidad": 9.5,
    "score_durabilidad": 9,
    "score_calidad_precio": 7.5,
    "score_peso": 9.9,
    "score_versatilidad": 9.6,
    "ideal_para": "Expediciones ultraligeras de bikepacking y carreras rápidas de gravel.",
    "pros": "Tija de sillín de carbono flexible VCLS que elimina vibraciones|Transmisión electrónica inalámbrica SRAM Force",
    "contras": "Disponibilidad limitada en tienda online",
    "destacado_editorial": "Velocidad y confort de carbono alemán para la aventura total.",
    "valoracion_media": 4.9,
    "resenas_resumen": "La tija de sillín se flexiona sutilmente absorbiendo cada bache. Increíblemente ligera y rápida.",
    "componentes": {
      "estructura": {
        "cuadro": "Canyon Grizl CF SLX Carbon",
        "horquilla": "Canyon FK0087 CF carbon"
      },
      "transmision": {
        "desviador_trasero": "SRAM Force XPLR eTap AXS, 12v",
        "mandos": "SRAM Force eTap AXS"
      },
      "frenos": {
        "conjunto": "SRAM Force eTap AXS hydraulic"
      },
      "ruedas": {
        "llantas": "DT Swiss GRC 1600 Spline db",
        "neumaticos": "Schwalbe G-One Bite 45mm"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "36",
    "name": "Cervélo Áspero-5",
    "marca": "Cervélo",
    "category": "gravel",
    "gama": "alta",
    "description": "Diseñada puramente para ganar carreras de gravel con aerodinámica probada en túnel de viento.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Cervelo+Aspero-5",
    "image_url": "https://m.media-amazon.com/images/I/71mZ6x8-yLL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 140000,
    "discountedPrice": 129999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "carbono",
    "peso_bici_kg": 8.3,
    "num_marchas": 12,
    "talla_cuadro": "M",
    "garantia_años": 5,
    "score_rendimiento": 9.9,
    "score_comodidad": 8.6,
    "score_durabilidad": 9,
    "score_calidad_precio": 7,
    "score_peso": 10,
    "score_versatilidad": 9,
    "ideal_para": "Competencia de gravel, velocidad pura en pistas de tierra compacta.",
    "pros": "Aerodinámica superior probada en túnel de viento|Rigidez extrema para aceleraciones fulgurantes",
    "contras": "Geometría muy agresiva orientada a competir",
    "destacado_editorial": "La máquina de competición definitiva para volar sobre la grava.",
    "valoracion_media": 5,
    "resenas_resumen": "Se siente exactamente como una bicicleta de ruta de alto rendimiento pero con cubiertas anchas para tierra.",
    "componentes": {
      "estructura": {
        "cuadro": "Cervélo Aspero-5 Carbon",
        "horquilla": "Cervélo All-Carbon, Tapered Aspero-5 Fork"
      },
      "transmision": {
        "desviador_trasero": "SRAM RED eTap AXS 1x12",
        "mandos": "SRAM RED eTap AXS"
      },
      "frenos": {
        "conjunto": "SRAM RED eTap AXS hydraulic"
      },
      "ruedas": {
        "llantas": "Reserve 32/38 Tubeless Ready w/ DT240",
        "neumaticos": "Panaracer GravelKing SK 700x38c"
      }
    },
    "disciplina": "gravel"
  },
  {
    "id": "37",
    "name": "Lectric XP 3.0",
    "marca": "Lectric eBikes",
    "category": "electrica",
    "gama": "entrada",
    "description": "Bicicleta eléctrica plegable con neumáticos anchos fat tire, potente motor y gran autonomía.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Lectric+XP+3.0",
    "image_url": "https://m.media-amazon.com/images/I/71Yv3C9rEBL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 22000,
    "discountedPrice": 19999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 29.5,
    "num_marchas": 7,
    "talla_cuadro": "unica",
    "garantia_años": 1,
    "score_rendimiento": 8,
    "score_comodidad": 9,
    "score_durabilidad": 8,
    "score_calidad_precio": 9,
    "score_peso": 5,
    "score_versatilidad": 9.5,
    "ideal_para": "Transporte diario mixto, campistas y usuarios que buscan una eBike potente y plegable.",
    "pros": "Potente motor de cubo y batería de gran capacidad|Llantas anchas que absorben baches",
    "contras": "Bicicleta pesada para cargar al hombro",
    "destacado_editorial": "La revolución de la movilidad eléctrica compacta y potente.",
    "valoracion_media": 4.6,
    "resenas_cantidad": 3100,
    "resenas_resumen": "Fuerza brutal en el motor para subir pendientes pronunciadas sin cansarse nada.",
    "tipo_motor": "trasero",
    "autonomia_km": 70,
    "capacidad_bateria_wh": 500,
    "potencia_w": 500,
    "velocidad_max_kmh": 45,
    "tiempo_carga_h": 5,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio 6061 plegable reforzado",
        "horquilla": "Suspensión delantera hidráulica 80mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney 7v",
        "mandos": "Shimano Twist Grip"
      },
      "frenos": {
        "conjunto": "Frenos de disco hidráulicos 180mm"
      },
      "ruedas": {
        "llantas": "20 pulgadas aleación",
        "neumaticos": "Fat tires 20\" x 3.0\""
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "38",
    "name": "Ancheer 26\" Electric Mountain Bike",
    "marca": "Ancheer",
    "category": "electrica",
    "gama": "entrada",
    "description": "Bicicleta eléctrica de montaña económica con batería extraíble y múltiples niveles de asistencia.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Ancheer+Electric+Mountain+Bike",
    "image_url": "https://m.media-amazon.com/images/I/81fH+uYl1xL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 14000,
    "discountedPrice": 12899,
    "showInTopMenu": false,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 23,
    "num_marchas": 21,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 6.8,
    "score_comodidad": 7.5,
    "score_durabilidad": 7.2,
    "score_calidad_precio": 8.8,
    "score_peso": 6,
    "score_versatilidad": 8,
    "ideal_para": "Traslados urbanos y caminos sencillos de campo con asistencia eléctrica económica.",
    "pros": "Precio muy económico para ser eBike|Batería extraíble fácil de cargar en casa",
    "contras": "Componentes mecánicos básicos y peso considerable",
    "destacado_editorial": "Entrada económica al mundo de la asistencia eléctrica.",
    "valoracion_media": 4.1,
    "resenas_resumen": "Ayuda muchísimo en las subidas al trabajo. Excelente relación calidad-precio.",
    "tipo_motor": "trasero",
    "autonomia_km": 40,
    "capacidad_bateria_wh": 374,
    "potencia_w": 350,
    "velocidad_max_kmh": 32,
    "tiempo_carga_h": 4,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio aleación 6061",
        "horquilla": "Suspensión delantera de acero"
      },
      "transmision": {
        "desviador_trasero": "Shimano Tourney 21v",
        "mandos": "Shimano thumb shifter"
      },
      "frenos": {
        "conjunto": "Disco mecánico delantero y trasero"
      },
      "ruedas": {
        "llantas": "26 pulgadas doble pared",
        "neumaticos": "26\" x 2.1\" MTB"
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "39",
    "name": "Jasion EB5 Electric Bike",
    "marca": "Jasion",
    "category": "electrica",
    "gama": "entrada",
    "description": "eBike urbana de estilo limpio con batería integrada en el cuadro y gran autonomía.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Jasion+EB5+Electric+Bike",
    "image_url": "https://m.media-amazon.com/images/I/71Q3hP8z+9L._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 15500,
    "discountedPrice": 13999,
    "showInTopMenu": false,
    "tipo_frenos": "disco mecanico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 22,
    "num_marchas": 7,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 7.2,
    "score_comodidad": 8,
    "score_durabilidad": 7.5,
    "score_calidad_precio": 8.9,
    "score_peso": 6.5,
    "score_versatilidad": 8.2,
    "ideal_para": "Desplazamientos diarios al trabajo por ciudad.",
    "pros": "Estética moderna con batería semi-integrada|Buena autonomía para el precio",
    "contras": "Frenos mecánicos estándar",
    "destacado_editorial": "Estilo urbano eléctrico limpio y accesible.",
    "valoracion_media": 4.4,
    "resenas_resumen": "El diseño no parece una bicicleta eléctrica barata. La batería dura los trayectos de toda la semana.",
    "tipo_motor": "trasero",
    "autonomia_km": 60,
    "capacidad_bateria_wh": 360,
    "potencia_w": 350,
    "velocidad_max_kmh": 35,
    "tiempo_carga_h": 5,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio urbano",
        "horquilla": "Rígida de acero"
      },
      "transmision": {
        "desviador_trasero": "Shimano 7 velocidades",
        "mandos": "Shimano grip"
      },
      "frenos": {
        "conjunto": "Disco mecánico"
      },
      "ruedas": {
        "llantas": "26 pulgadas",
        "neumaticos": "26\" x 2.0\" urban"
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "40",
    "name": "Rad Power Bikes RadRunner 3 Plus",
    "marca": "Rad Power Bikes",
    "category": "electrica",
    "gama": "media",
    "description": "Utilidat eBike robusta diseñada para transportar carga, pasajeros y resistir el uso diario intenso.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=RadRunner+3+Plus",
    "image_url": "https://m.media-amazon.com/images/I/71Yv3C9rEBL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 34000,
    "discountedPrice": 31999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 34.5,
    "num_marchas": 7,
    "talla_cuadro": "unica",
    "garantia_años": 1,
    "score_rendimiento": 8.6,
    "score_comodidad": 9.2,
    "score_durabilidad": 9.4,
    "score_calidad_precio": 8.2,
    "score_peso": 4,
    "score_versatilidad": 9.8,
    "ideal_para": "Repartos urbanos, familias y transporte de carga pesada sin esfuerzo.",
    "pros": "Capacidad de carga masiva y accesorios modulares|Frenos hidráulicos de pistón múltiple",
    "contras": "Muy pesada y voluminosa",
    "destacado_editorial": "La bestia de carga urbana eléctrica por excelencia.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Sustituye por completo al coche para hacer compras y llevar cosas pesadas por la ciudad.",
    "tipo_motor": "trasero",
    "autonomia_km": 75,
    "capacidad_bateria_wh": 672,
    "potencia_w": 750,
    "velocidad_max_kmh": 32,
    "tiempo_carga_h": 6,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio custom 6061 con plataforma de carga integrada",
        "horquilla": "Suspensión de doble pletina custom"
      },
      "transmision": {
        "desviador_trasero": "Shimano Altus 7v",
        "mandos": "Shimano 7-speed trigger"
      },
      "frenos": {
        "conjunto": "Frenos hidráulicos custom con pistones cerámicos"
      },
      "ruedas": {
        "llantas": "Aleación reforzada",
        "neumaticos": "Rad Power Tires 20\" x 3.3\" con banda reflectante"
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "41",
    "name": "Aventon Level.2 Commuter eBike",
    "marca": "Aventon",
    "category": "electrica",
    "gama": "media",
    "description": "Bicicleta eléctrica de commuter con sensor de par (torque sensor), luces integradas y pantalla a color.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Aventon+Level.2+Commuter+eBike",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 31000,
    "discountedPrice": 28999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 26.3,
    "num_marchas": 8,
    "talla_cuadro": "M",
    "garantia_años": 2,
    "score_rendimiento": 8.8,
    "score_comodidad": 9,
    "score_durabilidad": 9,
    "score_calidad_precio": 8.8,
    "score_peso": 5.5,
    "score_versatilidad": 9.4,
    "ideal_para": "Desplazamientos diarios al trabajo con asistencia natural y fluida.",
    "pros": "Sensor de par (torque sensor) que entrega potencia de forma ultra natural según tu pedaleo|Luces integradas en el cuadro",
    "contras": "Peso elevado común en eBikes de cercanías",
    "destacado_editorial": "La eBike de commuter inteligente con asistencia ultra natural.",
    "valoracion_media": 4.9,
    "resenas_resumen": "El sensor de par hace que parezca que tienes súper piernas en lugar de un motor eléctrico. Una maravilla.",
    "tipo_motor": "trasero",
    "autonomia_km": 95,
    "capacidad_bateria_wh": 672,
    "potencia_w": 500,
    "velocidad_max_kmh": 45,
    "tiempo_carga_h": 4.5,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio 6061 con batería integrada y luces traseras en cuadro",
        "horquilla": "Suspensión delantera con bloqueo 75mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Acera 8v",
        "mandos": "Shimano 8-speed"
      },
      "frenos": {
        "conjunto": "Frenos de disco hidráulicos con rotores 180mm"
      },
      "ruedas": {
        "llantas": "Aluminio doble pared",
        "neumaticos": "27.5\" x 2.1\" con protección antipinchazos"
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "42",
    "name": "Ride1Up 700 Series eBike",
    "marca": "Ride1Up",
    "category": "electrica",
    "gama": "media",
    "description": "Componentes de primera calidad, velocidad tope elevada y cuadro elegante para commuting rápido.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Ride1Up+700+Series+eBike",
    "image_url": "https://m.media-amazon.com/images/I/71qS+c4tLFL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 30000,
    "discountedPrice": 27999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 24.5,
    "num_marchas": 8,
    "talla_cuadro": "L",
    "garantia_años": 1,
    "score_rendimiento": 8.9,
    "score_comodidad": 8.8,
    "score_durabilidad": 8.8,
    "score_calidad_precio": 9,
    "score_peso": 6,
    "score_versatilidad": 9,
    "ideal_para": "Commuters que buscan velocidad y componentes de alta gama sin pagar precio de marca prémium.",
    "pros": "Velocidad máxima desbloqueada alta|Frenos hidráulicos Zoom de gran mordiente con corte eléctrico",
    "contras": "Servicio técnico limitado en algunas regiones",
    "destacado_editorial": "Potencia y componentes de lujo para el ciclista urbano veloz.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Vuela en las avenidas. Los componentes se sienten muy robustos y bien ensamblados.",
    "tipo_motor": "trasero",
    "autonomia_km": 80,
    "capacidad_bateria_wh": 672,
    "potencia_w": 750,
    "velocidad_max_kmh": 45,
    "tiempo_carga_h": 5,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio alloy con cableado interno",
        "horquilla": "Air suspension fork con bloqueo"
      },
      "transmision": {
        "desviador_trasero": "Shimano Altus 8v",
        "mandos": "Shimano Altus"
      },
      "frenos": {
        "conjunto": "Zoom hydraulic disc con rotores 180mm"
      },
      "ruedas": {
        "llantas": "Aleación con radios reforzados",
        "neumaticos": "Schwalbe Super Moto-X 27.5\" x 2.4\""
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "43",
    "name": "Juiced RipCurrent S Fat Tire eBike",
    "marca": "Juiced Bikes",
    "category": "electrica",
    "gama": "alta",
    "description": "Una bestia eléctrica todoterreno con batería gigante de 52V y motor de potencia desmedida.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Juiced+RipCurrent+S",
    "image_url": "https://m.media-amazon.com/images/I/71r5T4X-kAL._AC_SL1500_.jpg",
    "isFeatured": true,
    "retailPrice": 52000,
    "discountedPrice": 48999,
    "showInTopMenu": true,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 35.8,
    "num_marchas": 9,
    "talla_cuadro": "M",
    "garantia_años": 1,
    "score_rendimiento": 9.5,
    "score_comodidad": 9.2,
    "score_durabilidad": 9,
    "score_calidad_precio": 8,
    "score_peso": 4,
    "score_versatilidad": 9.6,
    "ideal_para": "Aventuras off-road pesadas, arena, nieve y velocidad máxima asistida.",
    "pros": "Sistema eléctrico de 52V hiper potente|Batería de enorme capacidad para recorridos kilométricos",
    "contras": "Muy pesada y aparatosa para guardar en departamentos",
    "destacado_editorial": "Potencia bruta y autonomía descomunal para conquistar cualquier superficie.",
    "valoracion_media": 4.9,
    "resenas_resumen": "Sube por la arena de la playa y por pendientes imposibles como si nada. Es una auténtica moto con pedales.",
    "tipo_motor": "trasero",
    "autonomia_km": 110,
    "capacidad_bateria_wh": 998,
    "potencia_w": 1000,
    "velocidad_max_kmh": 50,
    "tiempo_carga_h": 7,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio 6061 heavy-duty",
        "horquilla": "Inverted air suspension fork 100mm"
      },
      "transmision": {
        "desviador_trasero": "Shimano Altus 9v",
        "mandos": "Shimano 9-speed"
      },
      "frenos": {
        "conjunto": "Frenos hidráulicos de 4 pistones con rotores 180mm"
      },
      "ruedas": {
        "llantas": "Mag wheels / alloy rims",
        "neumaticos": "Kenda Krusade Fat Tires 26\" x 4.0\""
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "44",
    "name": "Super73-RX Mojave",
    "marca": "Super73",
    "category": "electrica",
    "gama": "alta",
    "description": "eBike de estilo moto todoterreno con suspensión ajustable y conectividad inteligente app.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Super73-RX+Mojave",
    "image_url": "https://m.media-amazon.com/images/I/71Yv3C9rEBL._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 65000,
    "discountedPrice": 59999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 36.2,
    "num_marchas": 10,
    "talla_cuadro": "unica",
    "garantia_años": 1,
    "score_rendimiento": 9.2,
    "score_comodidad": 9,
    "score_durabilidad": 9.2,
    "score_calidad_precio": 7.2,
    "score_peso": 4,
    "score_versatilidad": 8.8,
    "ideal_para": "Entusiastas del estilo moto-eléctrica y diversión off-road con diseño icónico.",
    "pros": "Estética única y robustez legendaria Super73|Suspensión delantera y trasera totalmente ajustable",
    "contras": "Posición de pedaleo fija no ideal para rutas largas de ciclismo tradicional",
    "destacado_editorial": "El estilo rebelde de las motos de cross en formato eBike de alta gama.",
    "valoracion_media": 4.8,
    "resenas_resumen": "Llama la atención en todas partes y la suspensión absorbe baches bestiales en caminos de tierra.",
    "tipo_motor": "trasero",
    "autonomia_km": 75,
    "capacidad_bateria_wh": 960,
    "potencia_w": 1200,
    "velocidad_max_kmh": 50,
    "tiempo_carga_h": 6,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio serie 6000",
        "horquilla": "Inverted coil-spring fork con ajuste de compresión"
      },
      "transmision": {
        "desviador_trasero": "Shimano Zee 10v",
        "mandos": "Shimano Zee trigger"
      },
      "frenos": {
        "conjunto": "Tektro hydraulic disc con rotores 203mm"
      },
      "ruedas": {
        "llantas": "Aleación robusta",
        "neumaticos": "GRZLY All-Terrain Tires 20\" x 4.5\" delantera y 5\" trasera"
      }
    },
    "disciplina": "electrica"
  },
  {
    "id": "45",
    "name": "Priority Current E-Bike",
    "marca": "Priority Bicycles",
    "category": "electrica",
    "gama": "alta",
    "description": "eBike de alta gama con motor central de marca, transmisión por correa de carbono Gates y maza interna sin mantenimiento.",
    "affiliate_link": "https://www.amazon.com.mx/s?k=Priority+Current+E-Bike",
    "image_url": "https://m.media-amazon.com/images/I/71Xm06mJt8L._AC_SL1500_.jpg",
    "isFeatured": false,
    "retailPrice": 75000,
    "discountedPrice": 69999,
    "showInTopMenu": false,
    "tipo_frenos": "disco hidraulico",
    "material_cuadro": "aluminio",
    "peso_bici_kg": 23.8,
    "num_marchas": 5,
    "talla_cuadro": "M",
    "garantia_años": 2,
    "score_rendimiento": 9.6,
    "score_comodidad": 9.5,
    "score_durabilidad": 9.8,
    "score_calidad_precio": 8,
    "score_peso": 7,
    "score_versatilidad": 9.5,
    "ideal_para": "Commuters exigentes que buscan cero mantenimiento (sin cadena con grasa, sin cambios expuestos).",
    "pros": "Transmisión por correa Gates Carbon Drive (limpia, silenciosa, sin aceite)|Motor central potente de 500W con sensor de par fluidísimo",
    "contras": "Precio prémium",
    "destacado_editorial": "La perfección técnica del cero mantenimiento eléctrico urbano.",
    "valoracion_media": 4.9,
    "resenas_resumen": "Olvídate de mancharte las manos de grasa con cadenas. Es silenciosa, rapidísima y muy elegante.",
    "tipo_motor": "central",
    "autonomia_km": 80,
    "capacidad_bateria_wh": 500,
    "potencia_w": 500,
    "velocidad_max_kmh": 45,
    "tiempo_carga_h": 4,
    "componentes": {
      "estructura": {
        "cuadro": "Aluminio hidroformado con batería integrada",
        "horquilla": "Carbono rígida con soportes"
      },
      "transmision": {
        "desviador_trasero": "Maza interna Shimano Nexus 5v específica para eBike",
        "mandos": "Shimano twist shift"
      },
      "frenos": {
        "conjunto": "Tektro hydraulic disc dual-piston"
      },
      "ruedas": {
        "llantas": "Aluminio doble pared tubeless-ready",
        "neumaticos": "Wicklow 650bx47mm con banda reflectante"
      }
    },
    "disciplina": "electrica"
  }
];
