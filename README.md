# Ntt Ejercicio Final

## Parte 1

1. Con tus palabras y únicamente con tus conocimientos previos, describe cada uno de los siguientes conceptos y menciona 2 casos de uso de estos.
   - Módulos (Modules): es una forma de empaquetar partes de una aplicación (componentes, servicios, rutas...). Se utilizan para: tener ordenada la aplicación y para reutilizar código en otros desarrollos
   - Componentes (Components): son la parte visual de la aplicación, puede tener además lógica y datos. Se utiliza para crear la interfaz de usuario
   - Servicios (Services): son una forma de centralizar datos y lógica en diferentes partes de la aplicación. Se puede usar para comunicarse con APIs externas y para tener la lógica de negocio
   - Ruteo (Routing): es la forma en la que Angular permite navegar entre partes de la aplicación en una única página
   - Data binding: es la forma en la que se comunican las partes de un componente. Se puede utilizar para que los datos se actualicen al interactuar y para validar formularios
   - Directives: es la forma en la que Angular amplía las capacidades de HTML. Se puede usar para mostrar u ocultar etiquetas/componentes y para repetir etiquetas/componentes
   - Pipes: son una forma cómoda de manipular los datos para mostrarlos de una mejor manera. Puede usarse para mostrar un número con separadores de miles, o para mostrar una fecha en una forma fácil de leer
   - Guards: son como middlewares que revisan alguna condición antes de mostrar el componente. Se puede usar para proteger rutas que necesiten hacer login
   - Lazy module: son una forma de optimizar la aplicación al no cargar un componente que no se está usando. Se utilizan para mejorar los tiempos de carga de la aplicación y para cargar elementos (por ejemplo imágenes) a medida de que se van necesitando
   - Angular CLI: es la interfaz de terminal de angular. Se puede utilizar para crear componentes o para iniciar la aplicación
   - Angular Material: es un módulo que incluye los estilos y componentes de Material Design. Se utiliza para crear interfaces rápidamente y para dar un estilo de diseño familiar al usuario
2. ¿Qué es IONIC y en qué se relaciona con CapacitorJS?
   - Ionic es un framework para desarrollo móvil que permite crear apps para android o ios utilizando HTML, CSS y JavaScript/TypeScript. Ionic utiliza CapacitorJS para acceder a las capacidades nativas de los teléfonos.

## Parte 2

En una aplicación de angular nueva, crear dos vistas con su respectiva ruta y los siguientes requisitos:

- Vista 1:

  - Mensaje de bienvenida
  - Mostrar una tabla (material) con los datos obtenidos de un json online desde un servicio inyectable.
  - JSON: https://github.com/prust/wikipedia-movie-data/blob/master/movies.json
  - Agregar paginación y ordenamiento de los datos.

- Vista 2:
  - Título de contacto
  - \*Form de contacto
  - Crear un módulo llamado ”ContactFormModule”, el cual deberá exportar un componente llamado: “ContactFormComponent”, éste deberá tener un FORM de contacto utilizando el “ReactiveFormsModule” de @angular/forms para mostrar una forma de contacto con validaciones (campo requerido y formato), retroalimentación visual de errores y aciertos con los siguientes campos:
    - Nombre (Solo letras)
    - Correo
    - Teléfono
    - Mensaje (no mayor a 40 caracteres)
  - Deberá tener una salida (@OutPut):
  - El usuario hizo clic en “enviar” forma (si la forma es válida)
