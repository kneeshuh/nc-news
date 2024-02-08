import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserInfo from "./components/UserInfo";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import UsersList from "./components/UsersList";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <>
      <UserInfo />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="/articles/topic/:article_topic"
          element={<ArticleList />}
        />
        <Route path="/topics" element={<Topics />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
