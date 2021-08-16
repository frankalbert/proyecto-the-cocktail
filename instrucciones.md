# 📌 Objetivo de la prueba 📌

El objetivo es maquetar un módulo con HTML / CSS / JS de forma que se parezca lo máximo posible al diseño proporcionado que encontrarás [`en este link de Figma`](https://www.figma.com/file/JnLiXZqVFABxdUQEQHwlSe/PruebaTCK?node-id=0%3A120). Debe incluir algunas interacciones sencillas en javascript que se detallan en estas instrucciones.

## 📐 Estructura de la prueba

Te proporcionamos una estructura parecida a la que usamos de base en muchos de nuestros proyectos, pero simplificada. Te recomendamos que eches un ojo a las diferentes carpetas y a lo que hay en cada una de ellas antes de empezar la prueba.
Encontrarás algo de código y comentarios para orientarte.

En el _root_ encontrarás un fichero `index.html` que es donde debes realizar el ejercicio.

En la carpeta _assets/images_ encontrarás todos los recursos de imágenes que necesitas para el ejercicio. Puedes utilizarlos y manipularlos a tu gusto.

## 🖍 CSS

Esperamos que emplees SASS (nosotros usamos SCSS).
Puedes emplear variables, mixins, funciones y cualquier característica del lenguaje.

Para compilar el SASS puedes usar el método que prefieras (Webpack, Gulp, Grunt, NPM...). En The Cocktail utilizamos Webpack en nuestro día a día.

Te pedimos que NO emplees Bootstrap ni ningún otro framework CSS (ni siquiera para crear el layout, es muy sencillo preferimos que lo hagas a mano).

## 🕹️ JavaScript

Esperamos que la maquetación del ejercicio incluya unas interacciones sencillas hechas con JavaScript.

1. En la parte superior hay unas pestañas que cambian entre los diseños. En este caso te pedimos que desarrolles los _Tab-1_ y _Tab-2_.

2. En el _Tab-1_ hay unos radio buttons. Toda la caja del radio button es clickable y debe resaltarse con el color de borde.

3. En el _Tab-2_ hay varios apartados _collapsables_ que deben _plegarse / desplegarse_ pulsando sobre ellos.

> Se busca que programes tú misma/o estas funcionalidades. Puedes apoyarte en librerías JavaScript "generales" para hacerlo (jQuery, lodash...). Lo que NO nos interesa es que busques plugins específicos que solucionen las funcionalidades que se proponen. Es decir, no incluyas una librería que resuelva el comportamiento del acordeón.

## 🖊Tipografías

El diseño emplea las tipografías [`Roboto`](https://fonts.google.com/specimen/Roboto) y [`Roboto Slab`](https://fonts.google.com/specimen/Roboto+Slab) que puede encontrar en GoogleFonts.
En el UI KIT vienen definidas todas las variantes de tamaños y pesos de fuente de todos los textos que encontrarás en el diseño.

## 📱 Responsive

Te pedimos que improvises una adaptación a tablet ( 768px de ancho ) y mobile ( 360px de ancho ) del diseño. Tienes libertad. El principal objetivo es que las cosas se vean lo mejor posible y sobre todo que no haya elementos rotos.

Se valorará que la maquetación sea _fluida_ y se vea correctamente en cualquier resolución.

## 📝 Más cosas a tener en cuenta

Debes:

- utilizar **git** como control de versiones y entregarnos el histórico
- hacer un código fácil de entender y de mantener
- dar soporte a Chrome y Firefox

Además, se valorarán positivamente los siguientes aspectos:

- **accesibilidad**
- **rendimiento**: que tu solución esté orientada a tener el mejor rendimiento 🚀
- **escalabilidad**: es decir, que las listas permitan más o menos hijos, que los textos puedan ser más largos sin romper la maquetación, etc
- **separación de contenidos**: que los contenidos (textos e imágenes) estén en una carpeta separada y sean fácilmente editables (ficheros json, yaml...)
- **herramientas para el desarrollo**: preferimos que nos proporciones herramientas para compilar el código (scripts de npm, de webpack, tareas de gulp...). Si no nos las puedes proporcionar, entréganos tanto el código fuente como el código compilado.
- **cross browsing**: que se vea correctamente en IE11 y Safari. Nosotros solemos usar [browserstack](https://www.browserstack.com) para hacer las pruebas (tiene una opción _trial_).
- **animaciones**: que incluyas animaciones que ayuden a mejorar la experiencia del usuario
- **mobile-first**

y no dudes en añadir cualquier aspecto extra que se te ocurra. 🤓

🤞 ¡Buena suerte! 🤞
