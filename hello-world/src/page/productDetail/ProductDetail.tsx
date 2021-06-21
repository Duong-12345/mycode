import { useSelector, RootStateOrAny } from "react-redux";
import "antd/dist/antd.css";
import "./ProductDetail.css";
import { useDispatch } from "react-redux";
import { button } from "../../action/actionButton";
import { StarFilled, MessageTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import Header from "components/Header";
import "../shop/Shop.css";
export default function ProductDetail() {
  const state = useSelector((state: RootStateOrAny) => state.Detail);
  const dispatch = useDispatch();
  function click() {
    dispatch(button(2));
  }

  return (
    <div>
      <Header />
      <div className="bar2">
        <p id="title2">Shop</p>
      </div>
      <div className="bar1">
        <p id="title3">Shop / Product</p>
        <img className="img1" src="/img/cart.png" alt="logo" />
        <MessageTwoTone
          style={{ position: "absolute", width: 24, height: 23, left: 1414 }}
        />
        <div className="body">
          <Carousel
            effect="fade"
            style={{
              width: 408,
              height: 500,
              left: 33,
              top: 46,
              marginTop: 46,
              marginLeft: 32,
              background: "#364d79",
            }}
          >
            <div>
              <img
                src="/img/samsung2.jpg"
                style={{
                  width: 300,
                  height: 400,
                  marginLeft: 50,
                  marginTop: 30,
                }}
                alt="logo"
              />
            </div>
            <div>
              <img
                src="/img/samsung3.png"
                style={{
                  width: 300,
                  height: 400,
                  marginLeft: 50,
                  marginTop: 30,
                }}
                alt="logo"
              />
            </div>
            <div>
              <img
                src={state.img}
                style={{
                  width: 300,
                  height: 400,
                  marginLeft: 50,
                  marginTop: 30,
                }}
                alt="logo"
              />
            </div>
          </Carousel>

          {/* <img
              src={state.img}
              style={{
                width: 408,
                height: 478,
                left: 33,
                top: 46,
                marginTop: 46,
                marginLeft: 32,
              }}
              alt="logo"
            /> */}

          <div className="name1">
            <p>Điện thoại {state.name}</p>
          </div>
          <div className="price1">
            <p>{state.price}</p>
          </div>
          <div className="describe">
            <p>{state.describe}</p>
          </div>
          <div className="star1">
            <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
            <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
            <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
            <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
            <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
          </div>
          <Link to="/cart" className="buy" onClick={click}>
            Mua Ngay
          </Link>
          <button className="add">Thêm vào giỏ hàng</button>

          <img className="img" src="/img/Capture.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
