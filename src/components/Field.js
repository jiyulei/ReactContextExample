import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  
  renderName = (language) => {
    return language === "english" ? "Name" : "名字";
  };

  render() {
    return (
      <div>
        <label>{this.renderName(this.context.language)}</label>
        <input />
      </div>
    );
  }
}

export default Field;
