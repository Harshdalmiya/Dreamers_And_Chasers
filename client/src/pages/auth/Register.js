import React, { useState } from 'react'
import { styled } from 'styled-components'
import { mobile } from '../../Responsive'
import { Link } from "react-router-dom";

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('https://wallpaperaccess.com/full/3718207.jpg')center;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
padding:20px;
width:40%;
height:70%;
background-color:white;
${mobile({ width: '75%' })}
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`
const Title = styled.h1`
font-size:24px;
font-weight:400;`
const Input = styled.input`
margin:20px 10px 10px 0px;
padding:10px;
flex:1;
min-width:40%;`
const Des = styled.span`
font-size:15px;
margin:20px 0px;`
const Button = styled.button`
width:100%;
height:40px;
border:none;
margin:30px 0px;
background-color:black;
color:white;
cursor:pointer;
`

const Register = () => {
    const [role, setRole] = useState("role");
    const [password, setPassword] = useState("password");
    const [email, setEmail] = useState("email");
    const [userName, setUserName] = useState("Username");
    const [organizationName, setOrganizationName] = useState("Organization name");
    const [hospitalName, setHospitalName] = useState("Hospital name");
    const [address, setAddress] = useState("Address");
    const [phone, setPhone] = useState("Phone");



    return (
        <Container>
            <Wrapper>

                <Title>CREATE AN ACCOUNT</Title>

                <div className="d-flex mb-3">

                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="role"
                            id="Admin"
                            value={"admin"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label class="form-check-label" htmlFor="donarRadio">Admin</label>
                    </div>
                    <div class="form-check ms-2">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="role"
                            id="Donor"
                            value={"donor"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label class="form-check-label" htmlFor="donarRadio">Donor</label>
                    </div>
                    <div class="form-check ms-2">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="role"
                            id="Hospital"
                            value={"hospital"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label class="form-check-label" htmlFor="HospitalRadio">Hospital</label>
                    </div>
                    <div class="form-check ms-2">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="role"
                            id="Organization"
                            value={"organization"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label class="form-check-label" htmlFor="OrganizationRadio">Organization</label>
                    </div>


                </div>
                <Form>
                    {(role === "admin" || role === "donor") && (
                        <Input placeholder={userName}
                            labelFor={"forName"}
                            inputType={"text"}
                            name={"userName"}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)} />
                    )}
                    {(role === "organization") && (
                        <Input placeholder={organizationName}
                            labelFor={"forName"}
                            inputType={"text"}
                            name={"NameOrganization"}
                            value={organizationName}
                            onChange={(e) => setOrganizationName(e.target.value)} />
                    )}
                    {(role === "hospital") && (
                        <Input placeholder={hospitalName}
                            labelFor={"forName"}
                            inputType={"text"}
                            name={"Name"}
                            value={hospitalName}
                            onChange={(e) => setHospitalName(e.target.value)} />

                    )}

                    <Input placeholder={email}
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />



                    <Input placeholder={address}
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"Address"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />

                    <Input placeholder={phone}
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"Name"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    <Des>By creating an account,I consent to processing my personal data in accordance with the <b>PRIVACY POLICY</b></Des>
                    <Des>Already registered user please<Link to='/login'>LOGIN</Link></Des>
                    <Button>CREATE</Button>
                </Form>


            </Wrapper>

        </Container>
    )
}

export default Register
