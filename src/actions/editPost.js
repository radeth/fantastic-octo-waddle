export default function editPost(id,text,date) {
    console.log(id,text,date)
    return{
        type: 'EDIT_POST',
        id: parseInt(id,10),
        payload: {text,date}
    }
}