import React from "react";
import Home from "./Home"
import NewPost from "./NewPost";
import Error from "./Error"
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
  
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />  
            <Route path="/new-post" component={NewPost}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
