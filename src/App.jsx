import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
