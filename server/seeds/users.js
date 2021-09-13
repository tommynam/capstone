
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'John', password: "hello", email: "123@123.com", age: 18, countryOfOrigin: "Korea", destination: "USA", isStudent: true},
        {id: 2, username: 'Jim', password: "bye", email: "123@1423.com", age: 19, countryOfOrigin: "USA", destination: "Canada", isStudent: true},
      ]);
    });
};
