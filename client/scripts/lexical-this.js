var evens = [2, 4, 6, 8],
  fives = [];

// Expression bodies
var odds = evens.map(v => v + 1);
// var odds = evens.map(function (v) {
//   return v + 1;
// });

var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

function getBob() {
  return bob;
}

// export default getBob;
export default function () { return bob };
export {odds, nums, getBob, bob};
export {odds as od, nums as numbers}
