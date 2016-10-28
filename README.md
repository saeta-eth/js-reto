# JS-RETO

### Propósito
El propósito de este ejercicio es que usted demuestre su capacidad de crear una aplicación React eficiente que logre implementar la maqueta de la imagen de abajo tanto en características visuales como en funcionalidad. Utilizamos este desafío para entender mejor sus capacidades de codificación y determinar si usted sería un buen candidato para una entrevista.

### Qué cosas vamos a evaluar
- Dominio en el aprovechamiento las tecnologías existentes para crear una aplicación responsive.
- Capacidad para utilizar CSS, HTML y Javascript que coincida con una maqueta diseñada.
- La lógica de la arquitectura del código y la elección de frameworks (en el contexto de React).


### Desafío
Crear una aplicación React que toma la entrada del usuario con un formulario y a continuación muestra los resultados en una tabla. Se debe cumplir con los siguientes requisitos.
- Al hacer clic en el botón + Add debería abrir una ventana modal.
- El formulario debe ser llenado y enviado desde la ventana modal.
- Después de hacer Submit, la tabla debe actualizarse a sí misma sin necesidad de recargar la página.
- El formulario y la tabla tener los siguientes campos:
   - `Product name`
   - `Category`
   - `Brand`
   - `Height`
   - `Width`
   - `Notes`
- Debe usarse estas tecnologías: Webpack, React, MobX y React-Router

##### Maqueta de la aplicación
![Application Mock](/assets/ProductKeeper-01.png)


##### Maqueta de la ventana modal
![Modal Mock](/assets/ProductKeeper-02.png)


### Puntos extra
Estos no son necesarios, pero serían grandes adiciones si el tiempo lo permite.
- Implementar un método para persistir los datos creados.
- Cobertura completa con Tests
- Filtrar los resultados de la búsqueda
- Agregar columnas ordenables a la tabla

### Otros
Para empezar con este desafío, por favor clone este repositorio y haga un Pull Request al repo cuando haya terminado. Tiene solo 2 días para completar el desafío, así que priorice en consecuencia. Por favor agregue los detalles de cómo correr su aplicación a la sección de abajo titulada `Como correr Mi App`.

### FAQ's
No todas las imágenes e íconos están incluidos, qué hago?
- Puede improvisar cualquier asset que no encuentre.

Los requerimientos del desafío parecen imprecisos, eso está bien?
- Esto está diseñado para que tenga un final abierto, así que sientase libre de tener creatividad en las áreas a las que les falta directrices detalladas.

# Como correr Mi App (README.md)

Requerimientos:
- Node.js v6.5.0
- NPM 3.10.3

Debes de correr `npm install` en tu consola. (Puede tardar unos minutos)
Luego de este proceso, puedes correr `npm start`. Aparecera un mensaje que dice `Listening at http://localhost:3000/` y luego los logs de webpack.
A partir de este momento, podes entrar desde tu navegador y visualizar el prototipo.

##### Estructura de Carpetas
- `components`: Aqui encontraras los diferentes componentes, que requirio el prototipo
- `stores`: Aqui se encuentran el manejo de Mobx.
- `styles`: Aqui se encuentran los estilos separados dependiendo su funcion:
  - `base`: Estilos generales, se usan en toda la aplicacion.
  - `components`: Se encuentran los estilos de cada componente.
- `utils`: funciones genericas que son de utilidad y que no pertecen a la logica del negocio.


