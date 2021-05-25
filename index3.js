function Person(name, age, stomach = []) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;
  this.eat = function (...food) {
    let u1Eat = this.name + " eat " + food;
    if (stomach.length < 10) {
      this.stomach.push(u1Eat);
    }
    if (stomach.length === 9) {
      this.stomach.push("AAAAAA I will go to poop");
    }
  };
  this.poop = function () {
    this.stomach.splice(0, stomach.length);
    let good = "OOO Im goooooood";
    this.stomach.push(good);
  };
  this.toString = function () {
    let user = [];
    user.push(this.name, this.age);
    return user.join(",");
  };
}

const p1 = new Person("Jhon", 22);
const p2 = new Person("Willian", 24);
console.log(p1);
console.log(p2);
p1.eat("Hamburger");
p1.eat("Free");
p1.eat("Fruits");
p1.eat("Meet");
p1.eat("Stake");
p1.eat("Cheez");
p1.eat("Chiken");
p1.eat("Nutella");
p1.eat("Mars");
p2.eat("Pizza");
p2.eat("Free");
p2.eat("Free");
p2.eat("Fruits");
p2.eat("Meet");
p2.eat("Stake");
p2.eat("Cheez");
p2.eat("Chiken");
p2.eat("Nutella");
p2.eat("Mars");
p1.poop();
p2.poop();

console.log(p1.toString());
console.log(p2.toString());
