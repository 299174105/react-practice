import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDsiplay';
import Spinner from './Spinner';

class App extends React.Component{

   state={lat:null,error:null};
   renderBody(){
       if (this.state.lat && !this.state.error) {
           return <SeasonDisplay la={this.state.lat} month={new Date().getMonth()}/>;
       }

       if (!this.state.lat && this.state.error) {
           return (
               <div>Error:{this.state.error}</div>
           )
       }

       return (
           <div><Spinner message='请同意定位!'/></div>
       )
   }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude})
            },
            err=>{
                this.setState({error:err.message})
            }
        )
    }

    render() {

       return (
           <div className="app">
               {this.renderBody()}
           </div>
       );

    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));