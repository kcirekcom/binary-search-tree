function Tree(val) {
  this.val = val;
  this.children = [];
}

var root = new Tree('A');

root.children.push(new Tree('B'), new Tree('C'));

var d = new Tree('D');

root.children[0].children.push(d);

////////////////////////////////////

function OtherTree(val, kids) {
  this.val = val;
  this.children = kids;
}

let a = new OtherTree('A', [new OtherTree('B', [new OtherTree('D')]), new OtherTree('C')]);

console.log(a);
