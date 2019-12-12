import React, { Component } from 'react'
import styled from 'styled-components';
import Hamburger from './Hamburger'

const Title = styled.h1`  font-size: 1.5em;  color: #FFFFFF; padding: 20px 0 20px 15px; margin: 10px 0 10px 0;`
const Mainheader = styled.section` display: flex; justify-content: space-between; background-color: #333333; height: 100px;`




class Header extends Component{
    render(){
        return(
            <>
            <Mainheader>
            <Title>Hamburger Menu Wireframe</Title>
            <Hamburger></Hamburger>
            </Mainheader>
            </>
        )
        }
}

export default Header