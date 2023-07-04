import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPH_CMS_URI,
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
<Provider store={store}><ApolloProvider client={client}><App /></ApolloProvider></Provider>
</BrowserRouter>);