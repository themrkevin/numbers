/**
 *	Helper function to validate that
 *	we have a number
 **/
function nValid(n) {
	if(!isNaN(parseFloat(n)) && isFinite(n)) {
		// console.log(n + ' is a number.');
		return true;
	} else {
		// console.log(n + ' ...no no no, not in my house!');
		return false;
	}
}
/**
 * Making the Fibonacci Sequence
 **/
function fibonacci(n) {
	// set a default limit
	if(!n) var n = 0;
	//start with 0 and 1
	var a = 0,
		b = 1,
		x = a + b;
	// console.log(a + ' + ' + b + ' =',  x);
	// start the sequence with a loop
	for(a;x<n;) {
		a = b;
		b = x;
		x = a + b;
		// console.log(a + ' + ' + b + ' =', x);
	}
	return x;
}
/**
 *	Checks to see if our number
 *	is part of the Fibonacci Sequence
 **/
function isFibonacci(n) {
	// '==' because in this case we don't want to be so strict
	if(fibonacci(n) == n) {
		// console.log(n + ' is part of the Fibonacci Sequence');
		return true;
	} else {
		// console.log(n + ' is NOT part of the Fibonacci Sequence');
		return false;
	}
}
/**
 *	Run all tests
 **/
function willItBlend(n) {
	var result;
	if(nValid(n)) {
		result = 'the number ' + n + '... ';
	} else {
		result = 'that is NOT a number';
		return result;
	}
	if(isFibonacci(n)) {
		result += '<br /> is part of the Fibonacci Sequence';
	} else {
		result += '<br /> is NOT part of the Fibonacci Sequence';
	}
	return result;
}




