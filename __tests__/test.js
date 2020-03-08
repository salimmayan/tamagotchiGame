import { Tamagotchi } from '../src/Tamagotchi.js';


describe('test', () => {

	beforeEach(() => {
		//tamagotchi = new Tamagotchi("Austin");

	});

	test('should correctly create a Tamagotchi object', () => {

		let expected = "Austin";
		let tamagotchi = new Tamagotchi("Austin");
		expect(tamagotchi.name).toEqual("Austin");
	});

});
