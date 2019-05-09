import React from 'react';

class SearchBar extends React.Component{
    state = {term:''};


    onSearchSubmit = event=>{

        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };
    render() {
        return (<div className="ui segment">
            <form className="ui form" onSubmit={this.onSearchSubmit}>
                <div className="field">
                    <label> 视频搜索</label>
                    <input
                    type="text"
                    value={this.state.term}
                    onChange={e => this.setState({term:e.target.value})}
                    />
                </div>
            </form>

        </div>);
    }

}

export default SearchBar;