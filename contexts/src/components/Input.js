import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Input extends React.Component {
  renderLabel = value => {
    return value === "english" ? "Name" : "姓名";
  };

  render() {
    return (
      <div className="field">
        <label className="label">
          <LanguageContext.Consumer>
            {value => this.renderLabel(value)}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Input;
