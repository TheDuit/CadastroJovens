export default function handleDate(evnt) {
    let dataNascimento = evnt.target.value;
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();
    const dataNascimentoArray = dataNascimento.split('-');
    const anoNascimento = parseInt(dataNascimentoArray[0]);
    const mesNascimento = parseInt(dataNascimentoArray[1]);
    const diaNascimento = parseInt(dataNascimentoArray[2]);
    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    console.log( idade);
}