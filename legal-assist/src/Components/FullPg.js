import React from 'react';
import Navbar from './Navbar'
import DescStart from './DescStart';
import ContentStart from './ContentStart';

class FullPg extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div id='fullpage'>
                <Navbar/>
                <div id='description'><DescStart/></div>
                <div id='content'>
                    <ContentStart/><br/>
                    <p><b>Get started by choosing one of the menu options!</b></p>
                </div>
            </div>
        )
    }

}

export default FullPg;