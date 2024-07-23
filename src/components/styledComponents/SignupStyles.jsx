import styled from "styled-components";


export const SignUp =styled.section`
background-color: ${({theme})=>theme.colors.signup.bg};
width:100%;

`;
export const SignUpContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:5rem;
h1{
font-size: 42px}
p{
font-size: 23px}
`;