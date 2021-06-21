import Header from "components/Header";
import "./Profile.css";
import "../shop/Shop.css";
export default function Profile() {
  return (
    <div>
      <Header />
      <div className="Body">
        <p id="head">My Profile</p>
        <img src="/img/Vector.png" className="Vector6" alt="logo" />
        <p id="name">MR.USER</p>
        <p id="date">Date of birth:</p>
        <p id="sex">Sex:</p>
        <p id="company">Address Company:</p>
        <p id="home">Address Home:</p>
        <p id="address1">15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi</p>
        <p id="address2">15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi</p>
        <input type="date" className="date1"></input>
        <select className="sex1">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
    </div>
  );
}
