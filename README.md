# Mongo explorer

Mongo explorer es una pagina web que tiene como finalidad administrar las bases de datos de un cluster

------------------------------------------------------------------------------
# Correo la pagina Web Localmente
Para correr la aplicacion localmente se necesita tener instalados estos complementos.

### Node.js
Para instalar Nodejs puedes visitar su pagina web [Node js](https://nodejs.org/es/download/).

### Mongo db
Como se va a correr localmente se necesita descargar mongodb, para hacerlo puedes visitar su pagina web [Mongo DB](https://www.mongodb.com/download-center/community).

Despues de instalar mongo ecribir en una terminal:

```
mongod
```
Y ya se tiene corriendo localmente la base de datos.


### Variables de entorno
Para que se pueda correr localmente toca hacer 2 cambios en el codigo de la aplicación
1. En `db/MongoUtils.js` se debe comentar la linea 12 y descomentar la linea 15
2. En `public/javascripts/parcial.js` se debe comentar la linea 5 descomentar la linea 9

--------------------------------------------------------------------------------------------------
## Start
Para inicializar el proyecto escriba en la consola en la raiz del proyecto lo siguiente:
```
##Instalar dependencias
npm i

##Correr pagina web
npm start
```
-----------------------------------------------------------

# Manual de uso
Al entrar en la pagina web esta una lista desplegable, para ver las colecciones de una de las bases de datos listadas debe escoger una de ellas y hacer click en el boton "Buscar colecciones"

Posteriormente aparecera otra lista en donde estan todas las colecciones de las base de datos seleccionada, para ver los primeros 20 registros de una coleccion debe escogerla en la lista y oprimir el boton buscar registros.

Al hacerlo apareceran los ultimos 20 registros de esa colección en una tabla ordenada cronologicamente, al final de la tabla apareceran 2 formularios.

El formulario de la izquierda sirve para crear un nuevo registro en la coleccion seleccionada, solo debe llenar todos los campos y oprimir el boton "Insertar nuevo registro".


## Componente creativo
El formulario de la derecha es mi compomente creativo, es un boton que convierte la tabla de los ultimos 20 registros y la convierte en un archivo "CSV" y lo descarga.

----------------------------------------------------------
# La opcion escogida es la del sabado 8a.m. sin bono

--------------------------------------------------------

# Autor
Sebastian Martinez

--------------------------------------------------------------
# Link
[Mongo explorer](https://secure-brook-31340.herokuapp.com/)

-----------------------------------------------------------
# Licencia
Para el proyecto se utilizo la sieguiente licencia [MIT Licence](https://raw.githubusercontent.com/jsmartinezn/mongo-explorer/master/LICENSE)
