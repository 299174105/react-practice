import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchStreams} from "../../actions";

class StreamsList extends React.Component{

    componentDidMount() {

        this.props.fetchStreams();
    }

    editAndDelete=(userId,id)=> {

        if(!userId){
            return null;
        }
        if(userId===this.props.isSignedIn.userId){
            return (

                <div className="right floated content">
                    <Link to={`/streams/edit/${id}`} className="ui button primary"  >Edit</Link>
                    <Link to={`/streams/delete/${id}`} className="ui button negative" >Delete</Link>
                </div>
            );
        }else {
            return null;
        }
    };

    renderList = ()=>{

        if(!this.props.streams){
            return 'Loading...';
        }
        else {

           return  Object.values(this.props.streams).map(({id,title,description,userId})=>{

              return(
                  <div className="item" key={id}>
                      {this.editAndDelete(userId,id)}
                      <i className="large middle aligned camera icon"/>
                    <div className="content">
                        <Link to={`/streams/show/${id}`} className="header">{title}</Link>
                        <div className="description">{description}</div>
                    </div>

                </div>
              );
            }
        )

        }
    };

    render() {

        return (
            <div>
                <div className="ui list relaxed divided">
                    {this.renderList()}
                </div>
                <div style={{float: "right"}}>
                    {this.props.isSignedIn.isSignedIn !== null && this.props.isSignedIn.isSignedIn ?
                        <Link to='/streams/new' className="ui button primary">Create Stream</Link> : ''}
                </div>
            </div>
        );

    }


}

const mapStateToProps = (state)=>{

    return ({
        streams:state.streams,
        isSignedIn :state.isSign
    });
};

export default connect(mapStateToProps,{fetchStreams})(StreamsList);