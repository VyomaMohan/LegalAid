import React from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';

class DocumentProcessing extends React.Component{
    constructor(props){
        super(props);
    
    this.state={
        imageFile:'',
        summaryResult:'',
        entityResult:''
    }

    this.pathButtonOnClick=this.pathButtonOnClick.bind(this);
    this.inputChangeHandler=this.inputChangeHandler.bind(this);
    this.entityButtonOnClick=this.entityButtonOnClick.bind(this);
    }

    inputChangeHandler(event){
        event.preventDefault()

        this.setState({
            ...this.state,
            imageFile : event.target.files[0]
        })
        console.log("done")

    }

    async pathButtonOnClick(){

        if(this.state.imageFile!=''){
            console.log("File that is going to be sent is:")
        console.log(this.state.imageFile)

        var formdata = new FormData();
        formdata.append("imagefile", this.state.imageFile);

        await fetch("http://127.0.0.1:5000/documentsummary",{
            method:"POST",
            body:formdata
        }).then((response)=>{
            console.log("response is")
            console.log(response)
            return response.json()
        }).then((data)=>{
            console.log("data is:")
            console.log(data.response)
            this.setState({summaryResult:data.response})
        })
        }
        else{
            console.log("No file")
        }
    }

    async entityButtonOnClick(){

        if(this.state.imageFile!=''){
            console.log("File that is going to be sent is:")
        console.log(this.state.imageFile)

        var formdata = new FormData();
        formdata.append("imagefile", this.state.imageFile);

        await fetch("http://127.0.0.1:5000/documentner",{
            method:"POST",
            body:formdata
        }).then((response)=>{
            console.log("response is")
            console.log(response)
            return response.json()
        }).then((data)=>{
            console.log("data is:")
            console.log(data)
            this.setState({entityResult:data})
        })
        }
        else{
            console.log("No file")
        }
    }

    render(){
        return(
            <div>

                <div>
                    <b>What is this about?</b>
                    <p>Most documents are in the form of images. Enter the path to your image to convert the contents to text for easy reading. A summary is also provided in order to understand the core concepts of the document without going through the contents.</p>
                    <p>In summarizing the document, the more frequently mentioned concepts are considered. Thus use this only to get an overview of the document.</p>
                    <br/>
                    <p>Attach the file below.</p>
                </div>

                <div>
                    <p>Full path to image:</p>
                    <Input type="file" onChange={this.inputChangeHandler}/>
                    <Button type="primary" onClick={(event)=>this.pathButtonOnClick(event)}>Summarize</Button>
                    <Button type="primary" onClick={(event)=>this.entityButtonOnClick(event)}>Named Entities</Button>
                </div>

                { this.state.summaryResult!=='' && <div>
                    <h1>Summary Result:</h1>
                    <p>{this.state.summaryResult}</p>
                </div>}

                {this.state.entityResult!=='' && <div>
                    <List
                    header={<h1>Named Entities Found:</h1>}
                    size="large"
                    dataSource={this.state.entityResult}
                    renderItem={item=><List.Item>{item.name}</List.Item>}
                    ></List>
                </div>
                }

            </div>
        )
    }

}
export default DocumentProcessing;