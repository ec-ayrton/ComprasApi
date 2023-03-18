const ClienteService = require('../services/clienteService')
const clienteService = new ClienteService();

class ClienteController{
    async listar(req, res) {
        try {
            const clientes = await clienteService.buscarTodosClientes();
            res.json(clientes);
        }catch (err){
            console.log(err);
            res.status(500).send(err.message);
        }
    }

    async cadastrar(req,res) {
        try {
            const cliente = req.body;
            const clienteCadastrado = await clienteService.cadastrarCliente(cliente);
            res.status(201).json(clienteCadastrado);
        }catch(err){
            console.log(err.message);
            res.status(500).send(err.message);
        }
    }
}
module.exports = ClienteController;