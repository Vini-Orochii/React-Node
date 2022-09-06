import styled from "styled-components";
import { primary, dark } from "../../styles/colors.jsx";

const Header = styled.header`

   border-radius: 3rem;

   background: ${ primary };

   box-shadow: 5px 0px 26px 2px #000000;

   padding: 2rem;
`;

const Titulo = styled.h2`
   font-size: 1.5rem;
`;

const CampoTexto = styled.input`

   width: 70%;
   
   padding: 2rem;

   border: none;

   border-radius: 1rem;

   ::placeholder{
      color: ${ dark };
   }
`;

const Botao = styled.button`


`;

export { Header, Titulo, CampoTexto };