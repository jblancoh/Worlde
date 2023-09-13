# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Instructions

1.- Maquetar el siguiente (figma)[https://www.figma.com/file/1ItfWDdmg93m4yfj0BAvCn/DD3-Worlde?type=design&node-id=0-1&mode=design]
Se compone de 3 vistas. Una donde muestra las instrucciones del juego, otra donde muestra el tablero del juego y la última, donde encontramos el resultado del juego

2.- Deberá detectar que es la primera vez que entra y deberá mostrar las instrucciones del juego

3.- Al iniciar, la aplicación deberá seleccionar automáticamente una palabra de 5 letras del catálogo de palabras.

4.- Al teclear o al dar click en una letra del teclado virtual, la letra se mostrará en la primera caja que se encuentre vacía y así sucesivamente.

5.- Al completar una fila de 5 letras, la aplicación compará cada letra de palabra formada con la palabra seleccionada en el punto 3 y se aplicará la siguiente lógica:
  a. Si la letra ingresada está en el mismo lugar, la caja se pintara de verde
  b. Si la letra ingresada está en la palabra pero no en el mismo lugar, la caja se
  pintará de amarillo
  c. Si la letra ingresada no se encuentra en la palabra, la caja se mostrar de
  color gris

6.- Si coincide la palabra ingresada con la seleccionada, mostrará el modal de
estadísticas y sumará un punto al contador de victorias y al contador de partidas.

7.- Si el usuario llena las 5 filas sin lograr que coincida la palabra, mostrará el modal de
estadísticas y sumará un punto al contador de partidas. Además, mostrará la palabra
que fue seleccionada.

8.- Cada 5 minutos la aplicación seleccionará otra palabra y limpiará el tablero, esta
palabra no debe repetirse.

9.- La aplicación mostrará el modal de instrucciones al dar click en el icono de ?

10.- La aplicación mostrará el modal de estadísticas al dar click en el icono de |||

11.- La aplicación se mostrará en “modo oscuro” al activar el toggle*

12.- La aplicación se mostrará en “modo claro” al desactivar el toggle*