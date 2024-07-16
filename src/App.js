import React from "react";
import { Switch, Route } from "react-router-dom";
import DjangoDemoPage from "./components/DjangoDemoPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Switch>
      <Route path="/django-demo" component={DjangoDemoPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
