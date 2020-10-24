const dbKey = `book`;

function Addbook(value, token) {
  const tok = sessionStorage.getItem("key");
  if (tok == null) {
    return (
      alert("You must Login",window.location.reload(false))
      
    )
  } else {
    const [userKey, username, password] = token.split(":");
    const key = `${dbKey}:${username}:${password}`;
    const exist = JSON.parse(localStorage.getItem(key));
    if (exist) {
      const books = JSON.parse(localStorage.getItem(key) || []);
      const newList = [...books, value];
      localStorage.setItem(key, JSON.stringify(newList));
      window.location.reload(false);
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
      window.location.reload(false);
    }
  }
}
export default Addbook;
