import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, Table} from 'antd';

const { Column, ColumnGroup } = Table;

class SimilarCase extends React.Component{
    constructor(props){
        super(props);

        this.state={
            caseString:'',
            similarCaseList:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleButtonPress=this.handleButtonPress.bind(this)
    }

    handleInputChange(event){
        event.preventDefault()
        this.setState({
            ...this.state,
            caseString: event.target.value
        })
    }

    async handleButtonPress(){
        //console.log(this.state.caseString)
        await fetch("http://127.0.0.1:5000/similar?cstring="+this.state.caseString,{
            method: "GET"
        }).then((response)=>{
            return response.json()
         }).then((parsedJson)=>{
            var messageJson=JSON.stringify(parsedJson)
            var stateObj=JSON.parse(messageJson)
             
             this.setState({
                 ...this.state,
                 similarCaseList: stateObj
             })
            console.log(parsedJson)
         })

         console.log(this.state.similarCaseList)
    }

    render(){
        return(
            <div>
                <div>
                    <b>What is this about?</b>
                    <p>Enter the important parts of your case in a few words. We will look through reputed sources to get cases similar to yours.</p>
                </div>
                <p>Note: Try to limit the characters to 2000</p>
                <Input onChange={(event)=>this.handleInputChange(event)}/>
                <Button type="primary" onClick={this.handleButtonPress}>Go</Button>
                <br/>
                <div>
                    <Table dataSource={this.state.similarCaseList}>
                        <Column title="Relevant case links" dataIndex="linkaddr" key="linkaddr"></Column>
                    </Table>
                </div>
            </div>
        )
    }
}

export default SimilarCase;