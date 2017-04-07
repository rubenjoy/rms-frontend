import {
	createDeleteFetch,
	createErrorCreator,
	createFetch,
	createGetFetch,
	fixUrlId,
	HTTP_PATCH_METHOD,
	HTTP_POST_METHOD
} from '../commons';

export const DELETE_GRADE_ASYNC = 'DELETE_GRADE_ASYNC';
export const DELETE_GRADE_SUCCESS ='DELETE_GRADE_SUCCESS';
export const DELETE_GRADE_FAIL = 'DELETE_GRADE_FAIL';

export const GET_GRADES = 'GET_GRADES';
export const GET_GRADES_SUCCESS = 'GET_GRADES_SUCCESS';
export const GET_GRADES_FAIL = 'GET_GRADES_FAIL';

export const PATCH_GRADE = 'PATCH_GRADE';
export const PATCH_GRADE_SUCCESS = 'PATCH_GRADE_SUCCESS';
export const PATCH_GRADE_FAIL = 'PATCH_GRADE_FAIL';

export const POST_GRADE = 'POST_GRADE';
export const POST_GRADE_SUCCESS = 'POST_GRADE_SUCCESS';
export const POST_GRADE_FAIL = 'POST_GRADE_FAIL';

const NESTED_URL = '/grades';

const requestCreate = () => ({
	type: POST_GRADE
})

const receiveCreate = grade => ({
	type: POST_GRADE_SUCCESS, ...grade,
	employeeId: grade.id
})

const requestDelete = () => ({
	type: DELETE_GRADE_ASYNC
})

const receiveDelete = (id) => ({
	type: DELETE_GRADE_SUCCESS, id
})

const requestGrades = () => ({
	type: GET_GRADES
})

const receiveGrades = (grades) => ({
	type: GET_GRADES_SUCCESS, grades
})

const requestUpdate = () => ({
	type: PATCH_GRADE
})

const receiveUpdate = (grade) => ({
	type: PATCH_GRADE_SUCCESS, ...grade,
	employeeId: grade.id
})

/**
 *  @apram gradeId url id
 **/
export const deleteGrade = (gradeId) => (dispatch) => {
	dispatch(requestDelete());
	const onSuccess = () => dispatch(receiveDelete(gradeId));
	const onError = error => {
		dispatch(createErrorCreator(DELETE_GRADE_FAIL)(error))
	}
	return createDeleteFetch(gradeId, onSuccess, onError);
}

/**
 *  @param employeeId url id
 **/
export const getGrades = (employeeId) => (dispatch) => {
	const url = employeeId + NESTED_URL;
	dispatch(requestGrades());
	const onSuccess = json => dispatch(receiveGrades(json));
	const onError = error => dispatch(
		createErrorCreator(GET_GRADES_FAIL)(error)
	);
	return createGetFetch(url, onSuccess, onError, {});
}

/**
 *  @param grade object to be PATCHed
 **/
export const patchGrade = (grade) => (dispatch) => {
	const url = grade.id;
	const employeeId = url.replace(/\/grades\/\d+/, '');
	grade.id = 0;
	dispatch(requestUpdate());
	const onSuccess = json => {
		dispatch(receiveUpdate(fixUrlId(json, employeeId, NESTED_URL)))
	}
	const onError = error => {
		dispatch(createErrorCreator(PATCH_GRADE_FAIL)(error))
	}
	return createFetch(url, HTTP_PATCH_METHOD,
		onSuccess, onError, grade);
}

/**
 *  @param employeeId url id
 *  @param grade object to be POSTed
 **/
export const postGrade = (employeeId, grade) => (dispatch) => {
	const url = employeeId + NESTED_URL;
	dispatch(requestCreate());
	const onSuccess = json => dispatch(
		receiveCreate(fixUrlId(json, employeeId, NESTED_URL))
	);
	const onError = error => dispatch(
		createErrorCreator(POST_GRADE_FAIL)(error)
	);
	return createFetch(url, HTTP_POST_METHOD,
		onSuccess, onError, grade);
}