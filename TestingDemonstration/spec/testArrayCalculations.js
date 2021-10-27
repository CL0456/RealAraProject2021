// the test below passes as teh function is correct
describe("Find furthest apart correct", function() {
	// Emulate teh data loading
	beforeEach(function() {
		// reload teh data before each test
		loadDataManually()
	})
	
	it("should find teh furthest apart given teh actual data", function() {
		// run a function with the "proper" data
		furthestApart = findFurthestApart()
		expect(furthestApart[0]).toEqual(3)
		expect(furthestApart[1]).toEqual(14)
		expect(furthestApart[2]).toEqual(1232)
	})
	
	it("should find teh furthest apart for modified data", function() {
		// run a function with modified data fro boundary conditions
		distancesBetweenTowns[0][1] = 9999
		furthestApart = findFurthestApart()
		expect(furthestApart[0]).toEqual(0)
		expect(furthestApart[1]).toEqual(1)
		expect(furthestApart[2]).toEqual(9999)
		
		distancesBetweenTowns[25][24] = 99999
		furthestApart = findFurthestApart()
		expect(furthestApart[0]).toEqual(25)
		expect(furthestApart[1]).toEqual(24)
		expect(furthestApart[2]).toEqual(99999)
	})	
})

// the test below fails as teh function is incorrect
describe("Find remotest correct", function() {
	// Emulate teh data loading
	beforeEach(function() {
		// Load some dummy data
		townList = ["A","B","C","D"]
		distancesBetweenTowns=[
		[0,1,3,5],
		[1,0,8,4],
		[3,8,0,1],
		[5,4,1,0]
		];
	})
	
	it("should find teh remotest when it is in teh middle", function() {
		remotest = findRemotest()
		expect(remotest[0]).toEqual(1)
		expect(remotest[1]).toEqual(13)
	})
	
	it("should find teh remotest when it is the first", function() {
		distancesBetweenTowns[0][3] = 999
		remotest = findRemotest()
		expect(remotest[0]).toEqual(0)
		expect(remotest[1]).toEqual(1003)
	})
	
	it("should find teh remotest when it is the last", function() {
		distancesBetweenTowns[3][0] = 999
		remotest = findRemotest()
		expect(remotest[0]).toEqual(3)
		expect(remotest[1]).toEqual(1004)
	})
})