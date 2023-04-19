import { toast } from "react-toastify";

export default function handleCep(event) {
    var campo = event.target;
    var valor = campo.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{5})(\d{3})/, '$1-$2');

    if (valor.length >= 9 && /^\d{5}-\d{3}$/.test(valor)) {
        fetch(`https://viacep.com.br/ws/${valor}/json/`).then((resp) => {
            return resp.json();
        }).then((resp) => {

            if ('erro' in resp) {
                toast.error('CEP invalido!')
                event.target.classList.add('error')
                event.target.classList.remove('valid')
            }
            else {
                event.target.classList.add('valid');
                event.target.classList.remove('error');
                document.getElementById('enderecobai').value = `${resp.bairro}`;
                document.getElementById('enderecoloc').value = `${resp.localidade}`;
                document.getElementById('enderecouf').value = `${resp.uf}`;
                document.getElementById('enderecolog').value = `${resp.logradouro}`;
            }
        })
    }

    event.target.value = valor;
}


