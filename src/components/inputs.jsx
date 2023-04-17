import styled from "styled-components";
import handleCpf from "../Utils/handleCPF";

const Input = styled.input`
    width:80vw;
    height: 1.3rem;
    background-color: #00000040;
    border:1px solid #ffffff40;
    border-radius:.2rem;
    color:#fff;
    outline:none;
`
function fullInput(props) {

    switch (props.title) {
        case 'CPF':
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input type="text"
                    title={props.title}
                    placeholder="___.___.___-__"
                    onChange={handleCpf}
                    maxLength={14}
                />
            </div>);
        case 'Nome Completo':
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input type="text" title={props.title} />
            </div>);
        default:
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input type="text" title={props.title} />
            </div>);


    }

}
export default fullInput;