const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
	balance: leoBalance,
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f', //Changed it into a string
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		'postal-code': leoPostal //made postal-code a string as - is not allowed
	}
}

const sarah = {  //added the = to assign everything in the {} to the const of sarah
	name : sarahName + sarahSurname, /*An '=' can only follow a property name when the containing object literal is part of a destructuring pattern.*/
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',  //fixed accessId and I made it a string
	balance: sarahBalance,
	address : { //added : instead of = as this is not a property name it is an object of sarah property
		number: sarahNumber,
		street: sarahStreet,
		'postal-code': sarahPostal //made postal-code a string
	}
}
console.log(leo, leo.address['postal-code']) //used [] for the postal-code string to call object value
console.log(sarah, sarah.address['postal-code'])





