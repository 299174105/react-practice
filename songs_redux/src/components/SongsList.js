import React,{Component} from 'react';
import {connect} from "react-redux";
import {selectedSong} from "../actions";

class SongsList extends Component{

    renderList = ()=>{

        return this.props.songs.map(song=>{

            return (
                <div className="item" key={song.name}>
                   <div className="right floated content">
                    <button onClick={()=>this.props.selectedSong(song)} className="ui button primary" >点击查看详情</button>
                   </div>
                    <div className="content">{song.name}</div>
                </div>
            );
        });
    };
    render() {

        console.log(this.props);
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );

    }
}

const mapStoreToProps = (store)=>{

    return {songs:store.songList};

};

export default connect(mapStoreToProps,{selectedSong})(SongsList);