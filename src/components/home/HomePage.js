import React from 'react'

import {Navbar} from "./NavBar";

class HomePage extends React.Component{
    render(){

        return(
            <div>
                <Navbar
                titulo={'Home'}
                titulo={'Pizza'}
                logo={this.props.logo}
                />
            </div>
        );
    }
}
export default HomePage;