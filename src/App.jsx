import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
