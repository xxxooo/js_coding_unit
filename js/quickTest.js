var testCaseInstruction =
`將一個數字每個位數相加，直到剩個位數為止。
範例：
num = 38，則 3+8 = 11，1+1 = 2, 2是個為數，回傳2。`

var testCaseInitCode = 
`//
function addDigits(num) {
  // write your code here
}`

var testCaseUnit = function () {
	QUnit.module( "Add Digits" );

	QUnit.test( "a basic test example", function( assert ) {;
	  let testCase = [0, 1, 28, 131, 2345, 202000369]
	  let testAnswers = [0, 1, 1, 5, 5, 4]
		testCase.forEach((num, idx) => {
			assert.equal( addDigits(num), testAnswers[idx], "OK" );
		})
	});
}
