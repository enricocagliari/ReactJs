import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './actions/postActions';
import propTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    onChange(e) {
        this.setState( { [e.target.name]: e.target.value } )
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post)
    }


    render () {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Title: </label>
                    <input value={this.state.title} name="title" type="text" onChange={this.onChange}/>
                    <br/>
                    <label>Body: </label>
                    <textarea value={this.state.body} name="body" onChange={this.onChange}/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


PostForm.propTypes = {
    createPost: propTypes.func.isRequired
}

export default connect( null, { createPost })(PostForm);