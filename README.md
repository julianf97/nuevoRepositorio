# SN | Medidores de agua

<img src="./src/assets/readmeMedidores/firstImage.png" width="100%">

## Descripción

La aplicación está destinada para que sea usada por los operarios encargados de tomar las mediciones de los medidores de agua y para el usuario administrador de la información de los medidores y las mediciones.

### Acciones de los Operarios
- **Agregar nuevos medidores**: Guardar un nuevo medidor con las coordenadas de latitud y longitud actuales del operario.
- **Actualizar coordenadas de medidores existentes**: Modificar las coordenadas de latitud y longitud de medidores ya instalados usando la ubicación actual del operario.
- **Registrar mediciones mensuales**: Ingresar y guardar las mediciones de cada medidor mes a mes.

### Acciones del Administrador
- **Visualizar medidores**: Ver una tabla con todos los medidores.
- **Visualizar mediciones**: Ver una tabla con todas las mediciones.
- **Filtrar datos**: Aplicar filtros para buscar medidores y mediciones específicas.
- **Modificar datos**: Editar la información de medidores y mediciones según sea necesario.

## Pantallas

### Coordenadas

### Función - Objetivo
- **Actualizar coordenadas**: El operario puede actualizar las coordenadas de un medidor ya registrado en la base de datos. Las coordenadas guardadas serán la latitud y longitud actuales del operario, dependiendo de su ubicación en el momento de la actualización.
- **Guardar nuevo medidor**: El operario puede guardar un nuevo medidor con las coordenadas de su ubicación actual al momento de la creación. Las coordenadas de latitud y longitud se registrarán automáticamente según la posición del operario al guardar el nuevo medidor.

En la pantalla principal **"Coordenadas,"** el usuario puede buscar un medidor filtrándolo por calle, número, barrio y número de medidor para actualizar sus coordenadas.
El usuario puede ver su ubicación actual en un mapa junto con la información de latitud y longitud. Al guardar un nuevo medidor, se almacenarán las coordenadas de latitud y longitud correspondientes a la ubicación actual del operario con su celular.

<div style="display: flex; justify-content: space-between;">
    <img src="./src/assets/readmeMedidores/coordenadasMobile1.png" heigth=48%  width="48%">
    <img src="./src/assets/readmeMedidores/coordenadasMobile2.png" heigth=48%  width="48%">
</div>


#### Botón - "Guardar coordenadas"

<img src="./src/assets/readmeMedidores/botonGuardarCoordenada.png" width="30%">

Si el usuario presiona el botón guardar coordenadas sin elegir un número de medidor, saldrá el aviso para que se seleccione un medidor antes de guardar las coordenadas:

<img src="./src/assets/readmeMedidores/coordenadasMobileAccionNoDisponible.png" width="30%">

Cuando el usuario ya ha seleccionado un medidor y presiona en guardar coordenadas, le saldrá el modal con la información de su latitud y longitud donde está situado que serán los nuevos datos de ubicación del medidor que ha seleccionado:

<img src="./src/assets/readmeMedidores/nuevasCoordenadas.png" width="30%">

Si presiona guardar, y si estas coordenadas donde está situado el operario con su celular ya existen en la base de datos, no podrá actualizar las coordenadas del medidor seleccionado y le saldrá el modal de error:

<img src="./src/assets/readmeMedidores/coordenadaExisteAlActualizarCoordenadas.png" width="30%">

Si presiona guardar, y las coordenadas no existen en la base de datos se actualizarán las coordenadas de ese medidor que ha seleccionado cambiando la latitud y longitud que tenía anteriormente por la latitud y la longitud que tenga el operario de donde esté usando la aplicación desde su celular.

<img src="./src/assets/readmeMedidores/exitoCoordenadas.png" width="30%">

#### Botón - "Guardar nuevo medidor"

<img src="./src/assets/readmeMedidores/botonNuevoMedidor.png" width="30%">

