import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

class DescSimilar extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <PageHeader
    className="site-page-header"
    title="Similar cases"
    subTitle="Find out similar cases to yours from reputed sources"
  />
        )
    }
}

export default DescSimilar;