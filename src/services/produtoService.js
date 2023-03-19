const ProdutoRepository = require('../repositories/produtoRepository')
const produtoRepository = new ProdutoRepository();
const ValidadorProduto = require('../validators/validadorProduto')

class ProdutoService{

    constructor() {
        this.validadorProduto = new ValidadorProduto();
    }
    async cadastrarProduto(produto){
        this.validadorProduto.validarCampos(produto);
        const produtoFromDb = await produtoRepository.buscarPorNome(produto.nome);
        if(produtoFromDb)
            throw new Error("Nome do Produto já cadastrado.")
        return produtoRepository.salvar(produto);
    }

    async buscarTodosProdutos(){
        return  produtoRepository.buscarTodosProdutos();
    }

    async buscarProdutoPorId(id) {
        return produtoRepository.buscarPorId(id)
    }

}

module.exports  = ProdutoService;