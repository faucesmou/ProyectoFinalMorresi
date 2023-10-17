import React, { useContext, useEffect, useState } from "react";
import Item2 from "./Item2";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../ThemeContext";
import BotonContador from "./ItemCount";
/* import { CartContext2 } from "../context/cartContext"; */
import { useParams } from "react-router-dom";
import {
  /*   doc, */
  getDocs,
  getFirestore,
  collection,
  /*  query,
  where,
  getDoc,
  addDoc, */
} from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]); // Usamos un estado local para almacenar los productos

  const { categoryId } = useParams();
  console.log("ESTE ES el categoryId: ", categoryId);
  const db = getFirestore();
  const collectionRef = collection(db, "items");
  /* const categoryFilter = categoryId
    ? where("category", "==", categoryId)
    :  query (collectionRef); */

  useEffect(() => {
    console.log("ESTE ES el categoryId numero 2: ", categoryId);

    const fetchProducts = async () => {
      try {
        // traigo todos los productos:

        const productsSnapshot = await getDocs(collectionRef);
        const allProducts = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoryId) {
          // Si tengo un categoryId en la URL, filtra localmente los productos
          const filteredProducts = allProducts.filter(
            (product) => product.categoryId === categoryId
          );
          setProducts(filteredProducts);
          console.log(
            "Consulta realizada con éxito y productos filtrados localmente en setProducts; ",
            products
          );
        } else {
          // Si no tienes un categoryId en la URL, muestra todos los productos
          setProducts(allProducts);
          console.log("Category Id: ", categoryId);
          console.log(
            "Consulta realizada con éxito, se muestran todos los productos; ",
            products
          );
        }
      } catch (error) {
        console.error(
          "Error buscando los productos en la base de datos, error:",
          error
        );
      }
    };
    // Antes de realizar una nueva consulta, limpia el estado de los productos
    console.log(
      "Consulta realizada con éxito y productos filtrados localmente en setProducts; ",
      products
    );
    setProducts([]);
    fetchProducts();
  }, [categoryId]); // Este efecto se ejecutará cuando cambie la categoría

  /*   const { cartState2 } = useContext(CartContext2);
  useEffect(() => {
    console.log("El estado del carrito se ha actualizado:", cartState2);
  }, [cartState2]); */

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="item-list-container"
      style={{
        background: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      {products.map((product) => (
        <Link
          to={`/item/${product.id}`}
          className="text-decoration-none"
          key={product.id}
        >
          <Item2 product={product} />
          <BotonContador producto={product} />
        </Link>
      ))}
    </div>
  );
}

export default ItemListContainer;

//intento de filtrar productos desde la URL hacia la base de datos:
/*   ? query(collectionRef, where("category", "==", categoryId))
: collectionRef;
const productsSnapshot = await getDocs(queryRef);
const productsData = productsSnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));
setProducts(productsData); */
/*  const [product, setProduct] = useState(null);


  const db = getFirestore();
  const [productsdb, setProductsdb] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  const collectionRef = categoryId
    ? query(collection(db, "items"), where("category", "==", categoryId))
    : collection(db, "items");

  getDocs(collectionRef)
    .then((response) => {
      const productsAdapted = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProductsdb(productsAdapted);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });


  const { cartState2 } = useContext(CartContext2);
  useEffect(() => {
    console.log("El estado del carrito se ha actualizado:", cartState2);
  }, [cartState2]);

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="item-list-container"
      style={{
        background: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      {products.map((product) => (
        <Link to={`/item/${product.id}`} className="text-decoration-none">
          <Item2 key={product.id} product={product} />
          <BotonContador producto={product} />
        </Link>
      ))}

    </div>
  );
} */

/*  <button onClick={() => insertarDatos()}> Agregar productos! </button> */

/*  useEffect(() => {
   const fetchData = async () => {
     try {
       const db = getFirestore();
       const biciRef = doc(db, "items", "uVLG31nSvmITcsRqpEYm");
       const snapshot = await getDoc(biciRef);
       
       if (snapshot.exists()) {
         setProduct({ id: snapshot.id, ...snapshot.data() });
         console.log('Snapshot correcto Este es el estado de product:', product);
       }
     } catch (error) {
       console.error('Error al obtener datos de Firestore:', error);
     }
   };
   
   fetchData();
 }, [0]); */

