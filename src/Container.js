import React, { Component } from 'react'
import { render } from '@testing-library/react'
import styled from 'styled-components';
import Header from './Header'


class Container extends Component {

render() {
    return(
        <div>
        <Header />
        </div>
    )
}

}

export default Container