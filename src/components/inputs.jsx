import styled from "styled-components";
import handleDate from "../Utils/handleDate";
import handleCpf from "../Utils/handleCPF";
import {handleEmail, invalidMailNoti} from "../Utils/handleEmail";
import handleCep from "../Utils/handleCep";

const Input = styled.input`
    width:80vw;
    height: 1.3rem;
    background-color: #00000040;
    border:1px solid #ffffff40;
    border-radius:.2rem;
    color:#fff;
    outline:none;
    text-align: center;
    margin:auto;
`
function fullInput(props) {
    switch (props.dataType) {
        case 'cpf':
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input type="text"
                    title={props.title}
                    placeholder="_____-___"
                    onBlur={handleCpf}
                    maxLength={14}
                />
            </div>);

        case 'cep':
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input type="text"
                    title={props.title}
                    placeholder="_____-__"
                    onChange={handleCep}
                    maxLength={9}
                />
            </div>);

        case 'date':
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input type="date"
                    title={props.title}
                    onBlur={handleDate}
                    maxLength={10}
                />
            </div>);

        case 'e-mail':
            return (
                <div>
                    <span>
                        {props.title}
                    </span>
                    <br />
                    <Input
                        type="text"
                        title={props.title}
                        placeholder="Insira seu e-mail"
                        onChange={handleEmail}
                        onBlur={invalidMailNoti}
                    />
                </div>
            )

        case 'name':
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input type="text" title={props.title} />
            </div>);

        case 'endereco':
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <br/>
                <div className="gridEnd">
                <span>Logradouro:</span>
                <Input id={props.dataType + 'log'} type="text" title={props.title} />
                <span>Bairro:</span>
                <Input id={props.dataType + 'bai'} type="text" title={props.title} />
                <span>Cidade:</span>
                <Input id={props.dataType + 'loc'} type="text" title={props.title} />
                <span>Estado:</span>
                <Input id={props.dataType + 'uf'} type="text" title={props.title} />
                </div>

            </div>); 

        default:
            return (<div>
                <span>
                    {props.title}
                </span>
                <br />
                <Input id={props.title} type="text" title={props.title} />
            </div>);
    }
}
export default fullInput;