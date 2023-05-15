# -next.js OpenJira App
para correr localmente, se necesita la bbdd
```
docker-compose up -d
```


* EL -d, significa __detached__

MongoDb URL Local:
```
mongodb://localhost:27017/entriesdb
```


## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## llenar BBDD de datos con informacion de prueba

```
http://localhost:3000//api/seed
```