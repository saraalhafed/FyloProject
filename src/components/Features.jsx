import React from 'react'
import featureimg from "../images/illustration-1.svg";
import { FeaturesStyles } from './styledComponents/FeaturesStyles'
import{ Input } from "./styledComponents/Input"
import { Button } from './styledComponents/Button'
export default function Features() {
  return (
    
        <FeaturesStyles>
            <div>
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
      </p>
      <article>
        <Input/>
         <Button>Get started</Button>
      </article>
      </div>
      <img src={featureimg}/>
     </FeaturesStyles>
    
  )
}
