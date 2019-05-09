import React from 'react';
import Modal from '../Modal';
import history from '../../historyBrowser';
import {connect} from "react-redux";
import {fetchStream,deleteStream} from "../../actions";

class StreamsDelete extends React.Component{


    componentDidMount() {

        this.props.fetchStream(this.props.match.params.id);

    }

    renderActions = ()=>{
        return (
            <React.Fragment>
                <div className="ui negative button" onClick={()=>this.onDelete(this.props.match.params.id)}>Delete</div>
                {/*使用 Link 模块跳转*/}
                <div className="ui cancel button" onClick={()=>history.push('/')}>Cancel</div>
            </React.Fragment>
        );
    };

    onDelete = id =>{
        console.log(id);
        this.props.deleteStream(id);
    };

    render() {

        return (
                <Modal
                  title="Delete Stream"
                  content={`Are you sure to delete ${this.props.stream!==null?this.props.stream.title:'the stream'}?`}
                  actions={this.renderActions()}
                  onDismiss={()=>history.push('/')}
                />
        );
    }
}

const mapStateToProps = (state,ownProps)=>{

    return {stream:state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamsDelete);