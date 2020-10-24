import React from "react";
import Table from "react-bootstrap/Table";


const token = sessionStorage.getItem("key");

function View() {
  if (token == null) {
    return (
      <div className="text-center">
        <h6>
          <i>Please Sign in</i>
        </h6>
      </div>
    );
  } else {
    const [userKey, username, password] = token.split(":");
    const key = `book:${username}:${password}`;
    const Saved = JSON.parse(localStorage.getItem(key));
    if (Saved === null) {
      return (
        <div  className="text-center">
          <h5><i>No books Added</i></h5>
        </div>
      );
    } else {
      return (
        <div>
          <Table
            striped
            bordered
            variant="white"
            className="text-center text-white"
          >
            <thead>
              <tr>
                <th>Index</th>
                <th>Book </th>
                <th>Author</th>
              </tr>
            </thead>
            {Saved.map(({ name, author }, i) => {
              return (
                <tbody>
                  {" "}
                  <tr>
                    <td key={i.toString()}>{i}</td>
                    <td>{name}</td>
                    <td>{author}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      );
    }
  }
}
export default View;
