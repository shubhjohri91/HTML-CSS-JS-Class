import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [{
      name: 'John',
      age: 30
    }, {
      name: 'Matt',
      age: 31
    }, {
      name: 'Mark',
      age: 32
    }]
  }

  addItem = () => {
    const { users } = this.state //destructring
    const tempUsers = Object.assign([], users)
    const adding = {
      name: 'jane',
      age: 23
    }
    tempUsers.push(adding)
    this.setState({ users: tempUsers })
  }

  removeItem = () => {
    const { users } = this.state //destructring
    const tempUsers = Object.assign([], users)
    tempUsers.pop()
    this.setState({ users: tempUsers })
  }

  render() {
    const { users } = this.state
    return (
      <div className="App">
        <table>
          <tr>
            <th>Name</th>
            <th>age</th>
          </tr>
          {
            users.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              )
            })
          }
        </table>
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.removeItem}>Remove</button>
      </div>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <SayHello />
//     </div>);
// }

// class App extends Component {

//   state = {
//     color: blue,
//     backgroundColor: blue
//   }

//   handleClick = () => {
//     this.setState({ display: true })
//   }

//   render() {
//     return (
//       <div className="App" >
//         <button onClick={this.handleClick}>Click Me</button>
//         {/* {
//           if(this.state.display) {
//             return ( <SayHello str={this.state.name} />)
//           }
//         } */}
//         {this.state.display && (<SayHello str={this.state.name} />)}
//       </div>
//     )
//   }
// }



// export default App;