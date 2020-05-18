import React, { useState } from "react";
import { connect } from "react-redux";
import DataTable from "./DataTable";
import { searchVehicle } from "../../Redux/rentAction";
import { Input } from "antd";
import styles from "../Comp.module.css";

function Home({ auth, data, searchVehicle }) {
  const { Search } = Input;
  const [pageNo, setPageNo] = useState(1);
  const [noOfData, setNoOfData] = useState(6);
  const [search, setSearch] = useState("");
  const indexPrevData = Math.floor((pageNo - 1) * noOfData);
  const indexCurrData = pageNo * noOfData;
  const dataToShow = data.slice(indexPrevData, indexCurrData);

  const changePageData = (num) => {
    setNoOfData(num);
    return setPageNo(1);
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
    searchVehicle(e.target.value);
  };

  const changePage = (num) => {
    return setPageNo(num);
  };

  return (
    <div>
      <div
        className={styles.searchBar}
        data-aos="fade-up"
        data-aos-offset="140"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <Search
          placeholder="Search Vehicle here"
          onSearch={changeHandler}
          enterButton
          size="large"
          allowClear
          value={search}
          onChange={changeHandler}
        />
      </div>
      <div
        className="col-md-12 m-auto p-4"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="600"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        style={{ minHeight: "100vh" }}
      >
        <DataTable
          data={dataToShow}
          totalData={data}
          changePage={changePage}
          num={noOfData}
          changePageData={changePageData}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.user.isauth,
  data: state.rent.data,
});
const mapDispatchToProps = (dispatch) => ({
  searchVehicle: (item) => dispatch(searchVehicle(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
