import styled from "styled-components";
import borderimg from "../../images/bg-curve-desktop.svg";

/* the border at the top is img,we can use attriput, */
export const TopBorder =styled.img.attrs({
    src: borderimg,
})`
color:${({theme})=>theme.colors.teams.bg};
width:100%;
margin-top: 5rem;
`/* when we call the img we dont need to use src */

/* big parent */
export const TeamsContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:-1rem;
width:100%;
padding:0 10rem;
background-color:${({theme})=>theme.colors.teams.bg}
h1 {
  font-size: 42px;
  }
  p {
  font-size:23px;
  }
  img {
  width:50%;
  margin-left: 3rem;
  }
`;