const userModels = require('../models/mongooseModels');

const userController = {};

userController.newUser = (req, res, next) => {

  const { firstName,
    lastName,
    password,
    filingStatus,
    state,
    industry,
    email,
    estimatedIncome,
    businessExpenses,
    preTaxRetirementContributions
  } = req.body;

  userModels.create({
    firstName,
    lastName,
    password,
    filingStatus,
    state,
    industry,
    email,
    estimatedIncome,
    businessExpenses,
    preTaxRetirementContributions
  })
    .then((data) => {
      console.log ('Value of state from the mongo query', data.state);
      res.locals.state = data.state;
      res.locals.filingStatus = data.filingStatus;
      console.log('sucessfully created' + data);
      return next();
    })
    .catch((err) => {
      console.log('Error in User Controller' + err);
      return next(err);
    });
};


module.exports = userController;