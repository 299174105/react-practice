import {combineReducers} from 'redux';

const songsReducer = ()=>{

    return [
        {name:'time',duration:'2:13'},
        {name:'as long as you love me',duration:'3:13'},
        {name:'baby',duration:'4:13'},
        {name:'青花瓷',duration:'4:20'}
    ]
};

const selectedSongReducer = (selectedSong=null,action)=>{

    if(action.type === 'SELECTED_SONG'){
        return action.paylod;
    }
    return selectedSong;
};

export default combineReducers({
    songList:songsReducer,
    selectedSong:selectedSongReducer
});