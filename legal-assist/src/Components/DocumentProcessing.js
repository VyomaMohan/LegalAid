import React from 'react';
import 'antd/dist/antd.css';
import {Input,Button} from 'antd';

class DocumentProcessing extends React.Component{
    constructor(props){
        super(props);
    
    this.state={
        imagePath:''
    }

    this.pathButtonOnClick=this.pathButtonOnClick.bind(this);
    this.inputChangeHandler=this.inputChangeHandler.bind(this);
    }

    inputChangeHandler(event){
        event.preventDefault()
        this.setState({
            ...this.state,
            imagePath : event.target.value
        })
        console.log("done")

    }

    pathButtonOnClick(){
        console.log(this.state.imagePath)
    }

    render(){
        return(
            <div>
                <div>
                    <b>What is this about?</b>
                    <p>Most documents are in the form of images. Enter the path to your image to convert the contents to text for easy reading. A summary is also provided in order to understand the core concepts of the document without going through the contents.</p>
                    <p>In summarizing the document, the more frequently mentioned concepts are considered. Thus use this only to get an overview of the document.</p>
                    <br/>
                    <p>Enter the full path to your document below. Ensure that it is below 2000 characters.</p>
                </div>
                <div>
                    <p>Full path to image:</p>
                    <Input type="file" onChange={this.inputChangeHandler}/>
                    <Button type="primary" onClick={(event)=>this.pathButtonOnClick(event)}>Go</Button>
                </div>
            </div>
        )
    }

}
export default DocumentProcessing;