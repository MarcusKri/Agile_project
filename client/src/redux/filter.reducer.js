import { filterReducerActions } from "/src/app.const";

const initialFeatureReducerState = {
	course: "",
	campus: "",
	attendance: "",
	anonymity:"",
};

export function filterReducer(state = initialFeatureReducerState, action) {
	const { type, payload } = action;
	console.log({ previousSate: state, action });
	switch (type) {
		case filterReducerActions.SET_FILTER:
			return {
				...state,
				...payload,
			};
		case filterReducerActions.UPDATE_COURSE: {
			const nextState = { ...state, course: payload };
			console.log({ nextState });
			return nextState;
		}
		case filterReducerActions.UPDATE_CAMPUS: {
			const nextState = { ...state, campus: payload };
			console.log({ nextState });
			return nextState;
		}
		case filterReducerActions.UPDATE_ATTENDANCE: {
			const nextState = { ...state, attendance: payload };
			console.log({ nextState });
			return nextState;
		}
		case filterReducerActions.UPDATE_ANOMINITY: {
			const nextState = { ...state, anonymity: payload };
			console.log({ nextState });
			return nextState;
		}
		default:
			return state;
	}
}
