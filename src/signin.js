import React, { useState } from "react";
import "./index.css";
import "./App.css";
import { InputGroup } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

const userKey = `user`;

function UserLogin() {
  const [user, setusername] = useState("");
  const [pass, setpassword] = useState("");

  const Signin = (username, password) => {
    const key = `${userKey}:${username}`;
    const savedPassword = localStorage.getItem(key);
    if (key in localStorage) {
      if (password !== savedPassword) alert("invalid password");
      else {
        const ToKen = `${userKey}:${username}:${password}`;
        sessionStorage.setItem("key", ToKen);
        window.location.reload(false);
      }
    } else alert("user not exist");
  };

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  return (
    <div>
      <Link className="nav-link" onClick={toggle2}>
        Sign In
      </Link>
      <Modal isOpen={modal2} toggle={toggle2}>
        <ModalHeader toggle={toggle2} className="bg-dark text-white">Sign In</ModalHeader>
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
            onClick={() => Signin(user, pass)}
          >
            SIGN IN
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default UserLogin;
