import React from 'react'
import { TeamsContainer, TopBorder } from './styledComponents/TeamStyles'
import sideimage from "../images/illustration-2.svg"

export default function Teams() {
  return (
    <>
    <TopBorder/> {/* selfe close lik img */ }
     <TeamsContainer>
        <div>
            <h1>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.</p>
            <p> Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!</p>
        </div>
        <img src={sideimage}/>
     </TeamsContainer>
     </>
  )
}
