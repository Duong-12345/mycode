import "antd/dist/antd.css";
import { StarFilled } from "@ant-design/icons";
import "./Product.css";
import { useDispatch } from "react-redux";
import { button } from "../action/actionButton";
import { detail } from "../action/actionDetail";
import LazyLoad from "react-lazyload";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Product(props) {
  const dispatch = useDispatch();
  function click() {
    dispatch(button(4));
    dispatch(detail(props));
    
  }
  const Loading = () => (
    <div>
      <h5>Loading...</h5>
    </div>
  );

  return (
    <Link to = "/detail">
    <Button type="text" className="frame" onClick={click} >
      <LazyLoad offset={[-100, 100]} placeholder={<Loading />}>
        {/* <div className = "frame"  > */}
        <div className="image">
          <img src={props.img} alt="logo" />
        </div>
        <div className="name">
          <p>{props.name}</p>
        </div>
        <div className="price">
          <p>{props.price}</p>
        </div>
        <div className="star">
          <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
          <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
          <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
          <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
          <StarFilled style={{ fontSize: 60, color: "#FFCC00" }} />
        </div>
        {/* </div> */}
      </LazyLoad>
    </Button>
    </Link>
  );
}
