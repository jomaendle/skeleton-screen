const express = require('express');
const sendDelayed = require('../mockServerUtils').sendDeleyed;
const sendVersionConflictError = require('../mockServerUtils').sendVersionConflictError;
const sendNotFoundError = require('../mockServerUtils').sendNotFoundError;
const generateUUID = require('../mockServerUtils').generateUUID;

const router = express.Router({});

const studiosData = require('./mockStudios.json');
const heroesData = require('./mockHeroes.json');

function findHero(id) {
  return heroesData.heroes.find((hero) => hero.id === id);
}

/*const dcHeroes = [
  'Batman', 'Superman', 'Catwoman', 'Bane', 'Wonder Woman', 'Green Lantern', 'The Flash', 'Aquaman', 'Cyborg', 'Batwoman',
  'Constantine', 'Joker', 'Penguin'
];
const marvelHeroes = [
  'Captain America', 'Iron Man', 'Hulk', 'Doctor Strange', 'Thor', 'Captain Marvel', 'Black Panther', 'Spider-Man', 'Wolverine',
  'Daredevil', 'Deadpool', 'Black Cat', 'Blade', 'Wasp', 'Ant-Man', 'Jessica Jones'
];*/

/*
 Studios
*/
router.get('/studios', (req, res) => {
  console.info('Request for ' + req.originalUrl + ', Query params: ', req.query);
  sendDelayed(res, studiosData);
});

/*
 Heroes
*/
router.get('/heroes', (req, res) => {
  console.info('Request for ' + req.originalUrl + ', Query params: ', req.query);
  const studioId = req.query.filter;
  if (studioId === 'all') {
    sendDelayed(res, heroesData);
  } else {
    const filteredHeroes = heroesData.heroes.filter((hero) => hero.studioId === studioId);
    console.info('Send ' + filteredHeroes.length + ' heroes for Studio ID: ' + studioId);
    sendDelayed(res, {heroes: filteredHeroes});
  }
});

router.get('/heroes/:id', (req, res) => {
  console.info('Request for ' + req.originalUrl + ', Query params: ', req.query);
  const hero = findHero(req.params.id);
  if (hero) {
    sendDelayed(res, hero);
  } else {
    res.status(404).send('Hero with ID ' + req.params.id + ' not found');
  }
});

router.patch('/heroes', function(req, res) {
  console.info('PATCH Request for ' + req.originalUrl + ', Query params: ', req.query);
  const existingHero = findHero(req.body.heroes[0].id);
  const forceOverwrite = req.query.forceOverwrite;
  console.info('forceOverwrite: ', forceOverwrite);
  if (existingHero) {
    const heroIndex = heroesData.heroes.indexOf(existingHero);
    const changedHero = req.body.heroes[0];
    if (!forceOverwrite && existingHero.version !== changedHero.version) {
      sendVersionConflictError(
        res, `The hero ${changedHero.name}, [${changedHero.id}], has been changed by another user and cannot be saved.`);
    } else {
      changedHero.version++;
      const updatedHero = Object.assign({}, existingHero, changedHero);
      heroesData.heroes.splice(heroIndex, 1, updatedHero);
      sendDelayed(res, {heroes: [updatedHero]});
    }
  } else {
    sendNotFoundError(res, 'Hero with ID ' + req.params.id + ' not found');
  }
});

router.post('/heroes', function(req, res) {
  const newHero = req.body;
  newHero.id = generateUUID();
  newHero.version = 0;
  newHero.active = typeof newHero.active !== 'undefined' ? newHero.active : true;
  heroesData.heroes.push(newHero);
  sendDelayed(res, newHero);
});

router.delete('/heroes/:ids', function(req, res) {
  const idsToDelete = req.params.ids.split(',');
  let hasNotFound = false;
  idsToDelete.forEach((id) => {
    const existingHero = findHero(id);
    if (existingHero) {
      const heroIndex = heroesData.heroes.indexOf(existingHero);
      heroesData.heroes.splice(heroIndex, 1);
    } else {
      hasNotFound = true;
    }
  });

  if (hasNotFound) {

  }
});

module.exports = router;
