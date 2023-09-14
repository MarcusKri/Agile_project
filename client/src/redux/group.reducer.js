import { groupReducerActions } from "/src/app.const";

const initialGroupReducerState = {
	studyGroups: [],
};

export function groupReducer(state = initialGroupReducerState, action) {
	const { type, payload } = action;
	switch (type) {
		case groupReducerActions.SET_GROUPS:
			return {
				...state,
				studyGroups: payload,
			};
		default:
			return state;
	}
}
