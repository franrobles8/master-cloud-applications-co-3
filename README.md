# EoloPlanner

Este proyecto es una aplicación distribuida formada por diferentes servicios que se comunican entre sí usando API REST, gRPC y RabbitMQ. La aplicación ofrece un interfaz web que se comunica con el servidor con API REST y WebSockets. 

Algunos servicios están implementados con Node.js/Express y otros con Java/Spring. El despliegue y desarrollo están implementados utilizando la tecnología de Docker.

Disponemos de un Docker Compose llamado `docker-compose.yml` para el despliegue que se encarga de levantar todos los servicios de la aplicación y los servicios auxiliares (MySQL, MongoDB y RabbitMQ). La información de las bases de datos MySQL y MongoDB se persiste en las carpetas `mongo_db` y `mysql_db`. Y la persistencia de la cola RabbitMQ en `rabbitmq`.

Todos los servicios disponen de una carpeta `.devcontainer` que nos permite desarrollar haciendo uso de la tecnología de Remote Containers de VSCode. Para levantar los servicios auxiliares (MySQL, MongoDB y RabbitMQ) se dispone de un Docker Compose llamado `docker-compose-dev.yml`. La información de las bases de datos MySQL y MongoDB se persiste en las carpetas  `mongo_db_dev` y `mysql_db_dev`. Y la persistencia de la cola RabbitMQ en `rabbitmq_dev`.

Esta solución está basada en el trabajo entregado por el alumno Miguel García Sanguino.

## Desarrollo con VSCode

Primero tendremos que levantar los servicios auxiliares utilizando el siguiente comando:

```bash
docker-compose -f docker-compose-dev.yml up
```

Después podremos ir al servicio que nos interese desarrollar y levantarlo haciendo uso de la tecnología Remote Containers de VSCode.

## Desplegar

Para desplegar la aplicación tendremos que utilizar el siguiente comando:

```bash
docker-compose up
```