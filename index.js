const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const sortedRobots = robots.map(function(robot){
  if (knownDecepticons.includes(robot.name)) {
    const decepticons = Object.assign({}, robot, {
      alliance: 'decepticon'}
    );
    return decepticons;
  }
  else {
    const autobots = Object.assign({}, robot,
      {alliance: 'autobot'});
    return autobots;
  };
})

console.log(sortedRobots)

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

// measuring against index
// placing stripe color (either black or white) depending on index being odd or even

// stripe index even = black
// stripe index white = odd
// callback we pass to .map() will take more than one parameter => .map(param1, param2)
const coloredZebraStripes = zebraStripes.map(function(stripe, index){
  if (index % 2 === 0) {
    return Object.assign({}, stripe, {color: "black"});
  }
  else {
    return Object.assign({}, stripe, {color: 'white'});
  }
});

console.log(coloredZebraStripes);
