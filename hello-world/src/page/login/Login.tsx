import "./Login.css";
import { useDispatch } from "react-redux";
import { dangnhap } from "../../action/actionLogin";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
    
  });
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit ( event ) {
    event.preventDefault();

    // const a = {
    //   name: name
    // };

    axios.post('http://10.0.10.105/api/category', {name}) .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

// useEffect(() => {
// const apiUrl = 'http://10.0.10.105/api/product';
// axios.get(apiUrl).then((repos) => {
//   const allRepos = repos.data;
//   setAppState({ loading: false, repos: allRepos });
// });
// }, [setAppState]);
  return (
    <div className="Login">
    
      <header className="App-header"></header>
      <img src="/img/Logo2.png" className="App-logo" alt="logo" />
      <div className="box1">
        <img src="/img/Vector1.svg" className="Vector1-logo" alt="logo" />
        <input
          type="text"
          className="box11"
          name="Tên đăng nhập"
          placeholder="Tên đăng nhập"
          onChange={handleChange}
        ></input>
      </div>

      <div className="box2">
        <img src="/img/Vector2.svg" className="Vector2-logo" alt="logo" />
        <input
          type="password"
          className="box21"
          name="Mật khẩu"
          placeholder="Mật khẩu"
        ></input>
        <img src="/img/vector.svg" className="Vector-logo" alt="logo" />
      </div>

      <p id="p1">Lưu đăng nhập</p>
      <p id="p2">Bạn quên mật khẩu?</p>
      <p id="p3">
        Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số điện thoại:{" "}
        <u>19001000</u>
      </p>
      <p id="p4">Bản quyền thuộc về AnyBim</p>

      <input type="checkbox" className="box3" />

      <Link to="/shop">
        <button
          className="box4"
          value="Đăng nhập"
          name="login"
          onClick={() => {
            dispatch(dangnhap());
          }}
          // onClick = {handleSubmit}
        >
          Đăng nhập
        </button>
      </Link>
      <img src="/img/Vector3.svg" className="Vector3-logo" alt="logo" />
       {/* <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div> */}
    </div>
  );
}

export default Login;
