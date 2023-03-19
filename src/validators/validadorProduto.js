class ValidadorProduto {
    validarCampos(produto) {
        const camposObrigatorios = [
            { nome: 'Nome', campo: produto.nome },
            { nome: 'Descricao', campo: produto.descricao },
            { nome: 'Preco', campo: produto.preco },
        ];

        camposObrigatorios.forEach((campo) => {
            if (!campo.campo) {
                throw new Error(`Campo ${campo.nome} é obrigatório.`);
            }
        });
    }
}

module.exports = ValidadorProduto;
