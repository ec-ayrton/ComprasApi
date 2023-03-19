class ValidadorCliente {
    validarCampos(cliente) {
        const camposObrigatorios = [
            { nome: 'Nome', campo: cliente.nome },
            { nome: 'CPF', campo: cliente.cpf }
        ];

        camposObrigatorios.forEach((campo) => {
            if (!campo.campo) {
                throw new Error(`Campo ${campo.nome} é obrigatório.`);
            }
        });
    }
}

module.exports = ValidadorCliente;
