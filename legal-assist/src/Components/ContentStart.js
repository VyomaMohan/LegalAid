import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
const { Column, ColumnGroup } = Table;

class ContentStart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [{
                title:"Find relevant laws",
                desc:"Finds out the laws relevant to the problem. Can categorize according to relevance to the problem."
            },
             {
                title:"Document analysis",
                desc:"Takes a picture of a document and scans for the content. From the content, provides a summary."
            }
        ]
        }
    }

    render(){
        return(
            <Table dataSource={this.state.data}>
                <Column title="Module" dataIndex="title" key="title"></Column>
                <Column title="Description" dataIndex="desc" key="desc"></Column>
            </Table>
        )
    }

}

export default ContentStart;