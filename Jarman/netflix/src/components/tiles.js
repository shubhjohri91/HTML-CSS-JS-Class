import React, { Component } from 'react'
import './style.css'

class Tile extends Component {
  render() {
    const {
      img = '', 
      title = '', 
      addToRec, 
      removeFromRec, 
      add = false, 
      remove = false 
    } = this.props
    return (
      <div className='tile'>
        <img alt="img" src={img}/>
        <p>{title}</p>
        {add && (<button onClick={addToRec}> Add </button>)}
        {remove && (<button onClick={removeFromRec}> Remove </button>)}
      </div>
    )
  }
}

export default Tile