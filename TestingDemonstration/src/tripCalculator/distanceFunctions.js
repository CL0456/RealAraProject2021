function findFurthestApart() {
	// A function to find which towns are teh furthest apart
	// declarations
	let startTown
	let endTown
	let maxDistance = 0
	// Loop through the array to find the maximum
	for (let i=0;i<townList.length;i++) {
		for (let j=0;j<townList.length;j++) {
			if (distancesBetweenTowns[i][j] > maxDistance) {
				startTown = i
				endTown = j
				maxDistance = distancesBetweenTowns[i][j]
				console.log(maxDistance)
			}
		}
	}
	// Create the array to finish
	let returnArray=[-1,-1,-1]
	returnArray[0] = startTown
	returnArray[1] = endTown
	returnArray[2] = maxDistance
	return returnArray
}

function findRemotest() {
	// A function to find the remotest town
	// defined as teh one with the largest total distances
	
	// It doesn't work! - used to demo in Jasmine
	let totalDistance = 0
	let furthestDistance = 0
	let remotestTown = -1
	for (let i=0;i<townList.length;i++) {
		for (let j=0;j<townList.length;j++) {
			// Find teh total distance
			totalDistance = totalDistance + distancesBetweenTowns[i][j]
		}
		if (totalDistance > furthestDistance) {
			// if it's the remotest, set the values
			remotestTown = i
			furthestDistance = totalDistance
		}
	}
	// Create the array to finish
	let returnArray=[-1,-1]
	returnArray[0] = remotestTown
	returnArray[1] = furthestDistance
	return returnArray
}