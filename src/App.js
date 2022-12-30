import React from 'react';
import { OAuthPopup, useOAuth2 } from "@tasoskakour/react-use-oauth2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import AboutPage from "views/examples/AboutPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/oauth" element={<OAuthPopup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Navigate to="/index" replace />} />

        {/* <Route path="/oauth" >
          <OAuthPopup />
        </Route>
        <Route path="/index">
          <Index />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/nucleo-icons">
          <NucleoIcons />
        </Route>
        <Route path="/landing-page" >
        <LandingPage />
        </Route>
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route path="/" render={() => <Redirect to="index" />} /> */}
      </Routes>
    </BrowserRouter>    
  );
}

export default App;