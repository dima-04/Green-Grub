import React, { Component } from "react";
import "./style.css";

class Home extends Component {
    state = {
        null: {}
    }

    componentDidMount(){
        console.log('Home mounted')
    }

    render() {
        return (
            <h1></h1>
        )
    }
}

export default Home;