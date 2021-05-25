function Person(name, age) {
  this.name = name;
  this.age = age;
  this.compareAge = function (nextUser) {
    if (this.age > nextUser.age) {
      return nextUser.name + " is younger than me";
    } else if (this.age === nextUser.age) {
      return nextUser.name + " is the same age as me.";
    } else {
      return nextUser.name + " is older than me";
    }
  };
}
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
console.log(p1.compareAge(p2));
console.log(p1.compareAge(p3));
console.log(p2.compareAge(p1));
console.log(p2.compareAge(p3));
console.log(p3.compareAge(p1));
console.log(p3.compareAge(p2));
