import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PostForm from './PostForm';
import Posts from './Posts';
import store from './store';


class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <div className="App">
                    <PostForm />
                    <br/>
                    <hr/>
                    <Posts />
                </div>
            </Provider>
        )
    }
}

export default App;