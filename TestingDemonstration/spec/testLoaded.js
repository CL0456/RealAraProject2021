describe("Data Loaded Correctly", function() {
	// Emulate teh data loading
	beforeEach(function() {
		// reload teh data before each test
		loadDataManually()
	})
	
	// A test - copy the template
	it("should load all teh towns correctly", function() {
		expect(townList.length).toEqual(26)	// All the towns loaded
		// test at boundaries and in teh middle
		expect(townList[0]).toEqual("Alexandra")
		expect(townList[4]).toEqual("Cromwell")
		expect(townList[25]).toEqual("Westport")
	})
	
	it("should load all teh distances correctly", function() {
		expect(distancesBetweenTowns.length).toEqual(26)
		expect(distancesBetweenTowns[0][0]).toEqual(0)
		expect(distancesBetweenTowns[4][3]).toEqual(939)
		expect(distancesBetweenTowns[25][0]).toEqual(761)
		expect(distancesBetweenTowns[25][25]).toEqual(0)
	})
	
})