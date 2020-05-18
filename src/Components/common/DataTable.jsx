import React from "react";
import { connect } from "react-redux";
import { filterVehicle } from "../../Redux/rentAction";
import { Select } from "antd";
import { Button } from "@material-ui/core";
import styles from "../Comp.module.css";
import VehicleCard from "./VehicleCard";

function Table({ data, totalData, changePage, changePageData, filter, num }) {
  const { Option, OptGroup } = Select;
  let paginate = [];
  let j = 1;
  if (data.length > paginate.length) {
    for (let i = 0; i < totalData.length; i += Number(num)) {
      paginate.push(j);
      j++;
    }
  }

  const changeHandler = (e) => {
    filter(e);
  };

  return (
    <div>
      <div className={styles.homeBody}>
        <div
          className={styles.filters}
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="500"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <Select
            defaultValue="Show All"
            size="large"
            style={{ width: "200px" }}
            onChange={changeHandler}
          >
            <OptGroup label="Availability">
              <Option value="Show All">Show All</Option>
              <Option value="Show Available">Show Available</Option>
            </OptGroup>
            <OptGroup label="Cost">
              <Option value="Price Lower to Higher">
                Price Lower to Higher
              </Option>
              <Option value="Price Higher to Lower">
                Price Higher to Lower
              </Option>
            </OptGroup>
          </Select>

          <Select
            defaultValue="disabled"
            style={{ width: "180px" }}
            size="large"
            onChange={(e) => changePageData(e)}
          >
            <Option value="disabled" disabled>
              Vehicles per page
            </Option>
            <Option value="6">6</Option>
            <Option value="30">30</Option>
            <Option value="60">60</Option>
            <Option value="100">100</Option>
          </Select>
        </div>
        <div className={styles.cardContainer}>
          {data.map((ele) => {
            return (
              <div
                className={styles.vehicleCard}
                key={ele.id}
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <VehicleCard ele={ele} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <hr />
        <ul
          className="pagination pagination-lg justify-content-center"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          style={{ marginTop: "20px" }}
        >
          {paginate.map((ele, index) => {
            return (
              <li className="page-item" key={index} style={{ margin: "0.5vw" }}>
                <Button
                  variant="contained"
                  className="page-link"
                  onClick={() => {
                    return changePage(ele);
                  }}
                  key={ele}
                >
                  {ele}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  filter: (item) => dispatch(filterVehicle(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
