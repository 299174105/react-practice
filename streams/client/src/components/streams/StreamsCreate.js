import React from 'react';

import {connect} from "react-redux";

import {createStream} from "../../actions";


import StreamsEditCreate from './StreamsEditCreate';

class StreamsCreate extends React.Component{

    onSubmit = (formValues)=>{
        this.props.createStream(formValues);
    };
    render() {
        return (
           <div>
               <h3>Create a Stream</h3>
               <StreamsEditCreate onSubmit={this.onSubmit}/>
           </div>
        )
    }
}




export default connect(null,{createStream})(StreamsCreate)