import React from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List,Select,Table} from 'antd';

const { Option } = Select;
const { Column, ColumnGroup } = Table;

class FindLawyer extends React.Component{
    constructor(props){
        super(props);

        this.state={
            tabledata:[],
            fieldValue:"Any",
            feeValue:"Any"
        }

        this.sendRequestToDb=this.sendRequestToDb.bind(this);
        this.handleFieldChange=this.handleFieldChange.bind(this);
        this.handleFeeChange=this.handleFeeChange.bind(this);

        //document.getElementById("lawyerfield").addEventListener('select',this.handleFieldChange)
    }

    async componentWillMount(){
        await fetch("http://127.0.0.1:5000/dbgetall").then((response)=>{
            return response.json()
        }).then((parsedJson)=>{
            var messageJson=JSON.stringify(parsedJson)
            var stateObj=JSON.parse(messageJson)
            this.setState({
                ...this.state,
                tabledata:stateObj
            })
        })
    }

    async sendRequestToDb(){
        console.log("Sending Reqest to DB "+this.state.fieldValue+this.state.feeValue)
        var url=""
        if(this.state.fieldValue=="Any" && this.state.feeValue=="Any"){
            url="http://127.0.0.1:5000/dbgetall"
        }
        else{
            url="http://127.0.0.1:5000/dbparticular?field="+this.state.fieldValue+"&fee="+this.state.feeValue
        }
        await fetch(url).then((response)=>{
            return response.json()
        }).then((parsedJson)=>{
            var messageJson=JSON.stringify(parsedJson)
            var stateObj=JSON.parse(messageJson)
            this.setState({
                ...this.state,
                tabledata:stateObj
            })
        })
    }

    handleFieldChange(e,v){
       // e.preventDefault();

        this.setState({
            ...this.state,
            fieldValue: v.value
        });
    }

    handleFeeChange(event){
        event.preventDefault()

        console.log(event.target.value)

        if(event.target.value==""){
            this.setState({feeValue: "Any"})
            console.log("empty is "+event.target.value+"correct")
        }
        else{
            this.setState({feeValue: event.target.value})
            console.log("empty is "+event.target.value)
        }
    }



    render(){

        return(
            <div>
                <div>
                    <b>What is this about?</b>
                    <p>The list of lawyers that are available are listed below.</p>
                    <br/>
                </div>
                <div>
                    <Select
                    id="lawyerfield"
                    showSearch
                    defaultValue="Any"
                    style={{ width: 200 }}
                    placeholder="Select a field"
                    onChange={(e,v)=>this.handleFieldChange(e,v)}
                    >
                        <Option value="Any">Any</Option>
                        <Option value="Family Law">Family Law</Option>
                        <Option value="Corporate Law">Corporate Law</Option>
                        <Option value="Intellectual Property Law">Intellectual Property Law</Option>
                        <Option value="Administrative Law">Administrative Law</Option>
                        <Option value="Notary">Notary</Option>
                        <Option value="International Law">International Law</Option>
                    </Select>
                    <Input style={{width:400}} placeholder="Enter max avg fee if req" onChange={(event)=>this.handleFeeChange(event)}></Input>
                    <Button type="primary" onClick={this.sendRequestToDb}>Apply filter</Button>
                    {
                        this.state.tabledata!=null && <Table dataSource={this.state.tabledata}>
                            <Column title="Name" dataIndex="name" key="name"></Column>
                            <Column title="Phone Number" dataIndex="phonenumber" key="phonenumber"></Column>
                            <Column title="Field" dataIndex="field" key="field"></Column>
                            <Column title="Average Fee" dataIndex="avgfee" key="avgfee"></Column>
                        </Table>
                    }
                </div>
            </div>
        )
    }
}

export default FindLawyer;