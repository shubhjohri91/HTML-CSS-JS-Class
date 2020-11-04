import React, {Component} from 'react'
import './App.css';

class App extends Component {
  state = {
    selectValue: ''
  }

  changeToBlue = () => {
    this.setState({ selectValue: 'blue' })
  }

  changeToRed = () => {
    this.setState({ selectValue: 'red' })
  }

  render() {
    const { selectValue } = this.state

    let divClass = 'red'

    if (selectValue === 'blue') {
      divClass = 'blue'
    }

    return (
      <div className={divClass} >
        <p>Name: Jarman</p>
        <p>Age: 25</p>
        <button className='blue-button' onClick={this.changeToBlue}>Blue Theme</button>
        <button className='red-button' onClick={this.changeToRed}>Red Theme</button>
      </div>
    )
  }
}

export default App;
