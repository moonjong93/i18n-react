import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { Provider } from 'react-redux';

import locale from './locale'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';

 

const store =  createStore(
  combineReducers({
    i18n: i18nReducer
  }),
  applyMiddleware(thunk)
);

syncTranslationWithStore(store)
store.dispatch(loadTranslations(locale));
store.dispatch(setLocale('kr'));

ReactDOM.render(
<Provider store={store}>
    <Root />
</Provider>,
document.getElementById('root')
);
