import _ from 'lodash';
import React from 'react';
import {connect} from "react-redux";

import {fetchStream,editSteram} from "../../actions";
import StreamsEditCreate from './StreamsEditCreate';

class StreamsEdit extends React.Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) =>{

        this.props.editSteram(this.props.match.params.id,formValues);
    };

    render() {
       console.log(this.props);

        if(!this.props.stream){
            return  <div>Loading...</div>;
        }
       return (
           <div>
               <h3>Edit a Stream</h3>
               <StreamsEditCreate
                   onSubmit={this.onSubmit}
                   initialValues={_.pick(this.props.stream, 'title', 'description')}
               />
           </div>
       );
   }
}

const mapStateToProps = (state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{fetchStream,editSteram})(StreamsEdit);