Cuando el usuario presiona guardar nuevo medidor, se le abrirá el modal donde le pide ingresar la calle, número, barrio y número de medidor. Estos campos son obligatorios, también hay un checkbox para indicar si la calle es BIS.

<img src="./src/assets/readmeMedidores/modalNuevoMedidor.png" width="30%">

Si el usuario al ingresar los datos, ingresa un número de medidor que ya existe en la base de datos, le saldrá la alerta de error:

<img src="./src/assets/readmeMedidores/medidorExistente.png" width="30%">

Si el usuario al ingresar los datos, intenta ingresar desde una coordenada ya registrada, le saldrá la alerta de error:

<img src="./src/assets/readmeMedidores/coordenadaExistenteNuevoMedidor.png" width="30%">

Si el usuario al ingresar los datos, intenta ingresar un domicilio ya registrado (misma calle, número y barrio), le saldrá la alerta de error:

<img src="./src/assets/readmeMedidores/domicilioExistente.png" width="30%">

Si los datos ingresados por el usuario para agregar un nuevo medidor pasan todas las validaciones, es decir, no hay ningún problema y son datos válidos, entonces saldrá el modal que indica que el medidor ha sido agregado con éxito:

<img src="./src/assets/readmeMedidores/medidorGuardado.png" width="30%">

### Registro de consumo

### Función - Objetivo
- **Registrar los consumos**: El operario puede registrar el consumo del mes de ese medidor, puede ver la información del consumo del mes anterior y visualizar el consumo calculado que es la diferencia del mes anterior con el mes actual.

En la pantalla principal **"Registro de consumo,"** el usuario puede buscar un medidor filtrándolo por calle, número, barrio y número de medidor para cargar un nuevo consumo de ese medidor. 

Una vez seleccionado el medidor, debajo del filtro para filtrar medidores podrá ver la información del medidor: **Número de medidor** - **Calle** - **Numero** - **Barrio** - **LATITUD** - **LONGITUD**.




<div style="display: flex; justify-content: space-between;">
    <img src="./src/assets/readmeMedidores/registroConsumos1.png" heigth=48%  width="48%">
    <img src="./src/assets/readmeMedidores/registroConsumos2.png" heigth=48%  width="48%">
</div>
<img src="./src/assets/readmeMedidores/registroConsumos3.png" width="48%">

## Instrucciones de Instalación

### Instalación de Dependencias del Cliente

1. Accede al directorio del cliente con el siguiente comando:
    ```
    cd client
    ```

2. Ejecuta el siguiente comando para instalar las dependencias necesarias:
    ```
    npm install
    ```

Este comando descargará e instalará todas las bibliotecas y paquetes requeridos para el cliente.

### Instalación de Dependencias del Servidor

1. Abre otra terminal o regresa al directorio principal del proyecto mediante el comando `cd ...`.

2. Accede al directorio del servidor con el comando:
    ```
    cd server
    ```

3. Ejecuta el siguiente comando para instalar las dependencias del servidor:
    ```
    npm install
    ```

Esto garantizará que todas las bibliotecas esenciales para la parte del servidor estén instaladas.


## Configuración de Variables de Entorno

### Variable de Entorno del Puerto
- **PORT**: Esta variable de entorno especifica el puerto en el que el servidor escuchará las solicitudes de entrada.

### Variables de Entorno de la Base de Datos
- **DEVELOPMENT_USERNAME**: Usuario para acceder a la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_PASSWORD**: Contraseña asociada al usuario de la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_DATABASE**: Nombre de la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_HOST**: Dirección del host de la base de datos en el entorno de desarrollo.
- **DEVELOPMENT_DIALECT**: Dialecto de la base de datos en el entorno de desarrollo.

### Variables de Entorno de la Conexión FTP
- **FTP_HOST**: Dirección IP del servidor FTP.
- **FTP_USER**: Nombre de usuario para la conexión FTP.
- **FTP_PASSWORD**: Contraseña para la conexión FTP.