/* // creo constante con productos y luego función para insertarlos en base de datos por única vez:

const data = [
  {
    categoryId: "electrodomésticos",
    description: "Cafetera Dolce Gusto Lumio. La cafetera Dolce Gusto Lumio es de variedad automática que ha llegado con un diseño radical al que nos tenía acostumbrados Dolce Gusto.En este post te contamos todo lo que necesitas saber sobre ella, desde sus características técnicas hasta la calidad de las cápsulas o price.",
    image: "img-cafetera-moulinex.jpg",
        price: 100,
        stock: 58,
        title: "Cafetera Moulinex Dolce Gusto Edited"
      },
      {
        categoryId: "tecnología",
        description: "Macbook Pro 2019 Mpxq2ll/a Intel Core i5 2.3 Ghz 8gb RAM 128gb SSD Pantalla 13.3\" Retina Apple Nueva Original. Importada de USA. Se entrega con la factura de compra para contar con la garantía del fabricante",
        image: "img-macbook-pro-2019.jpg",
        price: 500,
        stock: 22,
        title: "Macbook Pro 2022"
      },
      {
        categoryId: "tecnología",
        description: "Experiencia visual excepcional. Mirá tus series y películas favoritas con la mejor definición.Tendrás colores brillantes y detalles precisos en todos tus contenidos.Disfrutá aún más del mejor entretenimiento gracias a su vasta pantalla y ángulos de visión amplios.",
        image: "img-samsung-galaxy-s10.jpg",
        price: 72999,
        stock: 63,
        title: "Samsung Galaxy S10"
      },
      {
        categoryId: "electrodomésticos",
        description: "Disfrutá de la frescura de tus alimentos y almacenalos de manera práctica y cómoda en tu heladera Whirlpool, la protagonista de tu cocina. Su sistema no frost evita la generación de escarcha y te permitirá conservar el sabor y las propiedades nutritivas de los productos.A su vez, su freezer cuenta con una capacidad de 86 litros, que facilitará la distribución y el orden de tus congelados para que no te preocupes por la falta de espacio.",
        image: "img-heladera-whirpool.jpg",
        price: 47900,
        stock: 13,
        title: "Heladera no frost Whirlpool WRM45A"
      },
      {
        categoryId: "tecnología",
        description: "Incluye la cámara D3500, el objetivo zoom AF-P DX NIKKOR 18-55mm y el superteleobjetivo zoom compacto AF-P DX NIKKOR 70-300mm. Ambos objetivos enfocan de forma rápida y silenciosa, lo que resulta ideal para grabar metraje de vídeo sin que se escuche apenas el ruido del accionamiento.",
        image: "img-camara-nikon.jpg",
        price: 53000,
        stock: 34,
        title: "Nikon Reflex D3500 - Kit"
      },
      {
        categoryId: "electrodomésticos",
        description: "AIRE SPLIT 3200W TACA-3200WCHSA/KC FC TCL. Capacidad frio 3200 Watts. Capacidad calor 3300 Watts. Potencia Electrica(W)frio 996. Potencia Electrica(W)calor 1028. Eficiencia energética calor C. Eficiencia energética frio A. Frigorias 2750 UNIDAD INTERIOR. Peso Bruto 10kg. Peso Neto 7 kg",
        image: "img-aire-acondicionado.jpg",
        price: 20999,
        stock: 59,
        title: "Aire Acondicionado 3200w Frio / Calor"
      },
      {
        categoryId: "tecnología",
        description: "PROCESADOR / CHIPSET. CPU: Intel Core i3(8a generación) 8130U / 2.2 GHz. Velocidad turbo máxima: 3, 4 GHz. Numero de núcleos: Doble núcleo. Cache: 4 MB. Arquitectura de 64 bit: ss. MEMORIA CACHÉ. Tamaño instalada: 4 MB. ALMACENAMIENTO. Interfaz Serial ATA - 600",
        image: "img-laptop-lenovo.jpg",
        price: 36700,
        stock: 27,
        title: "Notebook Lenovo I3 Intel 8gb Ram"
      },
      {
        categoryId: "tecnología",
        description: "¡El nuevo smartphone que lo tiene todo! Con este lanzamiento, Apple ha superado todos sus récords. Su diseño se destaca por sus líneas finas y distinguidas a partir de una sola hoja de vidrio resistente, combinada con aluminio de excelente calidad.",
        image: "img-iphone-11.jpg",
        price: 148000,
        stock: 11,
        title: "Apple iPhone 11 Pro Dual SIM 256 GB"
      },
      {
        categoryId: "tecnología",
        description: "El teclado mágico combina un diseño elegante con una batería recargable incorporada y funciones clave mejoradas. Con un mecanismo de tijera estable debajo de cada tecla, así como un recorrido de teclas optimizado y un perfil bajo, el Teclado Mágico ofrece una experiencia de escritura notablemente cómoda y precisa.",
        image: "img-apple-magic-keyboard.jpg",
        price: 11399,
        stock: 75,
        title: "Teclado Apple Magic Inalámbrico"
      },
      {
        categoryId: "tecnología",
        description: "Uso más cómodo para la mano derecha gracias a la forma contorneada con recubrimiento de goma blanda. Duración de las pilas hasta 18 meses, gracias al diseño para ahorrar energía.El M280 entra automáticamente en estado de suspensión cuando no se está usando.",
        image: "img-mouse-logitech.jpg",
        price: 1200,
        stock: 19,
        title: "Mouse Inalámbrico Logitech M280"
      },
      {
        categoryId: "tecnología",
        description: "Parlante Inalámbrico Bose Soundtouch 10. SoundTouch®.La manera más sencilla de reproducir música en todo su hogar de forma inalámbrica. Características. » Marca: Bose. » Modelo: SoundTouch. » Color: Negro",
        image: "img-parlante-bose.jpg",
        price: 29990,
        stock: 38,
        title: "Parlante Inalámbrico Bose Soundtouch 10"
      },
      {
        categoryId: "tecnología",
        description: "El sonido Surround de 5.1 canales y 1000 W proporciona un audio de verdadero impacto en los efectos especiales de películas y efectos de sonido de música y deportes. Con la tecnología Near Field Communication(NFC) podés disfrutar de Sonido One- Touch para reproducir música de forma instantánea",
        image: "img-home-theater-sony.jpg",
        price: 32990,
        stock: 82,
        title: "Home Theatre Sony Bdv-e4100"
      },
      {
        categoryId: "Hogar",
        description: "Con el Smart TV Samsung UN50MU6100, viví una nueva experiencia visual con la resolución 4K, que te presentará imágenes con gran detalle y de alta calidad. Ahora todo lo que veas cobrará vida con brillo y colores más reales. Gracias a su tamaño de 50\", podrás transformar tu espacio en una sala de cine y transportarte a donde quieras.",
        image: "img-tv-samsung-smart.jpg",
        price: 34990,
        stock: 64,
        title: "Smart TV Samsung 4K 50"
      },
      {
        categoryId: "tecnología",
        description: "Disfruta de tus películas favoritas con hasta cuatro veces más detalles que Full HD, gracias a la conversión de señales 4K. Cuando se conecta a un televisor compatible,un procesador de video avanzado convierte el video estándar en una señal cercana a la resolución 4K (3840 x 2160). Con ocho millones de píxeles, obtendrás imágenes más nítidas y detalladas, y la mayor calidad de la image te permite sentarte más cerca de la pantalla para que te sientas como en el cine.",
        image: "img-sony-blueray.jpg",
        price: 10999,
        stock: 47,
        title: "Sony S6700 Reproductor De Blu-ray"
      },
      {
        categoryId: "Hogar",
        description: "Bicicleta Mountain Bike Fierce Rodado 29 21 velocidades. Tipo: Mountain Bike. Rodado: 29. Material Cuadro: Aluminio. Talle: 18. Suspensión: Delantera. Velocidades: 21 - Shimano. Sistema de Freno: Disco Mecánico. Llantas: Doble pared.",
        image: "img-bicicleta-fierce.jpg",
        price: 15979,
        stock: 63,
        title: "Bicicleta Mountain Bike Fierce Rodado 29"
      },
      {
        categoryId: "tecnología",
        description: "Deja que la música dance cobre vida con EXTRA BASS™ Anima el ambiente con EXTRA BASS™1. Un radiador pasivo trabaja con el parlante monoaural para potenciar los tonos bajos y mejorar los graves, a pesar del tamaño compacto.",
        image: "img-parlante-sony.jpg",
        price: 4699,
        stock: 15,
        title: "Sony Srs-xb12 Parlante Bluetooth Portátil"
      }
    ];
    
    const insertarDatos =() => {
      const db = getFirestore();
    
      const collectionRef = collection(db, "items");
    
      for ( let item of data) {
        addDoc(collectionRef, item)
        .then(res => console.log('se insertó todo correctamente en la base de datos', res.id ))
        .catch(err => console.log(err))
      }
    } */
