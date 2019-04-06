
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
              "indention": '0',
              "data": 'This is the first step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 2',
              "indention": '0',
              "data": 'This is the second step of the process'
            },
            {
              "type":'image',
              "name": 'Example Image',
              "indentation": '0',
              "data": 'https://www.smartsheet.com/sites/default/files/AccountsReceivableAging1.jpg'
            },
            {
              "type": 'step',
              "name": 'Step 2.1',
              "indention": '1',
              "data": 'This is the first thing in the second step'
            },
            {
              "type": 'step',
              "name": 'Step 2.2',
              "indention": '1',
              "data": 'This is the second thing in the second step'
            },
            {
              "type": 'note',
              "name": 'Note',
              "indention": '2',
              "data": 'This is a note'
            },
            {
              "type": 'video',
              "name": 'Example Video',
              "indention": '0',
              "data": 'https://www.youtube.com/embed/-WAEzokHSJM'
            },
            {
              "type": 'step',
              "name": 'Step 3',
              "indention": '0',
              "data": 'This is the third step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 4',
              "indention": '0',
              "data": 'This is the fourth step of the process'
            },
            {
              "type": 'tip',
              "name": 'Tip',
              "indention": '1',
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
              "indention": '0',
              "data": 'This is the first step of the process'
            },
            {
              "type": 'note',
              "name": 'Note',
              "indention": '1',
              "data": 'This is a note'
            },
            {
              "type":'image',
              "name": 'Example Image',
              "indentation": '0',
              "data": 'https://www.smartsheet.com/sites/default/files/AccountsReceivableAging1.jpg'
            },
            {
              "type": 'step',
              "name": 'Step 2',
              "indention": '0',
              "data": 'This is the second step of the process'
            },
            {
              "type": 'step',
              "name": 'Step 2.1',
              "indention": '1',
              "data": 'This is the first thing in the second step'
            },
            {
              "type": 'video',
              "name": 'Example Video',
              "indention": '0',
              "data": 'https://www.youtube.com/embed/-WAEzokHSJM'
            },
            {
              "type": 'tip',
              "name": 'Tip',
              "indention": '2',
              "data": 'This is a really awesome and helpful tip'
            },
            {
              "type": 'step',
              "name": 'Step 2.2',
              "indention": '1',
              "data": 'This is the second thing in the second step'
            },
            {
              "type": 'step',
              "name": 'Step 3',
              "indention": '0',
              "data": 'This is the third step of the process'
            },
            {
              "type":'image',
              "name": 'Example Image',
              "indentation": '0',
              "data": 'https://www.smartsheet.com/sites/default/files/AccountsReceivableAging1.jpg'
            },
            {
              "type": 'step',
              "name": 'Step 4',
              "indention": '0',
              "data": 'This is the fourth step of the process'
            }
          ]
        },
      ]);
    });
};
