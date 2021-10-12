# CSML Server - local development example

This is a demo project to show you how to run the [CSML](https://csml.dev) engine locally with node.js, docker and mongodb.

## Requirements

This project requires Node.js (v12+) and Docker (including docker-compose). It will also automatically setup a MongoDB database in docker, but you are free to use any existing, supported database by modifying the relevant parameters in the [docker-compose.yml](./docker-compose.yml) file.

## Setup

```
# setup all the node dependencies
npm install

# spin up the CSML engine on port 5000 and a MongoDB database
docker-compose up -d
```

## Usage

An example request is ready to use in the index.js file, but you are free to use cURL or any other HTTP request library to call your CSML server instance. You can find more examples on the [main CSML repository](https://github.com/CSML-by-Clevy/csml-engine) and on the [official documentation](https://docs.csml.dev).

The full API documentation is available in [Swagger/OpenAPI format](https://github.com/CSML-by-Clevy/csml-engine/blob/dev/csml_server/swagger.yaml).
