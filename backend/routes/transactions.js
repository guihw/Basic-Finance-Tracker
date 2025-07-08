const router = require('express').Router();
const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expenses', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expenses/:id', deleteExpense)

module.exports = router;