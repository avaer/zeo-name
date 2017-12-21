const murmur = require('murmurhash');

const adjectives = require('./adjectives.json');
const animals = require('./animals.json');

const _capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

module.exports = (s = String(Math.random())) => {
  const adjective = adjectives[Math.floor(murmur(s + ':adjective') / 0xFFFFFFFF  * adjectives.length)];
  const animal = animals[Math.floor(murmur(s + ':adjective') / 0xFFFFFFFF * animals.length)];
  return _capitalize(adjective) + ' ' + _capitalize(animal);
};
