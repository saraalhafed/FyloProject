
import { ThemeProvider } from 'styled-components'
import './App.css'
import { Global } from './components/styledComponents/Global'
import {theme} from "./theme"
import Header from './components/Header'
import Features from './components/Features'
import { Container } from './components/styledComponents/Container'
import Teams from './components/Teams'
/* import { SignUp } from './components/styledComponents/SignupStyles' */

function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>{/* we give for all the page this style  throw props wich is theme */}
       <Global/>   {/* them cannot be inside the global because it is a props  */}
       <Header/>
       <Container>
             <Features/>
       </Container>
       <Teams/>
        {/* <SignUp/>  */}
      </ThemeProvider>
    </>
  )
}

export default App
