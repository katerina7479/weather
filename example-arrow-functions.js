var names = ['Kat', 'Andrea', 'Klaudia'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrow', name);
});

names.forEach((name) => console.log('short', name));

var returnMe = (name) => name + '!';

console.log(returnMe('Katerina'));

// Arrow function take on their parent's 'this' binding while
// anonymous functions don't! (have to hoist)

var person = {
  name: 'Katerina',
  greet: function () {
    var that = this;
    names.forEach(function (name) {
      console.log(that.name + ' says hi to ' + name)
    });
  }
};

person.greet();

var person = {
  name: 'Katerina',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();

// Challenge

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b
}

var addOneLine = (a, b) => a + b;
console.log(add(1, 3));
console.log(add(9, 90));

console.log(addStatement(1, 3));
console.log(addStatement(9, 90));

console.log(addOneLine(1, 3));
console.log(addOneLine(9, 90));
