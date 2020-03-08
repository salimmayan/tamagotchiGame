import { Tamagotchi } from '../src/Tamagotchi.js';
import { JestEnvironment } from '@jest/environment';


describe('test', () => {

	jest.useFakeTimers();
	beforeEach(() => {
		//tamagotchi = new Tamagotchi("Austin");

	});

	afterEach(() => {
		//tamagotchi = new Tamagotchi("Austin");
		jest.clearAllTimers();

	});

	test('should correctly create a Tamagotchi object- add property -name', () => {

		let expected = "Austin";
		let tamagotchi = new Tamagotchi("Austin");
		expect(tamagotchi.name).toEqual("Austin");
	});

	test('should correctly create a Tamagotchi object - add property -foodlevel', () => {

		let expected = "Austin";
		let tamagotchi = new Tamagotchi("Austin");
		
		//tamagotchi.consumeFood();
		jest.advanceTimersByTime(9001);
		expect(tamagotchi.foodLevel).toEqual(21);
	});


});
