import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app';
import Login from 'login';
import Editor from 'editor';
import MyViewer from 'viewer';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import LoginButton from "Login";
import LogoutButton from "Logout";
import Profile from "Profile";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/app/home" element={<App />} />
        <Route exact path="/app/editor" element={<Editor />} />
        <Route exact path="/app/viewer" element={<MyViewer />} />
        <Route exact path="/app/login" element={<LoginButton />} />
        <Route exact path="/app/logout" element={<LogoutButton />} />
        <Route exact path="/app/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qo6rnjmfafd2euvt.us.auth0.com"
    clientId="6HEb6f6pEyiKsolY2B169jLKHSuHUnZ4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Main />
  </Auth0Provider>,
);