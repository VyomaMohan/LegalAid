import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import DescStart from './DescStart';
import ContentStart from './ContentStart';

import DescRelevant from './DescRelevant';
import RelevantLaw from './RelevantLaw';

import DescDocu from './DescDocu';
import DocumentProcessing from './DocumentProcessing';

import DescSimilar from './DescSimilar';
import SimilarCase from './SimilarCase';

import DescFindLawyer from './DescFindLawyer';
import FindLawyer from './FindLawyer';


class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.relevantClickHandler.bind(this);
        this.documentClickHandler.bind(this);
        this.similarClickHandler.bind(this);
        this.appNameClickHandler.bind(this);
        this.findLawyerClickHandler.bind(this);
    }

    appNameClickHandler(){
        ReactDOM.render(<DescStart/>,document.getElementById('description'))
        ReactDOM.render(<ContentStart/>,document.getElementById('content'))
    }

    relevantClickHandler(){
        ReactDOM.render(<DescRelevant/>,document.getElementById('description'))
        ReactDOM.render(<RelevantLaw/>,document.getElementById('content'))
    }

    documentClickHandler(){
        ReactDOM.render(<DescDocu/>,document.getElementById('description'))
        ReactDOM.render(<DocumentProcessing/>,document.getElementById('content'))
    }

    similarClickHandler(){
        ReactDOM.render(<DescSimilar/>,document.getElementById('description'))
        ReactDOM.render(<SimilarCase/>,document.getElementById('content'))
    }

    findLawyerClickHandler(){
        ReactDOM.render(<DescFindLawyer/>,document.getElementById('description'))
        ReactDOM.render(<FindLawyer/>,document.getElementById('content'));

    }

    render(){
        return(
            <div>
                <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="0" onClick={this.appNameClickHandler}><img src="https://amrel.com/wp-content/uploads/2014/06/cute-robot-drawing1.jpg" alt="robot" width="60" height="60"/> <b>Legal Assistant</b></Menu.Item>
        <Menu.Item key="1" onClick={this.relevantClickHandler}>Relevant laws</Menu.Item>
        <Menu.Item key="2" onClick={this.documentClickHandler}>Document processing</Menu.Item>
        <Menu.Item key="3" onClick={this.similarClickHandler}>Similar cases</Menu.Item>
        <Menu.Item key="4" onClick={this.findLawyerClickHandler}>Find Lawyer</Menu.Item>
        {/* <Menu.Item key="4">nav 4</Menu.Item> */}
      </Menu>
            </div>
        )
    }

}

export default Navbar;