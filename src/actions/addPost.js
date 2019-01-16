export default function addNewPost(post) {
    return{
        type: 'ADD_POST',
        payload: post
    }
}