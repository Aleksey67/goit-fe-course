const mainRoute = require('./main/main');
const motocycleRoute = require('./motocycle/motocycle');


const router = {
  '/products': productsRoute,
  '/motocycle': motocycleRoute,
  default: mainRoute
};

module.exports = router; 