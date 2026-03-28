const twoSum = require("./solution");

describe("Two Sum", () => {

    test("Example 1", () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
    });

    test("Example 2", () => {
        expect(twoSum([3,2,4], 6)).toEqual([1,2]);
    });

});