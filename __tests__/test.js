
import { Tamagotchi } from '../src/Tamagotchi.js';


describe('test', () => {

	beforeEach(() => {
		let tamagotchi = new Tamagotchi("Austin");

	});

	test('should correctly create a Tamagotchi object', () => {

		let expected = "Austin";
		expect(tamagotchi.name).toEqual(expected);
	});

});
