import React, { useState } from "react";
import { connect } from "react-redux";
import ISLoader from "./Isloader";
import swal from "sweetalert";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styles from "../Comp.module.css";
import { bookVehicle } from "../../Redux/userAction";
import { ChangeAvailability } from "../../Redux/rentAction";
import { Select, Radio } from "antd";
import { Redirect } from "react-router-dom";

const Payment = (props) => {
  const { Option } = Select;

  const { booking } = props;

  const { className } = props;

  const [modal, setModal] = useState(false);
  const [coupon, setCoupon] = useState(0);
  const [PayMethod, setPayMethod] = useState("disabled");
  const [iscoupon, setIscoupon] = useState(false);
  const [coupon_value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);

  if (props.booking.length === 0) {
    return <Redirect to="/" />;
  }
  const toggle = () => setModal(!modal);

  const handleSubmit = () => {
    setModal(!modal);
  };

  const handleChange = (value) => {
    setPayMethod(value);
  };

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
    setIscoupon(true);
    setValue(e.target.value);
  };

  let total = Number(booking.vehicle.cost.per_day) * 5 - Number(coupon_value);

  let today = new Date();
  let date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

  const clickHandler = () => {
    if (PayMethod === "disabled") {
      swal({
        title: "Fill details to continue...",
        text: "All Fields Are Required",
        icon: "info",
      });
    } else {
      let randomNumber = Math.floor(Math.random() * 10000);
      let data = {
        billId: String(randomNumber),
        billAmount: String(total),
        startDate: String(booking.startDate),
        endDate: String(booking.endDate),
        bookedDate: String(date),
        origin: String(booking.vehicle.location),
        destination: String(booking.des),
        vehicle_no: String(booking.vehicle.id),
        paymentMethod: String(PayMethod),
        category: String(booking.vehicle.category),
      };
      props.bookVehicle(data);
      props.ChangeAvailability(booking.vehicle.id);
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        swal({
          title: "Booked Successfully",
          text: `${booking.vehicle.company} is booked from ${booking.startDate} to ${booking.endDate}`,
          icon: "success",
          button: "Aww Yes!",
        }).then(() => {
          swal({
            title: "View Bookings",
            text: "Check the Profile or Bookings page to view your bookings",
            icon: "info",
          });
        });
        props.history.push("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  };

  if (loading) {
    return <ISLoader />;
  } else {
    return (
      <div className={styles.payContainer}>
        <div
          className="card mb-3 mx-auto"
          style={{ maxWidth: "540px" }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="card-header">
            <h3>Bill Details</h3>
          </div>
          <div className="card-body">
            <h6 className="card-text">
              {booking.vehicle.category} Name : {booking.vehicle.company}{" "}
              {booking.vehicle.modal_name}
            </h6>
            <p className="card-text">Rent Start Date : {booking.startDate}</p>
            <p className="card-text">Rent End Date : {booking.endDate}</p>
            <p className="card-text">
              Origin Location : {booking.vehicle.location}
            </p>
            <p className="card-text">Destination Location : {booking.des}</p>
            <p className="card-text">
              Vehicle Number : {booking.vehicle.vehicle_no}
            </p>
            {!iscoupon ? (
              <h3 className="card-text">
                Total Payable Amount : {booking.vehicle.cost.per_day * 5}
              </h3>
            ) : (
              <h3 className="card-text">
                Total Amount : {booking.vehicle.cost.per_day * 5}
              </h3>
            )}
            {iscoupon ? (
              <strong>Discount Amount : {coupon_value}</strong>
            ) : null}
            {iscoupon ? (
              <h3 className="card-text">Total Payable Amount : {total}</h3>
            ) : null}
          </div>
          <Button
            color="success"
            onClick={toggle}
            style={{ maxWidth: "200px", margin: "auto", marginBottom: "10px" }}
          >
            Apply Coupon
          </Button>
        </div>

        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 100 }}
          backdropTransition={{ timeout: 100 }}
          toggle={toggle}
          className={styles.modal}
        >
          <ModalHeader toggle={toggle}>Select Coupon</ModalHeader>
          <ModalBody>
            <Radio.Group
              onChange={handleCoupon}
              value={coupon}
              className={styles.radioContain}
            >
              <Radio value={100}>
                Vehicle Coupon Code for All Users : 40% Off upto Rs. 700 on
                Vehicle rental Order
              </Radio>
              <Radio value={200}>
                Vehicle Promo Code - Avail Instant Rewards upto Rs. 500 on
                Orders via Paytm
              </Radio>
              <Radio value={300}>
                Vehicle Coupon Code for All Users : 40% Off upto Rs. 800 on
                Orders via Google Pay
              </Radio>
            </Radio.Group>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <div
          className={styles.payMode}
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="800"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div>
            <Select
              defaultValue="disabled"
              style={{ width: "300px" }}
              size="large"
              value={PayMethod}
              onChange={handleChange}
            >
              <Option value="disabled" disabled>
                Select Payment Method
              </Option>
              <Option value="Paytm">Paytm</Option>
              <Option value="tez">Google Pay</Option>
              <Option value="Credit">Credit Card</Option>
              <Option value="Debit">Debit Card</Option>
            </Select>
          </div>
          <button className="btn btn-primary" onClick={clickHandler}>
            pay
          </button>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  booking: state.user.booking,
});

const mapDispatchToProps = (dispatch) => {
  return {
    bookVehicle: (data) => dispatch(bookVehicle(data)),
    ChangeAvailability: (VehicleId) => dispatch(ChangeAvailability(VehicleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
