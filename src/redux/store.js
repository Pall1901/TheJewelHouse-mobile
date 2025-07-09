// LIBRARIES
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// FILES
import {rootReducer} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

const persistor = persistStore(store);

export {store, persistor};



// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist';
// import rootReducer from './reducers';
// import MMKVStorage from './MMKVStorage';

// const persistConfig = {
//   key: 'root',
//   storage: MMKVStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// const persistor = persistStore(store);

// console.log('✅ Store created:', !!store);
// console.log('✅ Persistor created:', !!persistor);

// export { store, persistor };

