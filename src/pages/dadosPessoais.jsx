import FullInput from "../components/inputs";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Title from "../components/title";
import BtnNextComp from '../components/buttons';
import { ToastContainer } from "react-toastify";

function DadosPessoais() {
  return (
    <div className="App">      
    <Header></Header>
      <Title>DADOS GERAIS</Title>
      <Wrapper>
        <FullInput title="Nome completo" dataType="name"/>
        <FullInput title="E-mail" dataType="e-mail"/>
        <FullInput title="CPF"dataType="cpf"/>
        <FullInput title="Data de Nascimento" dataType="date"/>
        <BtnNextComp title="Próximo" to="/cont"></BtnNextComp>
      </Wrapper>
      <ToastContainer/>
    </div>
  );
}
export default DadosPessoais;