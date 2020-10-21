import React, { Component } from 'react';
import './App.css';


class App extends Component {
    state = {
        answer: "",
        text: ""
    }

    handleClick = () => {
        const { text } = this.state
        const tempArr = []
        for (let i = 0; i < text.length; i++) {
            tempArr.push(text[text.length - i - 1])
        }

        this.setState({ answer: tempArr.join("") })
    }

    changeText = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.changeText} />
                <input type="button" value="Submit" onClick={this.handleClick} />
                <p>Reversed String: {this.state.answer}</p>
            </div>
        )
    }
}

export default App;
