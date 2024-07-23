import styled from "styled-components";


export const Logo=styled.img`
width:250px;
`;

export const Link =styled.a`
text-decoration:none;
text-transform:capitalize;
color: # 333;
margin:0 2rem;
&:hover {
 text-decoration:underline;
 opacity:0.9;}
`;

export const Navbar=styled.nav`
div{
display:flex;
justify-content:space-between;
align-items:center;
padding:1.5rem 1rem;
}`
/* div :like container */
/* inside the styled-component will be write just html tag , we cannot use another styled-component inside it                */