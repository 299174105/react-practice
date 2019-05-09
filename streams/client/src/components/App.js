import React from 'react';
import {Router,Route,Switch} from "react-router-dom";
import history from '../historyBrowser';


import StreamsCreate from './streams/StreamsCreate';
import StreamsDelete from './streams/StreamsDelete';
import StreamsEdit from './streams/StreamsEdit';
import StreamsList from './streams/StreamsList';
import StreamsShow from './streams/StreamsShow';
import Header from './Header';

class App extends React.Component{

    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                   <Header/>
                   <Switch>
                    <Route path="/" exact component={StreamsList} />
                    <Route path="/streams/new" exact component={StreamsCreate}/>
                    <Route path="/streams/edit/:id" exact component={StreamsEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamsDelete}/>
                    <Route path="/streams/show/:id" exact component={StreamsShow}/>
                   </Switch>
                </Router>
            </div>
        );
    }

}

export default App;