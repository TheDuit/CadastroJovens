import FullInput from "../components/inputs";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Title from "../components/title";
import { ToastContainer } from "react-toastify";

function Contato(){return(
    <div className="App">      
    <Header></Header>
      <Title>ENDEREÇO</Title>
      <Wrapper>
        <FullInput title="CEP" dataType="cep"/>
        <FullInput title="Endereço" dataType="endereco"/>
        <FullInput title="Número" dataType="endnmr" />
      </Wrapper>
      <ToastContainer/>
    </div>
);
}
export default Contato;