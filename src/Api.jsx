export const fetchPerfumes = () => {
  const perfumes = [
    {
      name: "Y EDP 60ML",
      brand: "YVES SAINT LAURENT",
      description:
        "Un perfume fresco y elegante, con notas de bergamota, salvia y almizcle. Perfecto para ocasiones especiales.",
      image: "/images/yves.webp",
      category: "masculinas",
      price: 120,
      stock: 10,
    },
    {
      name: "BAD BOY LE PARFUM EDP 150ML",
      brand: "CAROLINA HERRERA",
      description:
        "Una fragancia audaz y seductora con notas de pimienta negra, cuero y vetiver. Ideal para la noche.",
      image: "/images/badboy.webp",
      category: "masculinas",
      price: 150,
      stock: 10,
    },
    {
      name: "PHANTOM EDT 50ML",
      brand: "RABANNE",
      description:
        "Un aroma futurista con notas de lavanda, limón y vainilla. Perfecto para los innovadores.",
      image: "/images/phantom.webp",
      category: "masculinas",
      price: 130,
      stock: 10,
    },
    {
      name: "BLACK OPIUM EDP 90ML",
      brand: "YVES SAINT LAURENT",
      description:
        "Un perfume dulce y adictivo con notas de café, jazmín y vainilla. Ideal para la mujer moderna.",
      image: "/images/belle.webp",
      category: "femeninas",
      price: 140,
      stock: 10,
    },
    {
      name: "BADEE AL OUD AMETHYST EDP 100ML",
      brand: "LATAFFA",
      description:
        "Maahir de Lattafa tiene una bella composición floral y amaderada.",
      image: "/images/Lataffa2.webp",
      category: "femeninas",
      price: 200,
      stock: 10,
    },

    {
      name: "SI EDP 100ML",
      brand: "ARMANI",
      description:
        "Un aroma elegante y sofisticado con notas de grosella negra, rosa y vainilla. Ideal para ocasiones especiales.",
      image: "/images/si.webp",
      category: "femeninas",
      price: 160,
      stock: 10,
    },
    {
      name: "CK EVERYONE EDT 100ML",
      brand: "CALVIN KLEIN",
      description:
        "Un perfume minimalista y fresco con notas de lavanda, menta y almizcle. Perfecto para cualquier ocasión.",
      image: "/images/CK.webp",
      category: "masculinas",
      price: 115,
      stock: 10,
    },
    {
      name: "SPORT EDT 100ML",
      brand: "AZZARO",
      description:
        "Una fragancia energética con notas de limón, jengibre y almizcle. Ideal para los deportistas.",
      image: "/images/Azz.webp",
      category: "masculinas",
      price: 125,
      stock: 10,
    },
    {
      name: "OLYMPEA SOLAR EDP INTENSE 80ML",
      brand: "RABANNE",
      description:
        "Una fragancia cálida y sensual con notas de flor de azahar, vainilla y ámbar. Perfecta para la noche.",
      image: "/images/Olympea.webp",
      category: "femeninas",
      price: 170,
      stock: 10,
    },
    {
      name: "RALPH'S CLUB PARFUM 100ML + MINI TALLA A ELECCIÓN DE REGALO",
      brand: "RALPH LAUREN",
      description:
        "Un set exclusivo que incluye una fragancia intensa con notas de lavanda, salvia y madera de cedro.",
      image: "/images/ralphCofre.webp",
      category: "cofres-sets",
      price: 200,
      stock: 10,
    },
    {
      name: "SAUVAGE PARFUM 100ML & AFTER SHAVE 50ML & DEODORANT STICK 75G SET",
      brand: "DIOR",
      description:
        "Un set que combina una fragancia rica en notas de bergamota, lavanda y almizcle con productos de cuidado personal.",
      image: "/images/sauvageCofre.webp",
      category: "cofres-sets",
      price: 220,
      stock: 10,
    },
    {
      name: "CHROME EDP 100ML & TRAVEL SIZE 10ML SET",
      brand: "AZZARO",
      description:
        "Un set vibrante con notas de limón, lavanda y vetiver, acompañado de productos de cuidado personal.",
      image: "/images/AzzaroCofre.webp",
      category: "cofres-sets",
      price: 210,
      stock: 10,
    },
    {
      name: "THE ONE MEN EDT 100ML & Y THE ONE MEN EDT 50ML SET",
      brand: "DOLCE&GABBANA",
      description:
        "Un set exclusivo con notas de tabaco, ámbar y especias, perfecto para hombres sofisticados.",
      image: "/images/DGset.webp",
      category: "cofres-sets",
      price: 230,
      stock: 10,
    },
    {
      name: "CHROME EDT 100ML & SHOWER GEL 50ML & TRAVEL SIZE 10ML SET",
      brand: "AZZARO",
      description:
        "Un set refrescante con notas de limón, romero y almizcle, ideal para el día a día.",
      image: "/images/AzzSet.webp",
      category: "cofres-sets",
      price: 190,
      stock: 10,
    },
    {
      name: "DYLAN BLUE POUR HOMME EDT 100ML + BOLSO A ELECCIÓN DE REGALO",
      brand: "VERSACE",
      description:
        "Un set lujoso con notas de bergamota, toronja y pachulí, perfecto para los amantes de la moda.",
      image: "/images/Versaceset.webp",
      category: "cofres-sets",
      price: 240,
      stock: 10,
    },
    {
      name: "ONYX EDP 100ML",
      brand: "CHER",
      description:
        "Un perfume misterioso y cautivador con notas de ámbar, almizcle y vainilla.",
      image: "/images/onyx.webp",
      category: "femeninas",
      price: 150,
      stock: 10,
    },
    {
      name: "MON PARIS EDP 90ML",
      brand: "YVES SAINT LAURENT",
      description:
        "Un perfume romántico con notas de fresa, jazmín y almizcle blanco, ideal para una noche especial.",
      image: "/images/monparis.webp",
      category: "femeninas",
      price: 175,
      stock: 10,
    },
    {
      name: "LIBRE INTENSE EDP 50ML",
      brand: "YVES SAINT LAURENT",
      description:
        "Una fragancia libre y audaz con notas de lavanda, naranja y vainilla, perfecta para el día a día.",
      image: "/images/Yves12.webp",
      category: "femeninas",
      price: 180,
      stock: 10,
    },
    {
      name: "SI PASSIONE EDP 100ML",
      brand: "ARMANI",
      description:
        "Una fragancia apasionada con notas de grosella negra, rosa y vainilla, ideal para mujeres seguras de sí mismas.",
      image: "/images/passione.webp",
      category: "femeninas",
      price: 190,
      stock: 10,
    },
    {
      name: "",
      brand: "JEAN PAUL GAULTIER",
      description:
        "El eau de parfum que provoca Scandal. A esta mujer elegante y sensual le encanta seducir. Es más, su audacia se divierte con Scandal desde lo alto de sus interminables piernas, que exhibe desnudas en su espectacular frasco. ¿Cómo se atreve? Pero no hay que fiarse de las apariencias, lejos de ser todo rosas, su eau de parfum chipre miel desprende una sobredosis de placeres carnales y exquisitos que trastoca los sentidos",
      image: "/images/scandall.webp",
      category: "femeninas",
      price: 160,
      stock: 10,
    },
    {
      name: "SI INTENSE EDP 50ML",
      brand: "ARMANI",
      description:
        "Una fragancia intensa con notas de grosella negra, rosa y ámbar, ideal para ocasiones especiales.",
      image: "/images/siIntense.webp",
      category: "femeninas",
      price: 200,
      stock: 10,
    },
    {
      name: "FAKHAR MEN EDP 100ML",
      brand: "LATAFFA",
      description:
        "Fakher Lattafa destaca un fougere – unión amaderada junto con elegantes notas de hoja violeta, nuez moscada masculina y bergamota. El corazón acentúa la salvia, el geranio agrio y la flor de azahar finamente condimentada con cilantro, mientras que tonka, pachulí, vainilla y sándalo permanecen en el camino, lo que atrae nuestra atención con fuertes tonos cremosos.",
      image: "/images/Lattafa3.webp",
      category: "masculinas",
      price: 200,
      stock: 10,
    },

    {
      name: "",
      brand: "LATAFFA",
      description:
        "Fakher Lattafa destaca un fougere – unión amaderada junto con elegantes notas de hoja violeta, nuez moscada masculina y bergamota. ",
      image: "/images/Lattafa1.webp",
      category: "masculinas",
      price: 200,
      stock: 10,
    },
    {
      name: "CK ONE EDT 200ML",
      brand: "CALVIN KLEIN",
      description:
        "Una fragancia fresca y unisex con notas de naranja, jengibre y almizcle. Perfecta para el día a día.",
      image: "/images/CK2.webp",
      category: "masculinas",
      price: 110,
      stock: 10,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(perfumes);
    }, 1000); // Simula un retraso de 1 segundo
  });
};
