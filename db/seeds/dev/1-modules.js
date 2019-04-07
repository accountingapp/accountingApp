
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        {module: 'Suspense'},
        {module: 'Cash'},
        {module: 'Accounts Receivable'},
        {module: 'Inventory'},
        {module: 'Prepaid Expense'},
        {module: 'Fixed Asset'},
        {module: 'Subsidiary Investment'},
        {module: 'Intangibles'},
        {module: 'Accounts Payable'},
        {module: 'Payroll'},
        {module: 'Legal'},
        {module: 'Tax'},
        {module: 'Other Liability'},
        {module: 'Debt'},
        {module: 'Capital Lease'},
        {module: 'Note Payable'},
        {module: 'Deferred Revenue'},
        {module: 'Equity'},
        {module: 'Revenue'},
        {module: 'COGS'},
        {module: 'Travel and Entertainment'},
        {module: 'Marketing'},
        {module: 'Operating Expenses'},
        {module: 'Rent & Utilities'},
        {module: 'Professional Fees'},
        {module: 'Penalties and Fees'},
        {module: 'Realized Gain/Loss'},
        {module: 'Bank Fees'},
        {module: 'Interest'},
        {module: 'Financial Reporting'},
        {module: 'Audit'},
        {module: 'Analysis'},
        {module: 'Treasury'},
      ]);
    });
};
