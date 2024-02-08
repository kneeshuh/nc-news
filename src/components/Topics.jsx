import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "../utils/api";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((response) => {
      setTopics(response.data.topics);
    });
  });

  return (
    <div className="topics-div">
      <ul className="topics-list">
        <h2 className="topic-heading">Explore our article topics</h2>
        {topics.map((topic) => {
          return (
            <li key={topic.slug} className="topics-list-item">
              <h2>
                <Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link>
              </h2>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
