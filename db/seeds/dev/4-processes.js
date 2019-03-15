
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('processes').del()
    .then(function () {
      // Inserts seed entries
      return knex('processes').insert([
        {
          id: "1", 
          title: "Cash Process Flow", 
          ownerId: "1", 
          process: [
            {
              "type": 'step',
              "name": 'Step 1',
              "data": 'This is the first step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 2',
              "data": 'This is the second step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 2.1',
              "data": 'This is the first thing in the second step'
            },
            {
              "type": 'step',
              "name": 'Step 2.2',
              "data": 'This is the second thing in the second step'
            },
            {
              "type": 'note',
              "name": 'Note',
              "data": 'This is a note'
            },
            {
              "type": 'step',
              "name": 'Step 3',
              "data": 'This is the third step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 4',
              "data": 'This is the fourth step of the process'
            },
            {
              "type": 'tip',
              "name": 'Tip',
              "data": 'This is a really awesome and helpful tip'
            },
          ]
        },
        {
          id: "2", 
          title: "Another Cool Process", 
          ownerId: "2", 
          process: [
            {
              "type": 'step',
              "name": 'Step 1',
              "data": 'This is the first step of the process'
            },
            {
              "type": 'note',
              "name": 'Note',
              "data": 'This is a note'
            },
            {
              "type": 'step',
              "name": 'Step 2',
              "data": 'This is the second step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 2.1',
              "data": 'This is the first thing in the second step'
            },
            {
              "type": 'tip',
              "name": 'Tip',
              "data": 'This is a really awesome and helpful tip'
            },
            {
              "type": 'step',
              "name": 'Step 2.2',
              "data": 'This is the second thing in the second step'
            },
            {
              "type": 'step',
              "name": 'Step 3',
              "data": 'This is the third step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 4',
              "data": 'This is the fourth step of the process'
            }
          ]
        },
      ]);
    });
};