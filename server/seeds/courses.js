exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {id: 1, name: "Psychology 101", website: "google.com", schoolName: "Harvard", courseLevel: "Bachelor", location: "Cambridge, MA", tuitionFee: 5000},
        {id: 2, name: "Business Management", website: "yahoo.com", schoolName: "Yale", courseLevel: "Masters", location: "Connecticut", tuitionFee: 7000},
      ]);
    });
};
