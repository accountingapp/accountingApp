
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        {id: '1', module: 'Suspense'},
        {id: '2', module: 'Cash'},
        {id: '3', module: 'Accounts Receivable'},
        {id: '4', module: 'Inventory'},
        {id: '5', module: 'Prepaid Expense'},
        {id: '6', module: 'Fixed Asset'},
        {id: '7', module: 'Subsidiary Investment'},
        {id: '8', module: 'Intangibles'},
        {id: '9', module: 'Accounts Payable'},
        {id: '10', module: 'Payroll'},
        {id: '11', module: 'Legal'},
        {id: '12', module: 'Tax'},
        {id: '13', module: 'Other Liability'},
        {id: '14', module: 'Debt'},
        {id: '15', module: 'Capital Lease'},
        {id: '16', module: 'Note Payable'},
        {id: '17', module: 'Deferred Revenue'},
        {id: '18', module: 'Equity'},
        {id: '19', module: 'Revenue'},
        {id: '20', module: 'COGS'},
        {id: '21', module: 'Travel and Entertainment'},
        {id: '22', module: 'Marketing'},
        {id: '23', module: 'Operating Expenses'},
        {id: '24', module: 'Rent & Utilities'},
        {id: '25', module: 'Professional Fees'},
        {id: '26', module: 'Penalties and Fees'},
        {id: '27', module: 'Realized Gain/Loss'},
        {id: '28', module: 'Bank Fees'},
        {id: '29', module: 'Interest'},
        {id: '30', module: 'Financial Reporting'},
        {id: '31', module: 'Audit'},
        {id: '32', module: 'Analysis'},
        {id: '33', module: 'Treasury'}
      ]);
    });
};
