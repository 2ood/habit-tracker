import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import MainPage from "./components/view/MainPage";
import { AddLogPage, AddHobbyPage } from "./components/view/AddPage";
import { LoginPage, RegisterPage } from "./components/view/AuthPage";


class App extends React.Component {
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element= {<MainPage />} />
          <Route path="add/log" element = {<AddLogPage />}/>
          <Route path="add/hobby" element = {<AddHobbyPage />}/>
          <Route path="auth/login" element = {<LoginPage />}/>
          <Route path="auth/register" element = {<RegisterPage />}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
}

export default App;
