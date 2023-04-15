import FullInput from "../components/inputs";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Title from "../components/title";

function Contato(){
    <div className="App">      
    <Header></Header>
      <Title>DADOS GERAIS</Title>
      <Wrapper>
        <FullInput title="Nome"/>
        <FullInput title="E-mail"/>
        <FullInput title="CPF"/>
        <FullInput title="Data de Nascimento"/>
      </Wrapper>
    </div>
}

export default Contato;