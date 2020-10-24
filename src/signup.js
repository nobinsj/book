import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./index.css";
import "./App.css";

const userKey = `user`;

function Signup(username, password) {
  const key = `${userKey}:${username}`;
  const exist = localStorage.getItem(key);

  if (exist) {
    alert("username already exist");
  } else localStorage.setItem(key, password);
  window.location.reload(false);
}

function Register() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Link className="nav-link" onClick={toggle}>
        Sign Up
      </Link>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-dark text-white">Sign Up</ModalHeader>
        <ModalBody>
          <InputGroup.Prepend>
            <label className="col-sm-4">
              <b>USERNAME</b>
            </label>
            <input
              type="text"
              name="username"
              onChange={(event) => setusername(event.target.value)}
            />
          </InputGroup.Prepend>
          <div className="row"></div>
          <InputGroup.Prepend>
            <label className="col-sm-4">
              <b>PASSWORD</b>
            </label>
            <input
              type="password"
              name="password"
              onChange={(event) => setpassword(event.target.value)}
            />
          </InputGroup.Prepend>
          <button
            className="row btn btn-success offset-sm-4"
            onClick={() => Signup(username, password)}
          >
            SIGN UP
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Register;
