function Person(name, age, stomach = []) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;
  this.eat = function (...food) {
    let u1Eat = name + " eat " + food;
    if (stomach.length < 10) {
      stomach.push(u1Eat);
    }
    if (stomach.length === 9) {
      stomach.push("AAAAAA I will go to poop");
    }
  };
  this.poop = function () {
    stomach.splice(0, stomach.length);
    let good = "OOO Im goooooood";
    stomach.push(good);
  };
  this.toString = function () {
    let user = [];
    user.push(name, age);
    return user.join(",");
  };
}

function Baby(name, age, favoriteToys = []) {
  Person.call(this, name, age);
  this.favoriteToys = favoriteToys;
  this.play = function (...toy) {
    let bplay = name + " Play with " + toy;
    favoriteToys.push(bplay);
  };
}

Baby.prototype = Person.prototype;
const b1 = new Baby("Leo", 1);

console.log(b1);
b1.eat("Milk");
b1.play("Car");

console.log(b1.toString());
