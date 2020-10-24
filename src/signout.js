import React from "react";

function Signout() {
  const login = sessionStorage.getItem("key");
  const Signout = () => {
    if (login === null) {
      return alert("login first");
    } else {
      sessionStorage.clear();
      window.location.reload(false);
    }
  };

  return (
    <div>
      <li className="nav-item">
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => Signout()}
        >
          SIGN OUT
        </button>
      </li>
    </div>
  );
}
export default Signout;
