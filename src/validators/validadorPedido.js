const ProdutoService = require('../services/produtoService')
const ClienteService = require('../services/clienteService')

class ValidadorPedido{

    constructor() {
        this.clienteService = new ClienteService();
        this.produtoService = new ProdutoService();
    }


    async validaCamposPedido(pedido){
        await this.validarClientePedido(pedido.idCliente);
        await this.validaItens(pedido.itens);
        if(!pedido.dataPedido){
            throw new Error("Data é um campo obrigatório.");
        }
    }

    async validaItens(itens){
        if(!itens){
            throw new Error("O Pedido deve conter itens.")
        }
        await Promise.all(itens.map(async (item) => {
            await this.validaProdutoPedido(item);
            this.validaQuantidadeItem(item)
        }));
    }
    validaQuantidadeItem(item){
        if (!item.quantidade || item.quantidade < 1) {
            throw new Error("Quantidade inválida.");
        }
    }

    async validarClientePedido(idCliente) {
        if (!idCliente) {
            throw new Error("Id do cliente é um campo obrigatório.");
        } else {
            const cliente = await this.clienteService.buscarClientePorId(idCliente);
            if (!cliente)
                throw new Error("Cliente não cadastrado.")
        }
    }
    async validaProdutoPedido(item){
        if (!item.idProduto) {
            throw new Error("Campo produto é obrigatório.");
        } else {
            const produto = await this.produtoService.buscarProdutoPorId(item.idProduto);
            if (!produto)
                throw new Error("Produto não cadastrado.")
            item.preco = produto.preco;
        }
    }


}

module.exports = ValidadorPedido;