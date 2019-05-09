import React from 'react';
import {connect} from "react-redux";

class SongDetail  extends React.Component{


   render() {
       console.log(this.props);
       return (
           <div>
               SongDetail<br/>
               {/*{props.song===null?'':`title:${props.song.name}<br/>`}
            {props.song===null?'':`duration:${props.song.duration}`}*/}
           </div>
       )
   }
}

const mapStateToProps = store =>{


    return {song:store.selectedSong};
};


export default connect(mapStateToProps)(SongDetail);