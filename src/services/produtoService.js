const ProdutoRepository = require('../repositories/produtoRepository')
const produtoRepository = new ProdutoRepository();

class ProdutoService{
    cadastrarProduto(produto){
        return produtoRepository.salvar(produto);
    }

    async buscarTodosProdutos(){
        return  produtoRepository.buscarTodosProdutos();
    }

}

module.exports  = ProdutoService;