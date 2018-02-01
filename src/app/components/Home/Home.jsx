import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//redux stuff
import { connect } from 'react-redux';
import userActions from 'reduxConfig/actions/users';
//images
import cat from 'images/cat.jpg';
import dog from 'images/dog.png';
import dogs from 'images/dogs.gif';

class Home extends Component {

	componentDidMount() {
		//dispatch action to fetch users
		this.props.fetchUsers();
	}

	render() {
		console.log("Home props ", this.props);
		return (
			<div className="container">
				<div className="image-wrapper">
					<img src={cat} className="image-wrapper__image" />
				</div>
				<div className="image-wrapper">
					<img src={dog} className="image-wrapper__image" />
				</div>
				<div className="image-wrapper">
					<img src={dogs} className="image-wrapper__image" />
				</div>

				<h1>Hello from my React Component!</h1>
			</div>
		)

	}
}
//bind component to the store
export default connect(
	//map props
	state => ({
		users: state.users
	}),
	//map actions
	{
		fetchUsers: userActions.fetchUsers
	}
)(Home)


//export default Home;