export default function editPost(id,content) {
    console.log(id,content)
    return{
        type: 'EDIT_POST',
        id: parseInt(id,10),
        payload: content
    }
}