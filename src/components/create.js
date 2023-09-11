import React, {useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Author:", author);
    console.log("Body:", body);
  };

  return (
    <div>
        <hr></hr>
        <br></br>
      <h1>CREATE POST</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <br></br>
        <div>
        <label htmlFor="body">Body:</label>
          <textarea
           id="body"
           value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>
        <br></br>
        <button type="click">CLICK</button>
      </form>
    </div>
  );
};

export default Create;


