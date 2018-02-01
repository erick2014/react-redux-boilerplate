import { FETCH_USERS_REQUEST } from '../constants/constants';

const fetchUsers = () => {
	return {
		type: FETCH_USERS_REQUEST
	}
}

const userActions = {
	fetchUsers
}

export default userActions;
