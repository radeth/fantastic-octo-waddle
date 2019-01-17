import React from "react"
class Post extends React.Component{
    render(){
        return(
            <div>{console.log(this.props.match.params.id)}</div>
            
        )
    }

}

export default Post