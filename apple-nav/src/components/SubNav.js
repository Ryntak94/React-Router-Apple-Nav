import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './Nav.js';

const SubNavContainer   =   styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
`

class SubNav extends Component  {
    constructor(props)  {
        super(props)
        this.state  =   {
            link: "",
            links:   this.props.links,
            subLinks:   []
        }
    }
    componentDidMount() {
        const item = this.props.match.params.item;
        this.setState((state)   =>  ({
            link: item,
            subLinks: this.state.links.filter(i    =>  {
                return i.name.toLowerCase() === item.toLowerCase()
            })[0].subLinks
        }))
    }
    // updateState =   ()  =>  {
    //     const item = this.props.match.params.item;
    //     this.setState((state)   =>  ({
    //         link: item,
    //         subLinks: this.state.links.filter(i    =>  {
    //             return i.name.toLowerCase() === item.toLowerCase()
    //         })[0].subLinks
    //     }))
    // }

    render()    {
        console.log(this.state.subLinks)
        return  (
            <SubNavContainer>
                {this.state.subLinks.map((item, index)  =>  {
                    return <Nav name={item} key={index}></Nav>
                })}
            </SubNavContainer>
        )
    }
}

export default SubNav;
