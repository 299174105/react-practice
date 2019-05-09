import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onFlagChanged = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        选择语言:
        <i onClick={() => this.onFlagChanged("中文")} className="flag cn" />
        <i onClick={() => this.onFlagChanged("english")} className="flag us" />
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
