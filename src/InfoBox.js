import React from "react";
import "./InfoBox.css";
import { Card, Typography } from "antd";

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
      onClick={props.onClick}
    >
      <Typography.Text className="infoBox__title" type="secondary">
        {title}
      </Typography.Text>

      <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
        {cases}
      </h2>

      <Typography.Text className="infoBox__total" type="secondary">
        {total} Total
      </Typography.Text>
    </Card>
  );
}

export default InfoBox;
