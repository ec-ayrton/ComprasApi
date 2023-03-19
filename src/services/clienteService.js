const ClienteRepository = require('../repositories/clienteRepository')
const ValidadorCliente = require('../validators/validadorCliente')

const clienteRepository = new ClienteRepository();
const validadorCliente = new ValidadorCliente();


class ClienteService{
    async cadastrarCliente(cliente){
        validadorCliente.validarCampos(cliente);
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