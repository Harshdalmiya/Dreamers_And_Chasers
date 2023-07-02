
import React from 'react'
import { styled } from 'styled-components'
import { mobile } from '../../Responsive'
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
    return (


        <Container>
            <Wrapper>
                <Tcontainer>
                    <Mcontainer>LOGIN</Mcontainer>
                </Tcontainer>


                <Form>
                    <Input placeholder='Email Adress' />
                    <Input placeholder='Password' />

                    <Des>By creating an account,I consent to processing my personal data in accordance with the <b>PRIVACY POLICY</b></Des>
                    <Button>LOGIN</Button>
                </Form>


            </Wrapper>

        </Container>

    )
}


export default Login
