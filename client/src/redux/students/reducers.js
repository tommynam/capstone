import { ADD_STUDENT, DELETE_STUDENT } from "./actions";

const initialState = {
        students: ["tommy","candice","jim"]
};

export function studentReducer(state = initialState, action) {
    switch(action.type){
        case ADD_STUDENT:
            return {
                students: state.studentStore.students.concat([action.payload])
            };
        case DELETE_STUDENT:
            return {
                students: state.studentStore.students.filter(
                    (student, index) => index !== action.payload
                )
            };
        default:
            return {
                students: state
            }
    }
}