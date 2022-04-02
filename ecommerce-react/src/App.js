import './App.css';
import React, {useState, useEffect} from 'react'
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// pages
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import NotFoundPage from './pages/NotFound';


function App() {
  // creo mock de productos
  const mockProducts = [{
    title: 'El Club de los Psicópatas',
    author:'John Katzenbach',
    description: 'Suspenso',
    longDescription: 'Alpha; Bravo; Charlie; Delta y Easy se hacen llamar los Muchachos de Jack; en honor a Jack el Destripador. Entre ellos no se conocen más que por un chat en la Dark Web donde comparten su verdadera pasión: ser artistas del asesinato. Cuando Connor y Niki irrumpen en la intimidad de su chat; la furia de estos psicópatas comienza a crecer y no se detendrán ante nada. Con una inteligencia feroz; los Muchachos de Jack planean como venganza la muerte de los dos adolescentes y sus familias. Sin embargo; Connor y Niki no son como el resto de las víctimas de estos asesinos seriales. La pesadilla comienza y solo hay dos opciones: dejarse cazar o sobrevivir.',
    price: 3149,
    stock: 10,
    img: 'books/book1.jpeg'
},
{
    title: 'Asesino de Brujas 1, La Bruja Blanca',
    author:'Shelby Mahurin',
    description: 'Ciencia ficción',
    longDescription: 'Unidos como uno para amarse; para honrarse o para arder. Dos años atrás; Louise le Blanc huyó de su aquelarre y se refugió en la ciudad de Cesarine; donde renunció a la magia para vivir de lo que pudiera robar. Allí; cazan a brujas como Lou. Les temen. Y las queman. Como cazador de la Iglesia; Reid Diggory ha vivido su vida bajo una regla: «No permitirás que ninguna bruja viva». Pero cuando Lou realiza una gran artimaña; tanto ella como Reid se ven obligados a aceptar una situación impensada: el matrimonio. Lou; incapaz de ignorar sus sentimientos que son cada vez más fuertes; pero sin poder cambiar quién es; Lou debe elegir. Asesino de brujas: la bruja blanca se desarrolla en un mundo de mujeres empoderadas; magia oscura y donde los romances son fuera de serie. Cuando lo termines de leer; querrás más.',
    price: 2390,
    stock: 18,
    img: 'books/book2.jpeg'
},
{
    title: 'El Italiano',
    author:'Arturo Pérez-Reverte',
    description: 'Ficción y literatura',
    longDescription: 'El italiano relata una asombrosa historia de amor; mar y guerra. En los años 1942 y 1943; durante la Segunda Guerra Mundial; buzos de combate italianos hundieron o dañaron catorce barcos aliados en Gibraltar y la bahía de Algeciras. En esta novela; inspirada en hechos reales; sólo algunos personajes y situaciones son imaginarios. Elena Arbués; una librera de veintisiete años; encuentrauna madrugada mientras pasea por la playa a uno de esos buzos; desvanecido entre la arena y el agua. Al socorrerlo; la joven ignora que esa determinación cambiará su vida y que el amor será sólo parte de una peligrosa aventura.',
    price: 3199,
    stock: 5,
    img: 'books/book3.jpeg'
},
{
    title: 'Anhelo',
    author:'Tracy Wolff',
    description: 'Ficción y literatura',
    longDescription: 'Mi mundo cambió en el instante en el que pisé el instituto Katmere. Aquí todo resulta extraño: la escuela; los alumnos; las asignaturas; y yo no soy más que una simple mortal entre ellos; dioses... o monstruos. Todavía no sé a qué bando pertenezco; si es que pertenezco a alguno; sólo sé que lo que parece unirlos a todos es su odio hacia mí. Pero entre ellos está Jaxon Vega; un vampiro que esconde oscuros secretos y que no ha sentido nada durante un siglo. Algo en él me atrae; apenas lo conozco; pero sé que hay algo roto en su interior que de alguna manera encaja con lo que hay roto en mí. Acercarme a él puede significar el fin del mundo; pero empiezo a sospechar que alguien me ha traído a este lugar a propósito; y tengo que descubrir por qué',
    price: 3100,
    stock: 2,
    img: 'books/book4.jpeg'
},
{
    title: 'Proyecto Silverview',
    author:'John Le Carre',
    description: 'Ficción y literatura',
    longDescription: 'Julian Lawndsley ha renunciado a su exigente empleo en la City de Londres para llevar una vida más sencilla como propietario de una librería en una pequeña ciudad costera. Sin embargo; un par de meses después de la inauguración; la tranquilidad de Julian se ve interrumpida por una visita: Edward Avon; un inmigrante polaco que vive en Silverview; la gran mansión a las afueras del pueblo; quien parece saber mucho sobre la familia de Julian y muestra un interés exagerado en el funcionamiento interno de su modesto negocio. Cuando aparece una carta en la puerta de un espía de alto rango en Londres advirtiéndole de una peligrosa filtración; las investigaciones lo llevarán a esta tranquila ciudad junto al mar',
    price: 2200,
    stock: 100,
    img: 'books/book5.jpeg'
},
{
    title: 'El día que dejó de nevar en Alaska',
    author: 'Alice Keller',
    description: 'Novela romántica',
    longDescription: 'Un chico con el corazón de hielo. Una chica que huye de sí misma. Dos destinos que se cruzan. Heather cree que solo hay tres cosas que sabe hacer: atraer problemas; salir huyendo y correr. Así es como termina en Alaska; en un pequeño pueblo perdido; trabajando de camarera mientras intenta llevar una vida nueva y tranquila. Su único problema es que uno de los dueños del restaurante parece odiarla y que ella nunca antes ha conocido a nadie que despierte tanto su curiosidad. Nilak es reservado; frío y distante; pero Heather puede ver a través de todas las capas tras las que se esconde y sabe que en ocasiones hay recuerdos que pesan demasiado; como los de sus propios errores; esos que intenta dejar atrás. Pero; a veces; la vida te da una segunda oportunidad. La nieve empieza a derretirse. Y todo encaja.',
    price: 2790.5,
    stock: 5,
    img: 'books/book6.jpeg'
},
{
    title: 'Billy Summers',
    author:'Stephen King',
    description: 'Suspenso',
    longDescription: 'Billy Summers es un asesino a sueldo y el mejor en lo suyo; pero tiene una norma: solo acepta un encargo si su objetivo es realmente mala persona. Ahora Billy quiere dejarlo; pero todavía le queda un último golpe. Y siendo uno de los mejores francotiradores del mundo; un veterano condecorado de la guerra de Irak; un auténtico Houdini cuando toca desaparecer después de finiquitar un trabajo; ¿qué podría salirle mal? Todo.',
    price: 3599.99,
    stock: 5,
    img: 'books/book7.jpeg'
},
{
    title: 'El aliento de los dioses',
    author:'Brandon Sanderson',
    description: 'Ciencia ficción',
    longDescription: 'Brandon Sanderson (Lincoln; Nebraska; 1975) es el gran renovador de la fantasía del siglo XXI; con veintidós millones de copias vendidas; y el autor más prolífico del mundo. Desde que debutara en 2006 con su novela Elantris; ha deslumbrado a lectores en treinta idiomas con el Cosmere; el fascinante universo de magia que comparten la mayoría de sus obras. Sanderson es autor de la brillante saga Nacidos de la Bruma (Mistborn); formada por El Imperio Final; El Pozo de la Ascensión; El Héroe de las Eras; Aleación de ley; Sombras de identidad y Brazales de Duelo. Tras El aliento de los dioses; una obra de fantasía épica en un único volumen en la línea de Elantris; inició con El camino de los reyes una magna y descomunal decalogía; El Archivo de las Tormentas; que continuó con Palabras radiantes; Juramentada y El Ritmo de la Guerra (además de la novela corta Esquirla del Amanecer). Con un plan de publicación de más d e veinte futuras obras (que contempla la interconexión de todas ellas); el Cosmere se convertirá en el universo más extenso e impresionante jamás escrito en fantasía épica. Sanderson vive en Utah con su esposa e hijos y enseña escritura creativa en la Universidad Brigham Young.',
    price: 3149,
    stock: 8,
    img: 'books/book8.jpeg'
},
{
    title: 'El Imperio Final - Nacidos de la Bruma',
    author:'Brandon Sanderson',
    description: 'Ciencia ficción',
    longDescription: 'Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria; sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto; dominando gracias al terror; a sus poderes y a su inmortalidad; ayudado por «obligadores» e «inquisidores»; junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y; aunque la ley lo prohíbe; algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora; Kelsier; el «superviviente»; el único que ha logrado huir de los Pozos de Hathsin; ha encontrado a Vin; una pobre chica skaa con mucha suerte... Tal vez los dos; con el mejor equipo criminal jamás reunido; unidos a la rebelión que los skaa intentan desde hace mil años; logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero; ¿qué pasa si el héroe de la profecía falla? ',
    price: 3149,
    stock: 5,
    img: 'books/book9.jpeg'
},
{
    title: 'El Camino de los Reyes',
    author:'Brandon Sanderson',
    description: 'Ciencia ficción',
    longDescription: '',
    price: 4199,
    stock: 2,
    img: 'books/book10.jpeg'
  },];

  // genero el setProducts
  const [products, setProducts] = useState([])

  // genero la función getProducts
  const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            return resolve(mockProducts)
        }, 2000);
        
    })
  }

  // configuro el useEffect para ejecutarse en el ciclo de montaje y actualizar el estado de setProducts con el valor del mock
  useEffect( () => {
      getProducts().then( (allProducts) => {
          setProducts(allProducts)
      })
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <NavBar inCart={1}/>
        <Routes>
          <Route path='/' element={<HomePage products={products}/>}/>
          <Route path='/productos' element={<ProductsPage products={products}/>}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;