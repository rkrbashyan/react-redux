import * as actionTypes from './actionsTypes';

export const saveResult = (result) => {
	return {
		type: actionTypes.STORE_RESULT,
		payload: result
	};
};

export const deleteResult = (index) => {
	return {
		type: actionTypes.DELETE_RESULT,
		payload: index
	};
};

export const storeResult = (result) => {
	return function(dispatch, getState) {
		setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
			dispatch(saveResult(result));
		}, 2000);
	};
};