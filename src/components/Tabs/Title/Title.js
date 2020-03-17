import React from 'react'
import "./Title.css";
const Title = props => (
  <div >
    <h1 className="titleHeader">React Movies App</h1><br />
    {console.log(props.movies+"TITLE")}
  </div>
)

export default Title

