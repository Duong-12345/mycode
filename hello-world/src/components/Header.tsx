import Menu1 from "./Menu";
import "antd/dist/antd.css";
export default function Header() {
  return (
    <div className="Shop">
          <header className="head-shop">
            <img src="/img/Logo2.png" className="Shop-logo" alt="logo" />
            <p id="title">Mobile Shopping</p>
            <img src="/img/Vector.png" className="Vector4" alt="logo" />
          </header>

          <div className="Menu">
            <p id="title1">MENU</p>
            <Menu1></Menu1>
          </div>
        </div>
  );
}
