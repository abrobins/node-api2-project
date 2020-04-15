import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const Cards = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Card = Styled.div`
  margin: 2rem 6rem;
  padding: 1rem;
  background-color: #ffc357;
  box-shadow: 2px 2px #d88144;
  border-radius: 1.5rem;
`;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4005/api/posts")
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>List of Posts</h1>
      <Cards>
        {posts.map(singlePost => (
          <Card>
            <h3>Title: {singlePost.title}</h3>
            <h3>Contents: {singlePost.contents}</h3>
          </Card>
        ))}
      </Cards>
    </div>
  );
};

export default PostList;