## Uso del Proyecto

Para utilizar este proyecto, sigue los siguientes pasos:

### Servidor del Cliente

1. Abre una terminal en Visual Studio Code y navega hasta el directorio del cliente utilizando el siguiente comando:
    ```sh
    cd client
    ```

2. El proyecto en el frontend fue creado con Vite + React, por lo tanto, para iniciar el servidor del cliente, ejecuta:
    ```sh
    npm run dev
    ```

Este comando iniciará el servidor del cliente y estará listo para mostrar la interfaz de usuario en el navegador.

### Servidor del Backend

1. Abre una segunda terminal en Visual Studio Code y navega hasta el directorio del servidor utilizando el siguiente comando:
    ```sh
    cd server
    ```

2. Inicia el servidor del backend de una de las siguientes formas:

   - Ejecuta el siguiente comando para iniciar el servidor con nodemon, que proporciona reinicio automático durante el desarrollo:
     ```sh
     npm run dev
     ```

   - O utiliza el script `start` del archivo `package.json` para iniciar el servidor:
     ```sh
     npm start
     ```

   - Alternativamente, puedes iniciar el servidor manualmente ejecutando el siguiente comando:
     ```sh
     node src/app.js
     ```

   Cualquiera de estas formas iniciará el servidor del backend y estará listo para manejar las solicitudes del cliente.


Esto iniciará el servidor del backend y estará listo para manejar las solicitudes del cliente.

### Acceso a la Ruta del Administrador

Para acceder a la ruta del administrador en este proyecto, utiliza las siguientes credenciales:

- **Email:** admin_snciudad@gmail.com
- **Contraseña:** adminCiudadSn14

Estas credenciales te permitirán iniciar sesión como administrador y acceder a la tabla de tramites registrados en la base de datos.

# Endpoints

## Endpoints de Usuarios

### `GET /api/usuarios`

Este endpoint está diseñado para permitir a los desarrolladores obtener una lista de todos los usuarios registrados en la aplicación. Es importante destacar que este endpoint no está implementado en el proyecto en sí, sino que está destinado a ser utilizado por los desarrolladores para acceder a la información de los usuarios registrados.

Para visualizar la información de los usuarios, los desarrolladores pueden utilizar herramientas como Postman, Thunder Client, o simplemente acceder al endpoint desde un navegador web.

### `POST /api/iniciarsesion`

Al enviar una solicitud a este endpoint con las credenciales de un usuario, se autentica al usuario y se inicia sesión en la aplicación.

### `POST /api/registro`

Este endpoint permite a los usuarios registrarse en la aplicación proporcionando la información necesaria. Antes de completar el registro, se valida que el email no se haya registrado antes.

## Endpoints de Trámites

### `POST /api/nuevotramite`

Al enviar una solicitud a este endpoint con la información del nuevo trámite, se crea un nuevo registro de trámite en la base de datos.

### `GET /api/tramites`

Este endpoint permite obtener una lista de todos los trámites de solicitud de carnet de manipulador de alimentos realizados por los usuarios.

### `GET /api/verificarusuariotramite/:userId`

Al enviar una solicitud a este endpoint con el ID de usuario, se verifica si el usuario tiene un trámite de solicitud de carnet de manipulador de alimentos en curso.

### `PUT /api/gestionartramite/:id/:accion`

Este endpoint permite a los usuarios autorizados gestionar sus trámites de solicitud, realizando acciones como aprobar, rechazar o cancelar un trámite específico mediante la especificación del ID del trámite y la acción correspondiente.

Estos endpoints proporcionan una interfaz fácil de usar para que los vecinos de San Nicolás puedan completar el trámite de solicitud de carnet de manipulador de alimentos de manera eficiente y efectiva.


## Tecnologías y Herramientas Usadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **React + Vite**

- **Tailwind**

- **Node.js**

- **Express**

- **MySQL**
