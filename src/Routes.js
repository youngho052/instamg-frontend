import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Myprofile from "./Pages/MyProfile/MyProfile";
import FeedStory from "./Pages/FeedStory/FeedStory";
import Navbar from "./Components/Nav/Navbar";
import PersonalFeed from "./Pages/PersonalFeed/PersonalFeed";
import UploadPosts from "./Pages/UploadPosts/UploadPosts";
import Story from "./Pages/Story/Story";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/myprofile" component={Myprofile} />
        <Route exact path="/feedstory/:id" component={FeedStory} />
        <Route exact path="/nav" component={Navbar} />
        <Route exact path="/personalFeed/:id" component={PersonalFeed} />
        <Route exact path="/uploadPosts" component={UploadPosts} />
        <Route exact path="/story" component={Story} />
      </Switch>
    </Router>
  );
}

export default Routes;
