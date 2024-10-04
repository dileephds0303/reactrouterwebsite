import { useState } from "react";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // handleUsername
  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // // handlePassword
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log("values ", values);
    console.log("username ", values.username);
    console.log("password ", values.password);
  };

  return (
    <>
      <h1>Form Handling</h1>
      <form action="" onSubmit={submitForm}>
        <label>username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <br />
        <br />
        <label>password</label>
        <input
          type="text"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
