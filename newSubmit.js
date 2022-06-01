import React, { Component } from "react";

class NewSubmit extends Component {
  render() {
    return (
      <form
        action="http://localhost:3030/todos"
        method="post"
        target="http://localhost:3001/get"
        className="newSubmit"
      >
        <p>
          Title: <input type="text" name="title" />
        </p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewSubmit;
