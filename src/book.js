import React from "react";
import { UseForm } from "./useForm";
import Addbook from "./addBook";
import InputGroup from "react-bootstrap/InputGroup";

function Book() {
  const [value, handleChange] = UseForm({
    name: "",
    author: "",
  });

  const token = sessionStorage.getItem("key");

  return (
    <div>
      <div>
        <InputGroup.Prepend>
          <label className="offset-2 col-sm-2">
            <b>BOOK</b>
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="col-sm-4"
          />
        </InputGroup.Prepend>
        <div className="row"></div>
        <InputGroup.Prepend>
          <label className="offset-2 col-sm-2">
            <b>AUTHOR</b>
          </label>

          <input
            type="text"
            name="author"
            onChange={handleChange}
            className="col-sm-4"
          />
        </InputGroup.Prepend>

        <button
          className="row btn btn-success offset-sm-4"
          onClick={() => Addbook(value, token)}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
}

export default Book;
