
import styled from "styled-components";
import { background } from "../../styles/colors.jsx";

const Page = styled.div`

   height: 100%;
   width: 100%;

   display: flex;
   justify-content: center;
   align-items: center;

`
const Container = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   height: 70%;
   width: 25%;
   border-radius: 2rem;
   box-shadow: 5px 3px 10px 1px #000000;

   background: ${ background }

`;

export { Container, Page }