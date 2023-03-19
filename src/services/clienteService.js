const ClienteRepository = require('../repositories/clienteRepository')
const clienteRepository = new ClienteRepository();

class ClienteService{
    async cadastrarCliente(cliente){
        const clienteFromDb = await clienteRepository.buscarPorCpf(cliente);
        if(clienteFromDb)
            throw new Error("Cliente já cadastrado.")
        return clienteRepository.salvar(cliente);
    }

    async buscarClientePorId(id){
        return clienteRepository.buscarPorId(id);
    }

    async buscarTodosClientes(){
        return  clienteRepository.buscarTodosClientes();
    }

}

module.exports  = ClienteService;