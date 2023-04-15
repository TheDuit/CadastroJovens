import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnNext = styled.button`
width: 31.6vw;
height: 2rem;
position:absolute;
left:66.4vw;
top:90vh;
border-radius: 0.5rem;
border:1px solid #fff;
outline:none;
margin-top:1rem;
background: rgb(8,220,168);
background: linear-gradient(225deg, rgba(8,220,168,1) 0%, rgba(56,106,235,1) 100%);
text-decoration: none;
`;

const BtnNextComp = (props)=>{
    return(
        <BtnNext>
            <Link title={props.title} to={props.to}> {props.title}</Link>
        </BtnNext>
    )
}


export default BtnNextComp;
