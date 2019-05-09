import React from 'react';

const Spinner =props=>{

    Spinner.defaultProps ={
        message:'Loading'
    };
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    );


};

export default Spinner;