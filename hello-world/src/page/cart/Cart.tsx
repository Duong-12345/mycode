import "../profile/Profile.css";
import "../cart/Cart.css";
import { useSelector, RootStateOrAny } from "react-redux";
import { Counter } from "../../components/Counter";
import { Select, SelectTotal } from "../../components/counterSlice";
import Header from "components/Header";
import "../shop/Shop.css";
export default function Cart() {
  const state = useSelector((state: RootStateOrAny) => state.Detail);
  const count = useSelector(Select);
  const count1 = useSelector(SelectTotal);

  return (
    <>
      {state === 1 ? (
        <div>
          <Header />
          <div className="Body">
            <p id="title2">Cart</p>
            <p id="nothing">You haven't added any items yet</p>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <div className="bar2">
            <p id="title2">Cart</p>
          </div>
          <div className="bar1">
            <p id="text">1 item in bag</p>
          </div>
          <div className="mid">
            <div className="image-cart">
              <img src={state.img} alt="logo" />
            </div>
            <div className="name-cart">
              <p> {state.name}</p>
            </div>
            <div className="price-cart">
              <p>{state.price}</p>
            </div>
            <div className="describe-cart">
              <p>{state.describe}</p>
              <span style={{ position: "absolute", left: 900 }}>
                <Counter />
              </span>
            </div>
          </div>
          <div className="bottom">
            <p className="Text1">SubTotal</p>
            <p className="Text2">Tax</p>
            <p className="Text3">Total</p>
            <p className="Text4">{count.toLocaleString()} VND</p>
            <p className="Text5">1.388.000 VND</p>
            <p className="Text6">{count1.toLocaleString()} VND</p>
          </div>
        </div>
      )}
    </>
  );
}
