const ProdutoService = require('../services/produtoService')
const produtoService = new ProdutoService();

class ProdutoController {
    async listar(req, res) {
        try {
            const produtos = await produtoService.buscarTodosProdutos();
            res.json(produtos);
        }catch (err){
            console.log(err);
            res.status(500).send(err.message);
        }
    }

    async cadastrar(req,res) {
        try {
            const produto = req.body;
            const produtoCadastrado = await produtoService.cadastrarProduto(produto);
            res.status(201).json(produtoCadastrado);
        }catch(err){
            console.log(err.message);
            res.status(500).send(err.message);
        }
    }
}
module.exports = ProdutoController;