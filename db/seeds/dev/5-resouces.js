
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {description: 
          "Array Methods", 
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", 
          notes: "Here are some really great nodes on array methods!"},
          {description: 
            "Accounting Standards", 
            link: "https://www.fasb.org/jsp/FASB/Page/LandingPage&cid=1175805317350", 
            notes: "This is the site for accounting standards"},
            {description: 
              "Accounting Recruiting Guide", 
              link: "https://www.reddit.com/r/Accounting/comments/37g618/updated_accounting_recruiting_guide_raccounting/", 
              notes: "Reddit post on accounting recruiting guidelines"}
      ]);
    });
};
