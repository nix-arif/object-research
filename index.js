const user = {
	name: 'Some Name',
	email: 'someemail@gmail.com',
};

console.log(user);

const User = function (name, email) {
	this.name = name;
	this.email = email;
};

const someName = new User('someName', 'someEmail@gmail.com');
console.log(someName);

const jsonObject = JSON.stringify(someName);
console.log(jsonObject);

// Array

const someArray = [
	new User('name1', 'name1@gmail.com'),
	new User('name2', 'name2@gmail.com'),
	new User('name3', 'name3@gmail.com'),
];

const checkInstance = someArray[0] instanceof User;
console.log('Check instance of:', checkInstance);

// JSON.stringify will truncate the Object Name which is User
const jsonObject2 = JSON.stringify(someArray);
console.log(jsonObject2);
const parseObject2 = JSON.parse(jsonObject2);
console.log('JSONOBJECT2:', parseObject2[0] instanceof User);

// View the Object Entries
console.log('ObjectEntries', Object.entries(someArray));
