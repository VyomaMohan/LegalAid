import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

class DescRelevant extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <PageHeader
    className="site-page-header"
    title="Relevant laws"
    subTitle="Find all the relevant laws regarding your case. The higher the percentage given for relevance, the more probable that this law will be useful for you"
  />
        )
    }
}

export default DescRelevant;