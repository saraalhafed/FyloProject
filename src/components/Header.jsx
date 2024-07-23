import React from 'react'
import { Logo, Navbar,Link } from './styledComponents/HeaderStyled'
import { Container } from './styledComponents/Container';
import logo from "../images/logo.svg";
export default function Header() {
  return (
    <Navbar>
      <Container>
          <Logo  src={logo}/> {/* we import the img logo  */}
          <div>
            < Link href="#">Features</Link>
            <Link href="#">Teams</Link>
            <Link href="#">Sign In</Link>
          </div>
      </Container>
    </Navbar>
  );
}
