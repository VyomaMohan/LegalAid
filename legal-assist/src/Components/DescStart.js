import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

class DescStart extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <PageHeader
    className="site-page-header"
    title="Getting started"
    subTitle="Legal aids: right from looking up similar laws to analyzing documents right at your fingertips"
  />
        )
    }
}

export default DescStart;
