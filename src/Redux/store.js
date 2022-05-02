import { legacy_createStore,combineReducers } from "redux";


const RootReduser=combineReducers({
    auth:AuthReduser
    
});

export const store=createStore(
    RootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );
