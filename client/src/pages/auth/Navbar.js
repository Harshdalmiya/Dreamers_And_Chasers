//header of home page
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../Responsive'
import { BiSolidDonateBlood, BiUserCircle } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation, Link } from "react-router-dom";
const Container = styled.div`
    height: 60px;
    margin-bottom:5px;
    padding-bottom:10px;
    background-color:#4a070f;
    ${mobile({ height: '50px', backgroundColor: '#efefe2' })}
    
`
const Wrapper = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content:space-between;
    ${mobile({ padding: '0px' })};
    
`
const Language = styled.h1`
    font-size: 20px;
    font-weight:40px;
    color:white;
    margin-right:10px;
    ${mobile({ display: 'none' }, { width: '0vh' })}
    `
const Input = styled.input`
   border:none;
   ${mobile({ width: '50px' })}

`
const Searchcontainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
    

     `
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    
    
    `
const Center = styled.div`
    flex: 1;
    text-align:center;
    
    `
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: '24px' })}
    `
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ justifyContent: 'center', flex: '2' })}
    
    `
const Menuitem = styled.div`
    font-size=14px;
    margin-left:25px;
    color:white;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
    `
const Button1 = styled.button`
    background-color:black;
    color:white;
    `

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        alert("Logout Successfully");
        navigate("/login");
    };

    const location = useLocation();
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        RED BLOOD CROSS
                    </Language>
                    <BiSolidDonateBlood color='white' />


                </Left>
                <Right>
                    <Menuitem>
                        <BiUserCircle />Hi, Welcome{" "}
                        {user?.name || user?.hospitalName || user?.organisationName}
                        &nbsp;</Menuitem>
                    <Menuitem>
                        <Button1 onClick={handleLogout}>
                            Logout
                        </Button1>
                    </Menuitem>



                </Right>

            </Wrapper>


        </Container >
    )
}
export default Navbar