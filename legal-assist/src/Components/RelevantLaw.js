import React from 'react';
import 'antd/dist/antd.css';
import {Input,Button,Table} from 'antd';

const { Column, ColumnGroup } = Table;

const {TextArea}=Input;

class RelevantLaw extends React.Component{
    constructor(props){
        super(props);

        this.state={
            problemString:'',
            relevantLaws:[]
        }

        this.handleInputChange=this.handleInputChange.bind(this)
        this.onClickHandler=this.onClickHandler.bind(this)
    }

    handleInputChange(event){
        event.preventDefault()
        this.setState({
            ...this.state,
            problemString: event.target.value
        })
        console.log(this.state.problemString)
    }

    async onClickHandler(){
        await fetch("http://127.0.0.1:5000/relevant?pstring="+this.state.problemString,{
            method:"GET"
        }).then((response)=>{
            console.log(response)
            return response.json()
        }).then((parsedJson)=>{
            var messageJson=JSON.stringify(parsedJson)
            var stateObj=JSON.parse(messageJson)
            this.setState({
                ...this.state,
                relevantLaws:stateObj
            })
        })

        console.log(this.state.relevantLaws)
    }

    render(){
        return(
            <div>
                <div>
                    <b>What is this about?</b>
                    <p>Enter your case or scenario in your own words. No need to worry about using technical terms. This module will return all the laws that are found to be connected with your given case. Hint: Be as descriptive as possible if you need more laws or suggestions.</p>
                </div>
                <TextArea onChange={(event)=>this.handleInputChange(event)} />
                <Button type="primary" onClick={this.onClickHandler}>Find relevant laws</Button>
                <p>Note: The higher the relevance percentage for a law, the more likely it is to be useful for the case.</p>
                <div>
                    <Table dataSource={this.state.relevantLaws}>
                        <Column title="Relevant Law" dataIndex="law" key="law"></Column>
                        <Column title="Relevance Percentage" dataIndex="rel" key="rel"></Column>
                    </Table>
                </div>
            </div>
        )
    }
}

export default RelevantLaw;
