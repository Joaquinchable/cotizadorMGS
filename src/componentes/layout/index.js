import React, {Component} from "react"
import Header from './Header';
import BarNav from './BarNav';
import Section from './Section';
import Footer from './Footer';


class Layout extends Component{
    render() {
        return (
            <div>
                <Header/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}


export default Layout