
import { ThemeProvider } from 'styled-components'
import './App.css'
import { Global } from './components/styledComponents/Global'
import {theme} from "./theme"
import Header from './components/Header'

function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>{/* we give for all the page this style  throw props wich is theme */}
       <Global/>   {/* them cannot be inside the global because it is a props  */}
       <Header/>

      </ThemeProvider>
    </>
  )
}

export default App
