import React, { Component } from 'react'
// redux stuff
import { connect } from 'react-redux'
import userActions from 'reduxConfig/actions/users'
// images
import cat from 'images/cat.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [
        { 'key': 1, 'type': cat },
        { 'key': 2, 'type': 'dog' },
        { 'key': 3, 'type': 'dogs' }
      ]
    }
  }

  componentDidMount() {
    // dispatch action to fetch users
    this.props.fetchUsers()
  }

  buildAnimalCard = () => {
    const cards = this.state.animals.map((animal, index) => {
      return (
        <div key={index} className='image-wrapper'>
          <img src={animal.type} className='image-wrapper__image' />
        </div>
      )
    })
    return cards
  }

  render() {
    console.log('we get users? ', this.props.users)
    const cardsComponents = this.buildAnimalCard()
    return (
      <div className='container'>
        {cardsComponents}
        <h1>Hello from my React Component!</h1>
      </div>
    )
  }
}
// bind component to the store
export default connect(
  // map props
  state => ({
    users: state.users
  }),
  // map actions
  {
    fetchUsers: userActions.fetchUsers
  }
)(Home)
