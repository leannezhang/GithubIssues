import React, {Component} from 'react'
import IssueList from './IssueList'
import {Pagination} from 'react-bootstrap'

//const handleSelect = (event) => {
//  console.log('handleSelect')
//}

const Home = (props) => {
  const {handleSelect, activePage, items} = props
  return (
    <div>
      <IssueList />
      <Pagination
        prev
        next
        first
        last
        items={items}
        activePage={activePage}
        onSelect={handleSelect} />
    </div>
  )
}

export default class StatefulHome extends Component {
  // ES7
  state =  {
    items: 9,
    activePage: 1
  }
  // ES6
  //constructor() {
  //  super()
  //  this.state = {activePage: 0}
  //}
  handleSelect(eventKey) {
    this.setState({activePage: eventKey})
  }
  //
  //const eee  = {a: 1111, b: 2222}
  //
  //const aaa = {...{a: 1111, b: 2222}, ...{c: 1111, d: 2222}}
  //aaa === {a: 1111, b: 2222, c: 1111, d: 2222}
  render () {
    const props = {...this.state, ...this.props}
    // const newState = Object.assign({}. this.state)
    // const newProp = Object.assign(newState, this.props)
    return (
      <Home {...props} handleSelect={(eventKey) => { this.handleSelect(eventKey)} } />
    )
  }
}
