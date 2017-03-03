import {camelize} from './string';

test('to camelize a text with space', () => {
	const input = 'hello world';
	const result = camelize(input);
	const expected = 'Hello World';

	expect(result).toEqual(expected);
})