import React from 'react';
import './App.css';
import PostForm from './PostForm';
import Posts from './Posts';
import { Provider } from 'react-redux';
//import { render } from '@testing-library/react';
import store from './store';
//import { createStore, applyMiddleware } from 'redux';

//const store = createStore(() => [], {}, applyMiddleware());


class App extends React.Component {
    render() {
    return (
        <Provider store={store}>
            <div className="App">
                <PostForm />
                <hr/>
                <Posts />
            </div>
        </Provider>
    )}
}

export default App;