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
 *	Divisors of
 **/
function divisorsOf(n) {
	var divisors = [];
	for(i=0;i<=n;i++) {
		if(n%i === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}
/**
 *	Add up all the divisors
 *	requires divisorsOf()
 **/
function sumOfDivisors(n) {
	var divisors = divisorsOf(n),
	l = divisors.length,
	result = 0;

	// calculates the sum of all divisors
	for(i=0;i<l;i++) {
		result += divisors[i];
	}
	return result;
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
 *	Checks to see if our number
 *	is a Prime number
 **/
function isPrime(n) {
	// prime numbers must be greater than 1 and are whole numbers
	if(n <= 1 || n % 1 != 0) return false;
	// we know 2, 3, & 5 are prime numbers
	if(n == 2 || n == 3 || n == 5) return true;
	// even numbers can't be prime (except 2)
	// and at this point if you're divisible by 3 or 5 you're not 3 or 5 so you can't be prime
	if(n%2 == 0 || n%3 == 0 || n%5 == 0) return false;
	// test the left overs (i think this should work)
	for(i=5;i<n;i++) {
		if(n%i == 0) {
			return false;
		} else {
			return true;
		}	
	}
}
/**
 *	List of primes
 **/
function primeList(n) {
	var primes = [];
	var i = 0,
		num;

	for(i;i<n;i++) {
		if(isPrime(i + 1)) {
			primes.push(i + 1);
		}
	}
	return primes;
}
/**
 *	Perfect number
 **/
function isPerfect(n) {
	// positive int
	if(n != Math.abs(n)) return false;
	// is equal to the sum of its positive divisors excluding itself
	if(n != sumOfDivisors(n)-n) return false;
	// is equal to half its positive divisors
	if(n != sumOfDivisors(n)/2) return false;
	return true;
}
/**
 *	Lucky number
 **/
// function isLucky(n) {
// 	// build array
// 	var lucky = [];
// 	var i = 1;
// 	for(i;i<=n;i++) {
// 		lucky.push(i);
// 	}
// 	console.log('Building array:',lucky);
// }
/**
 *	Run all tests
 **/
function willItBlend(n) {
	var result,
		split = '<br /> ';
	if(nValid(n)) {
		result = 'The number ' + n + '... ';
	} else {
		result = 'That is NOT a number. No no no... not in my house!';
		return result;
	}
	if(isFibonacci(n)) {
		result += split + 'is part of the Fibonacci Sequence';
	} else {
		result += split + 'is NOT part of the Fibonacci Sequence';
	}
	if(isPrime(n)) {
		result += split + 'is a Prime number';
	} else {
		result += split + 'is NOT a Prime number';
	}
	if(isPerfect(n)) {
		result += split + 'is a Perfect number';
	} else {
		result += split + 'is NOT a Perfect number';
	}
	return result;
}




