import React from "react";
import Home from "./Home";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import Error from "./Error";
import Post from "./Post";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
   
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/new-post" component={NewPost} />
            <Route path="/post/:id" component={Post} exact />
            <Route path="/post/:id/edit" component={EditPost} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
