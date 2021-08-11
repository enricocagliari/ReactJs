import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postActions';




class Posts extends React.Component {
    componentWillMount() {
        this.props.fetchPosts();
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    };
    
    render () {
        const PostItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
            <h1>Posts</h1>
            {PostItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    newPost: propTypes.object,
    posts: propTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)