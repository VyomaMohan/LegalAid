import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

class DescFindLawyer extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <PageHeader
    className="site-page-header"
    title="Find Lawyer"
    subTitle="Find the right lawyer to argue your case. Narrow down the results according to the field they work in or fees."
  />
        )
    }
}

export default DescFindLawyer;