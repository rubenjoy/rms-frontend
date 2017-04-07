import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
	DELETE_GRADE_ASYNC,
	DELETE_GRADE_SUCCESS,
	deleteGrade,
	GET_GRADES,
	GET_GRADES_SUCCESS,
	getGrades,
	PATCH_GRADE,
	PATCH_GRADE_SUCCESS,
	patchGrade,
	POST_GRADE,
	POST_GRADE_SUCCESS,
	postGrade
} from './actions';

const mockStore = configureMockStore([thunk]);
const mockReducer = () => (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
}

describe('async action creator for grade', () => {

	afterEach(() => {
		nock.cleanAll();
	})

	test('it should GET grades', () => {
		const response = [{
			grade: 'SE-PG',
			devStage: 5,
			startDate: '2016-01-04',
			endDate: '2017-01-04',
			activeInd: false,
			id: '/employees/50/grades/50'
		}]
		nock('http://localhost:8080')
			.get('/rms/api/employees/50/grades')
			.reply(200, response);
		const store = mockStore(mockReducer());
		const expected = [
			{type: GET_GRADES},
			{
				type: GET_GRADES_SUCCESS,
				grades: response
			}
		]

		return store.dispatch(getGrades('/employees/50'))
			.then(() => {
				expect(store.getActions())
					.toEqual(expected);
			})
	})

	test('it should POST grade', () => {
		const response = {
			id: '50',
			startDate: '2016-01-04',
			activeInd: true
		}
		nock('http://localhost:8080')
			.post('/rms/api/employees/50/grades')
			.reply(200, response);
		const store = mockStore(mockReducer())
		const expected = [
			{type: POST_GRADE},
			{
				type: POST_GRADE_SUCCESS,
				id: '/employees/50/grades/50',
				startDate: '2016-01-04',
				activeInd: true
			}
		]
		const employeeId = '/employees/50'

		return store.dispatch(postGrade(employeeId, {}))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(actions[0]);
				expect(actions[1].type).toEqual(expected[1].type);
				expect(actions[1].id).toEqual(expected[1].id);
				expect(actions[1].startDate).toEqual(expected[1].startDate);
				expect(actions[1].activeInd).toEqual(expected[1].activeInd);
			})
	})


	test('it should PATCH grade', () => {
		const response = {
			id: '50',
			startDate: '2016-01-04',
			activeInd: true
		}
		nock('http://localhost:8080')
			.patch('/rms/api/employees/50/grades/50')
			.reply(200, response);
		const store = mockStore(mockReducer());
		const expected = [
			{type: PATCH_GRADE},
			{
				type: PATCH_GRADE_SUCCESS,
				id: '/employees/50/grades/50',
				startDate: '2016-01-04',
				activeInd: true
			}
		]
		const grade = {
			id: '/employees/50/grades/50',
		}

		return store.dispatch(patchGrade(grade))
			.then(() => {
				const actions = store.getActions();
				expect(actions.length).toEqual(2);
				expect(actions[0]).toEqual(expected[0]);
				expect(actions[1].type).toEqual(expected[1].type);
				expect(actions[1].id).toEqual(expected[1].id);
				expect(actions[1].startDate).toEqual(expected[1].startDate);
				expect(actions[1].activeInd).toEqual(expected[1].activeInd);
			})
	})

	test('it should DELETE grade', () => {
		nock('http://localhost:8080')
			.delete('/rms/api/employees/50/grades/50')
			.reply(204);
		const store = mockStore(mockReducer());
		const id = '/employees/50/grades/50';
		const expected = [
			{type: DELETE_GRADE_ASYNC},
			{type: DELETE_GRADE_SUCCESS, id}
		]

		return store.dispatch(deleteGrade(id))
			.then(() => {
				expect(store.getActions())
					.toEqual(expected);
			})
	})
})