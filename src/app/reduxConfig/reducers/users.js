import { FETCH_USERS_REQUEST } from '../constants/constants';

const initialState = {
	isFecthing: false,
	error: '',
	users: []
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FETCH_USERS_REQUEST:
			//fake users
			let usersList = [
				{ "name": "user 1", "lastName": "last name user1" },
				{ "name": "user 2", "lastName": "last name user2" }
			];
			//update the state
			return Object.assign({}, state, { users: usersList })

		default:
			return state
	}

}

export default usersReducer;
