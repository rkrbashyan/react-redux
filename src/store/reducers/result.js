import * as actionTypes from '../actions/actionsTypes';

const initialState = {
	results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: [...state.results, action.payload]
			};
		case actionTypes.DELETE_RESULT:
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
