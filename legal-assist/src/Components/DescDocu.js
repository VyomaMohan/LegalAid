import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

class DescDocu extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <PageHeader
    className="site-page-header"
    title="Document processing"
    subTitle="Upload your documents to convert to text and get the gist"
  />
        )
    }
}

export default DescDocu;