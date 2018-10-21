import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './Nav.js';

const NavWrapperContainer = styled.div`
    display: flex;
    background: black;
    width: 100%;
    justify-content: space-around;
    height: 50px;
    align-items: center;
`

// const Link  =   styled.div`
//     color: white;
//     &:hover {
//         color: lightgrey;
//         cursor: pointer;
//     }
// `

class NavWrapper extends Component  {
    constructor(props)  {
        super(props);
        this.state  =   {
            links:  this.props.links,
        }
    }
    render()    {
        console.log(this.state.links)
        return  (
            <NavWrapperContainer>
                {this.state.links.map((link, index)   =>  {
                    return (<Nav name={link.name} id={index} key={index}/>)
                })}
            </NavWrapperContainer>
        )
    }
}

export default NavWrapper;
