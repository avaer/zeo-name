const adjectives = require('./adjectives.json');
const animals = require('./animals.json');

const _capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

module.exports = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return _capitalize(adjective) + ' ' + _capitalize(animal);
};
