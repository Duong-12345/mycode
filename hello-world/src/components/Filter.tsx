import "./Filter.css";
export default function Filter() {
  return (
    <div>
      <div className="filter">
        <p className="text">Filter</p>
        <p className="text1">Giá</p>
        <p className="text2">Từ: </p>
        <p className="text3">Đến: </p>
        <p className="text4">Đánh giá</p>
        <p className="text5">Từ: </p>
        <p className="text6">Đến: </p>
        <select className="filter1">
          <option>0 VNĐ</option>
        </select>
        <select className="filter2">
          <option>10 000 000 VNĐ</option>
        </select>
        <select className="filter3">
          <option>0 Sao</option>
        </select>
        <select className="filter4">
          <option>5 Sao</option>
        </select>
      </div>
    </div>
  );
}
