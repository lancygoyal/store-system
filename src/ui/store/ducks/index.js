import { combineReducers } from 'redux';

import debits from './customerDebits';
import customer from './customer';
import provider from './provider';
import product from './product';
import budget from './budget';
import stock from './stock';
import brand from './brand';
import user from './user';
import sale from './sale';

export default combineReducers({
  customer,
  provider,
  product,
  budget,
  debits,
  brand,
  stock,
  sale,
  user,
});
