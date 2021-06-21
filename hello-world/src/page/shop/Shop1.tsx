import "./Shop.css";
import { Input } from "antd";
import "antd/dist/antd.css";
// import Product from './Product';
import { FilterFilled } from "@ant-design/icons";
import { useSelector, RootStateOrAny } from "react-redux";
import Filter from "../../components/Filter";
import { lazy, useState } from "react";
import { message } from "antd";
import { Popover, Button } from "antd";
import Header from "components/Header";

const Product = lazy(() => import("../../components/Product"));
const { Search } = Input;

function Shop1() {
  const state = useSelector((state: RootStateOrAny) => state.smartphone);
  const [arrPhone, setArrPhone] = useState(state);
  const [keyword, setKeyword] = useState("");

  // const [handleSearch] = useFetchDataHook();
  function handleInputChange(e) {
    const val = e.target.value;
    setKeyword(val);
    const newArr = state.filter((p) => p.name.includes(val));
    setArrPhone(newArr);
  }

  function handleSearch() {
    if (keyword.trim() === "") {
      message.warning("Please enter some keyword to search.");
      return false;
    }
  }
  return (
    <div>
      <Header/>
      <div className="bar2">
        <p id="title2">Shop</p>
      </div>
      <div className="bar1">
        <p id="title3">Shop</p>

        <Search
          style={{ marginLeft: 888, width: 469 }}
          placeholder="Search by name"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          value={keyword}
          onChange={handleInputChange}
        />
        {/* <FilterFilled style = {{fontSize: 40, marginLeft: 20}} onClick = {click}/>  */}
        {/* {Condition()} */}
      </div>

      <Popover
        content={<Filter />}
        // title="Title"
        trigger="click"
      >
        <Button
          style={{
            position: "absolute",
            left: 1608,
            top: 181,
            border: "none",
          }}
        >
          <FilterFilled style={{ fontSize: 40 }} />
        </Button>
      </Popover>
      {arrPhone.map((state, index) => (
        <Product
          key={"product" + index}
          name={state.name}
          img={state.image}
          price={state.price}
          describe={state.describe}
        />
      ))}
    </div>
  );
}
export default Shop1;
