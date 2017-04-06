import delay, {delayWithPromise} from './delay';
import Promise from 'es6-promise';

test('delay with promise', () => {
	return delayWithPromise()('Hello')
		.then(
			value => expect(value).toEqual('Hello'),
			error => expect(error).not.toBeDefined()
		)
})

test('vanilla delay', () => {
	return new Promise((resolve) => {
		delay(() => {resolve('Hello')})
	}).then(
		value => expect(value).toEqual('Hello'),
		error => expect(error).not.toBeDefined()
	)
})

test('not function, vanilla delay should throw Error', () => {
	return new Promise(() => {
		delay('Hello')
	}).catch(
		error => expect(error.message)
			.toEqual('func is not a function.')
	)
})