import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Nav from "./Nav";

class Header extends React.Component {
    render() {
        return (
            <Nav/>,
            <Title/>,
            <Subtitle/>
        )
    }
}

export default Header