import React, { Component } from 'react';
import NavWrapper from "./components/NavWrapper.js";
import { Route }  from "react-router-dom";
import SubNav from './components/SubNav.js';
import './App.css';

class App extends Component {
    constructor(props)  {
        super(props);
        this.state  =   {
            links:   [
                {
                    name: "Mac",
                    subLinks:   [
                        "MacBook",
                        "MacBook Air",
                        "MacBook Pro",
                        "iMac",
                        "iMac Pro",
                        "Mac Pro",
                        "Mac Mini",
                        "Accessories",
                        "Mojave",
                        "Compare"
                    ]
                },
                {
                    name: "iPad",
                    subLinks:   [
                        "iPad Pro",
                        "iPad",
                        "iPad Mini 4",
                        "iOS 12",
                        "Accessories",
                        "Compare"
                    ]
                },
                {
                    name: "iPhone",
                    subLinks:   [
                        "iPhone Xs",
                        "iPhone Xr",
                        "iPhone 8",
                        "iPhone 7",
                        "iOS 12",
                        "AirPods",
                        "Accessories",
                        "Compare"
                    ]
                },
                {
                    name: "Watch",
                    subLinks:   [
                        "Apple Watch Series 4",
                        "Apple Watch Nike+",
                        "Apple Watch Hermes",
                        "Apple Watch Series 3",
                        "WatchOS",
                        "Bands",
                        "Accessories",
                        "Compare"
                    ]

                },
                {
                    name: "TV",
                    subLinks:   [
                        "Apple TV 4K",
                        "Apple TV",
                        "TV App",
                        "Accessories",
                        "Compare"
                    ]
                },
                {
                    name: "Music",
                    subLinks:   [
                        "Apple Music",
                        "iTunes",
                        "HomePod",
                        "AirPods",
                        "iPod touch",
                        "Music Accessories",
                        "Gift Cards"
                    ]
                },
            ]
        }
    }
  render() {
    return (
      <div className="App">
            <Route path="/" render={()  =>  <NavWrapper links={this.state.links}/>} />
            <Route path="/item/:item" render={(props)    =>  <SubNav links={this.state.links} {...props}/>} />
      </div>
    );
  }
}

export default App;
