import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render()    {
        return(
            <div>
                <Link to={`/item/${this.props.name}`}>{this.props.name}</Link>
            </div>
        )
    }

}

export default Nav;
