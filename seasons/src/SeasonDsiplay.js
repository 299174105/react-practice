import './SeasonDisplay.css';
import React from 'react';

const seasonConf ={
    summer:{
        text:'summer',
        className:'sun'
    },
    winter:{
        text:'winter',
        className: 'snowflake'
    }
};

const getSeason=(lat,month)=>{

    if(month>3&&month<10){
       return lat >0?'summer':'winter';
    }else {
       return lat >0?'winter':'summer';
    }

};

const SeasonDsisplay = props=>{

    const season=getSeason(props.lat,props.month);
    const {text,className} = seasonConf[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${className} icon massive`}/><br/>
            <h1>{text}</h1>
            <i className={`icon-right ${className} icon massive`}/><br/>
        </div>
    )
};

export default SeasonDsisplay;