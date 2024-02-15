# LABORATORIO CONDICIONALES

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## Juego de las Siete y Media

Este laboratiorio consiste en una página web que implementa el juego de cartas de las Siete y Media. El objetivo del juego es conseguir sumar una puntuación de 7.5 o que se quede muy cerca sin pasarse. Si te pasas, pierdes el juego.

### Funcionalidad

- Se debe mostrar la puntuación acumulada al revelar las cartas.
- El botón **Pedir Carta** tiene que mostrar la imagen de la carta, sumar los puntos y almacenarlos en Puntuación actual.
- El botón **Me Planto** tiene que impedir volver a pedir carta y, depende de la puntación con la que te hayas plantado, mostrar un mensaje u otro.
- El botón **Nueva Partida** debe poner a 0 el contador de puntos, dejar pedir carta y plantarse, además de mostrar la imagen del dorso de la carta.
- El botón **Siguiente Carta** se utiliza una vez el usuario se haya plantado, para saber cuál sería la siguiente carta en caso de no haberse plantado. Le puedes seguir dando a este botón mientras la puntuación no iguale o supere 7.5, así se puede saber cuántas cartas se hubiesen podido jugar.
