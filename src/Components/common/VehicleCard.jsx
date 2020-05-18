import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Button } from "@material-ui/core";

export default (props) => {
  const { Meta } = Card;
  const { ele } = props;
  if (ele.available) {
    return (
      <Card
        hoverable
        bordered
        cover={<img alt="IMG" src={ele.img_url} />}
        actions={[
          <Link
            to={`/booking/${ele.modal_name}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Book Now
            </Button>
          </Link>,
        ]}
      >
        <Meta
          title={<h3>{ele.company}</h3>}
          description={<h6>{ele.modal_name}</h6>}
        />
        <h6>Location : {ele.location}</h6>
        <h6>Cost per Day : {ele.cost.per_day}</h6>
      </Card>
    );
  } else {
    return (
      <Card
        hoverable
        bordered
        cover={<img alt="IMG" src={ele.img_url} />}
        actions={[
          <Button variant="contained" disabled>
            Not Available
          </Button>,
        ]}
      >
        <Meta
          title={<h3>{ele.company}</h3>}
          description={<h6>{ele.modal_name}</h6>}
        />
        <h6>Location : {ele.location}</h6>
        <h6>Cost per Day : {ele.cost.per_day}</h6>
      </Card>
    );
  }
};
