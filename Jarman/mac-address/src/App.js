import React, {Component} from 'react'
import './App.css'

class App extends Component {
  state = {submit: "",
          validMac: ""}

  clickHandler = () => {
    if (this.isValidMac (this.mac.value)) {
      this.setState({submit: true, validMac: true})
    }
    else {
      this.setState({submit: true, validMac: false})
    }
    this.mac.value = ""

  }

  isHex = (c) => {
    return ( Number.isInteger(parseInt(c)) || (c >= 'A' && c <= 'F' ))
  }

  isValidMac = (address) => {
    if (address[2] !== '-' || address[5] !== '-' || address[8] !== '-' || address[11] !== '-' || address[14] !== '-') {
      return false
    }
    const splitArray = address.split('-')
    for (let hex of splitArray) {
      let hexnum = hex.split("")
      if (!this.isHex(hexnum[0]) && !this.isHex(hexnum[1])) {
        return false
      }
    }
    return true
  }

  render() {
    return (
    <div className="App" >
          Enter MAC Address
        <input
          ref={(address) => this.mac = address}
          type='text'
        />
        <input   
          type='submit' value='Submit'
          onClick={this.clickHandler} />
        {this.state.submit && <p> {this.state.validMac ? 'Mac Address Valid' : 'Mac Address not valid'} </p>}
    </div>
    )
  }
}

export default App;
