const ADD_STUDENT = "ADD_STUDENT";

export function Add_Student(student) {
    return {
        type: ADD_STUDENT,
        payload: student
    }
};

export const DELETE_STUDENT = "DELETE_STUDENT";

export function Delete_Student (index) {
    return {
        type: DELETE_STUDENT,
        payload: index
    }
}