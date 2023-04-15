import styled from "styled-components"

const Input = styled.input`
    width:80vw;
    height: 1.3rem;
    background-color: #00000040;
    border:1px solid #ffffff40;
    border-radius:.2rem;
    color:#fff;

    &:focus{
        outline:1px solid white;
    }
`
function fullInput(props) {
    return (<div>
        <span>
            {props.title}
        </span>
        <br/>
        <Input type="text" title={props.title}/>
    </div>
    )
}
export default fullInput;