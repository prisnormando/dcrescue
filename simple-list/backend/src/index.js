const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes')

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * TIPOS DE PARÂMETROS
 * 
 * Query: Parâmetros colodos na rota para estabelecer filtros
 * Route: Parâmetros utilizados para identificar recursos
 * Request body: 
 */

/**
 * SQL: MySQL, SQLLite
 * 
 * NoSQL: MongoDB, CouchDB
 * 
 * Driver: SELECT * FROM user 
 * Query Builder: (usando o KNEX.js -> instalar via npm e depois o sqllite ou outros conforme documentação)
 * 
 * 
 */


/**return response.send('Hello World'); */  