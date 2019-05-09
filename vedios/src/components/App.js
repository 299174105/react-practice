import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component{

    state = {videos:[],selectedVideo:null};
    componentDidMount() {

        this.onSearchSubmit('buildings');
    }

    onSearchSubmit = async term=>{

       const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });

        console.log(response.data.items);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })


    };
    onSelectedVideo = (video)=>{

        this.setState({selectedVideo:video});
    };

 render() {
     return (
         <div className="ui container">
            <SearchBar onTermSubmit={this.onSearchSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelected={this.onSelectedVideo}/>
                    </div>
                </div>
            </div>
         </div>);
 }
}

export default App;