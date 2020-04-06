import React from "react";

class HelloWorld extends React {
  constructor(props) {
    console.log("props in constructor", props);
    super(props);
    this.state = { who: "world" };
  }

  handleButtonClick = (word) => {
    //this.state.who = word;
    console.log(word);
    this.setState({
      who: word,
    });
  };

  render() {
    return (
      <div className="HelloWorld">
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.handleButtonClick("World")}>World</button>
        <button onClick={() => this.handleButtonClick("Friend")}>Friend</button>
        <button onClick={() => this.handleButtonClick("React")}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
