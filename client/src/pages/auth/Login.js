
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { mobile } from '../../Responsive'
import { Link } from "react-router-dom";
// import { handleLogin } from '../../sevices/authservice'
const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://wallpapercave.com/wp/wp4323509.jpg')center;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
padding:20px;
width:30%;
background-color:white;
${mobile({ width: '75%' })}
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`
const Tcontainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Mcontainer = styled.h1`

`
const Input = styled.input`
margin:20px 10px 10px 0px;
padding:10px;
flex:1;
min-width:60%;`
const Des = styled.span`
font-size:15px;
margin:20px 0px;`
const Button = styled.button`
width:40%;
height:40px;
border:none;
background-color:black;
color:white;
cursor:pointer;
`

const Login = () => {
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");




    const handleLoginClick = (e) => {
        e.preventDefault();
        const formData = {
            role,
            email,
            password

        };
        if (role === '' || email === '' || password === '') {
            return alert("Provide the field")

        }
        console.log(formData)

    }

    return (


        <Container>
            <Wrapper>
                <Tcontainer>
                    <Mcontainer>LOGIN</Mcontainer>

                </Tcontainer>
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
                    <Input placeholder="email"
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder='Password'
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <Des>Not yet Registerd Please<Link to='/register'> REGISTER</Link></Des>
                    <Button onClick={handleLoginClick}>LOGIN</Button>
                </Form>


            </Wrapper>

        </Container>

    )
}


export default Login
