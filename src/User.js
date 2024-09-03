import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const usersData = await usersResponse.json();
      const postsData = await postsResponse.json();
      setUsers(usersData);
      setPosts(postsData);
    };

    fetchData();
  }, []);

  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #d0d0d0",
    borderRadius: "10px",
    padding: "30px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      {users.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);
        return (
          <div key={user.id} style={cardStyle}>
            <h3 className="text-xl font-bold mb-2">User: {user.name}</h3>
            <p className="text-gray-599">Number of Posts: {userPosts.length}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
