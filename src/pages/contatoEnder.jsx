import FullInput from "../components/inputs";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Title from "../components/title";

function Contato(){return(
    <div className="App">      
    <Header></Header>
      <Title>DADOS GERAIS</Title>
      <Wrapper>
        <FullInput title="CEP"/>
        <FullInput title="Endereço"/>
        <FullInput title="Cidade"/>
      </Wrapper>
    </div>
);
}

export default Contato;