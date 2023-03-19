const ClienteRepository = require('../repositories/clienteRepository')
const ValidadorCliente = require('../validators/validadorCliente')


class ClienteService{

    constructor() {
        this.clienteRepository = new ClienteRepository();
        this.validadorCliente = new ValidadorCliente();
    }

    async cadastrarCliente(cliente){
        this.validadorCliente.validarCampos(cliente);
        const clienteFromDb = await this.clienteRepository.buscarPorCpf(cliente);
        if(clienteFromDb)
            throw new Error("Cliente já cadastrado.")
        return this.clienteRepository.salvar(cliente);
    }

    async buscarClientePorId(id){
        return this.clienteRepository.buscarPorId(id);
    }

    async buscarTodosClientes(){
        return  this.clienteRepository.buscarTodosClientes();
    }

}

module.exports  = ClienteService;