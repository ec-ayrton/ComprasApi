const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Compras Api',
            version: '1.0.0',
            description: 'A Api visa permitir o cadastrado de clientes, produtos e cadastras Pedidos de Compras.'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ]
    },
    apis: ['./src/routes/*.js', './src/config/swagger/swagger.yaml'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;