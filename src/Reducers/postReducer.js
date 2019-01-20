const postReducer = (state, action) => {
  switch (action.type) {
    case "NEW_POST":
      return (state = {
        ...state,
        posts: [...state.posts, action.payload]
      });
    case "EDIT_POST":
      const updatedPosts = state.posts.map(post => {
        if (post.id === action.id) {
          
          return { ...post, content:action.payload }
        }
        return post
      })
      return {
        posts: updatedPosts
      }
    default:
      console.log(state)
      return state;
  }
};
export default postReducer;
