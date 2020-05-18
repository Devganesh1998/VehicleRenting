import React from "react";
import { Card } from "antd";
import styles from "../../Comp.module.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default (props) => {
  const { item } = props;
  return (
    <div
      className={styles.vehicleCard}
      data-aos="fade-up"
      data-aos-offset="150"
      data-aos-delay="400"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <Card
        hoverable
        bordered
        cover={
          <img
            alt="IMG"
            src="https://us.123rf.com/450wm/viktorijareut/viktorijareut1610/viktorijareut161000204/67827498-vector-illustration-paying-bills-concept-payment-of-utility-bank-restaurant-and-other-bills-giving-o.jpg?ver=6"
          />
        }
      >
        <Meta
          title={<h3>Bill ID : {item.billId}</h3>}
          description={<h6>Bill Amount : {item.billAmount}</h6>}
        />
        <h6>Booked date : {item.bookedDate}</h6>
        <h6>Start date : {item.startDate}</h6>
        <h6>End date : {item.endDate}</h6>
        <h6>Origin : {item.origin}</h6>
        <h6>Destination : {item.destination}</h6>
        <Link
          to={`/admin/allVehicles/${item.vehicle_no}`}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          <h6>Vehicle ID : {item.vehicle_no}</h6>
        </Link>
        <h6>Payment Method : {item.paymentMethod}</h6>
      </Card>
    </div>
  );
};
