import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../firebase.js";
import "./auth.css";
export default function Signup() {
  const [userDetails, setuserDetails] = useState({});
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setuserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }
  async function handleSubmit() {
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then(
        signInWithEmailAndPassword(
          auth,
          userDetails.email,
          userDetails.password
        ).then(
          updateProfile(auth.currentUser, { displayName: userDetails.firstName })
        ).then()
      )
      .catch((err) => {
        console.log(err);
      }) ;
  }
  return (
    <div>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <h1 className="mb-5">SignUp</h1>
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="First name"
                      name="firstName"
                      id="form1"
                      type="text"
                      onChange={handleChange}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Last name"
                      name="lastName"
                      id="form2"
                      type="text"
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email"
                  name="email"
                  id="form3"
                  type="email"
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  name="password"
                  id="form4"
                  type="password"
                  onChange={handleChange}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  onClick={handleSubmit}
                >
                  SignUp
                </MDBBtn>

                <p className="small mb-5 pb-lg-3 ms-1">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use. Privacy policy
                  </a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
