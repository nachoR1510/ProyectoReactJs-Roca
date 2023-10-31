# Entrega final
- Agregue Context al proyecto para la funcionalidad del carrito: ahora el número del cart del navbar es dinámico y los productos que se vayan agregando al carrito se muestran correctamente. tanto en el carrito como en el detalle del juego se pueden sumar y restar productos.
- Creé una firebase y puse todos los datos de los productos ahí, ahora tmb almacena un logo y bgImg de cada juego para darle más personalidad y que resulte más llamativo cada página de producto específico.
- Cree el checkout el cual pide un nombre y un mail para confirmar la compra, use la validación de html5 para asegurar que se completen los espacios, una vez completado el algoritmo devuelve un sweet alert con el id de la compra y almacena en el firebase un ticket con los detalles.
- Por ultimo termine de pulir el diseño de la entrega, mantuve un estilo moderno y simple con fondos detallados sobre los juegos y usando colores transparentes con efecto de desenfoque en distintos componentes y tarjetas de toda la pagina, uso a lo largo del proyecto una gama de colores especificas de blanco, negro, amarillo y violeta para marcar un estilo y personalidad en el proyecto.


# PreEntrega 2 Roca

- Ahora el carrito es un componente a parte del navbar que se puede reutilizar.
- Agregue categorías para los juegos: terror, aventura, acción, fantasía, online y rpg. lo limite a esa cantidad reducida para no cargarlo de muchos datos e imágenes, pero se pueden agregar más categorías como juegos a futuro(actualmente 12 total y min 3 de cada categoría).
- Agregue SASS al proyecto y lo metí dentro de una carpeta específica para que el proyecto esté más ordenado.
- Agregue react-router-dom como lo pedía la entrega, ahora tocar el “logo” de la página o seleccionar la opción de “sin seleccionar” del select de categoría redirige al usuario al home usando Link, lo mismo para seleccionar una categoría específica redirige a la tienda de esa categoría creada con un filtrado y si se toca un producto se redirige a la vista detallada del ítem seleccionado.
- Desarrolle más el diseño de la página para acercarlo un poco más a lo que busco para el estilo de la entrega final. 



# PreEntrega 1 Roca

Para esta entrega diseñe “E-commerce” sobre componentes de computadora y claves para videojuegos, el proyecto lleva el nombre de GameKey Kingdom. Elegí este tema porque, además de ser un tema que me interesa, me va a permitir crear un diseño moderno para la entrega final.
- Cree el componente de navbar, la cual contiene el “logo” de la empresa y el nombre, tiene una listado de elementos clickeables (para esta entrega no redirigen a ningún lado), agregue un input de barra de búsqueda, uno de botón con un “inicio de sesión” y agregue el icono del carrito con un número estático en este caso.
- Cree el componente de itemListContainer, use props y material UI para mostrar los “productos”. aunque decía que era opcional usar material UI lo utilice para crear las tarjetas que muestran los productos, pero me siento mas cómodo haciéndolo a mano, así que si no resulta problemático en una futura entrega me gustaría quitarlo.
-  Estilice el  diseño de la página para que se vea pulido pero lo deje simple, pienso cambiarlo a futuras entregas para que tenga más “personalidad”.

