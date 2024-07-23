import React from 'react'
import { SignUp, SignUpContainer } from './styledComponents/SignupStyles'
import { Input } from './styledComponents/Input'
import { Button } from './styledComponents/Button'
export default function Signup() {
  return (
    <SignUp> {/* we use it like a div */}
     <SignUpContainer>
     <div>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div>
          <Input />
          <Button> Get Started For Free</Button>
        </div>
     </SignUpContainer>
    </SignUp>
  )
}
