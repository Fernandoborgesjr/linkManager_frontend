import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/sign-in">Sign in</Link>
            <Link to="/sign-up">Sign up</Link>
            <Link to="/manage/links/create">Create Link</Link>
            <Link to="/manage/links/edit">Edit Link</Link>
            <Link to="/manage/links">Links</Link>
          </li>
        </ul>
      </nav>

    </div>

    <Switch>
      <Route path="/sign-in"><h1>Sign in</h1></Route>
      <Route path="/sign-up"><h1>Sign up</h1></Route>
      <Route path="/manage/links/create"><h1>Create link</h1></Route>
      <Route path="/manage/links/edit"><h1>Edit link</h1></Route>
      <Route path="/manage/links"><h1>Links</h1></Route>
      <Route path="/"><h1>Home Page</h1></Route>
    </Switch>

  </BrowserRouter>

);

export default App;