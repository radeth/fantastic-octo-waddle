export default function addPost(post) {
    return{
        type: 'NEW_POST',
        payload: post
    }
}