
import React, { useState } from "react";
import "./auth.css";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from "mdb-react-ui-kit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setpass] = useState("")
 async function handleSubmit(e){
    signInWithEmailAndPassword(auth,email,pass).then(()=>{
      console.log("logged-in")
    })
  }
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="graduation-cap fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Majoring</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" name="password" onChange={(e)=>{setpass(e.target.value)}}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-center'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}
