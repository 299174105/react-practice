import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from "react-redux";


class StreamsEditCreate extends React.Component{

    renderErrors = ({error,touched})=>{

        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };

    renderForm = ({input,label,meta})=>{
        //console.log(input);
        //console.log(this.props);
        const className = `field ${meta.error&&meta.touched?'error':''}`;
        //console.log(meta);
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {/*<div>{meta.error}</div>*/}
                {this.renderErrors(meta)}
            </div>
        );
    };


    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <Field name="title" component={this.renderForm} label="Enter Title" />
                <Field name="description" component={this.renderForm} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title='Title cannot be null!';
    }

    if(!formValues.description){
        errors.description='Description cannot be null!';
    }
    return errors;
};
const formWarped = reduxForm({form:'StreamsCreate',validate})(StreamsEditCreate);

const mapStateToProps =(state)=>{
    return {auth:state.isSign}
};

export default connect(mapStateToProps)(formWarped)