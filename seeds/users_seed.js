var bcrypt = require('bcrypt');
var passwordHash = bcrypt.hashSync('password', 4);

exports.seed = function(knex, Promise) {
  console.log(passwordHash);
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({name: 'Joe', email: 'joe@joe.joe', password: passwordHash}),
    knex('users').insert({name: 'Kate', email: 'kate@kate.kate', password: passwordHash}),
    knex('users').insert({name: 'Boomps', email: 'boomps@boomps.boomps', password: passwordHash})
  );
};
