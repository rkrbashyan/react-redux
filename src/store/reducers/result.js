import * as ACTIONS from '../actions/actions';

const initialState = {
	results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.STORE_RESULT:
			return {
				...state,
				results: [...state.results, action.payload]
			};
		case ACTIONS.DELETE_RESULT:
			return {
				...state,
				results: [...state.results].filter(
					(_, index) => index !== action.payload
				)
			};
		default:
			return state;
	}
};

export default reducer;
