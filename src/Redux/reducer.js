import { orders, userStatus } from "./actions";

const init = {
  userStatus:{},
  orders:{}
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case userStatus:
      return {...store,userStatus:payload}
    case orders:
      return {...store,orders:payload}
    default: 
      return store;
  }
};
