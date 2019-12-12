import React, { Component } from 'react'
import styled from 'styled-components';


const Container = styled.section` display: inline-block; cursor: pointer; color: #FFFFFF; padding: 20px 15px 20px 0; margin: 10px 0 10px 0;`;
const Bar1 = styled.div` width: 35px; height: 5px; background-color: white; margin: 6px 0; transition: 0.4s;`
const Bar2 = styled.div` width: 35px; height: 5px; background-color: white; margin: 6px 0; transition: 0.4s;`
const Bar3 = styled.div` width: 35px; height: 5px; background-color: white; margin: 6px 0; transition: 0.4s;`


class Hamburger extends Component{

    render(){
        return(
            <>
            <Container>
                 <Bar1></Bar1>
                 <Bar2></Bar2>
                 <Bar3></Bar3>
            </Container>
            </>
        )
        }
}

export default Hamburger