 const postReducer = (state,action) => {
    switch(action.type){
        case "NEW_POST":
        return (
            state = {
                ...state,
                posts:[
                    ...state.posts,
                    action.payload
                ]
            }
        )
    }
    console.log(state)
}
export default postReducer