import styled from "styled-components";

export const Button= styled.button`
background:${({theme})=>theme.colors.button.bg};
color: white;
font-weight: bold;
font-size: 1rem;
padding:1rem 0;
width: 200px;
border-radius: 3px;
border: none;
cursor:pointer;
box-shadow: 2px 1px 5px rgba (0,0,0,0.4);
margin:1rem;
transition: 0.5ms transform ease;
&:hover{
opacity: 0.9;
transform:scale(0.98);
}


`