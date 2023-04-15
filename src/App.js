import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 
import DadosPessoais from "./pages/dadosPessoais";
import Contato from "./pages/contatoEnder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DadosPessoais/>}/>
        <Route path="/cont" element={<Contato/>}/>
      </Routes>
    </Router>
  );
}
export default App;
