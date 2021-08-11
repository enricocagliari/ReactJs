import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPost = () => dispatch => {
    fetch('')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
        )
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(posts => dispatch({
            type: NEW_POST,
            payload: posts
        }))
}