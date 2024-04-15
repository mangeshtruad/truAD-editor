import React from "react";
import Card from "./card";
export default function Totalcard() {
  return (
    <section className="section dashboard">
      <div className="row">
        <div className="col-xxl-4 col-md-4">
          <Card />
        </div>
        <div className="col-xxl-4 col-md-4">
          <Card />
        </div>
        <div className="col-xxl-4 col-md-4">
          <Card />
        </div>
      </div>
    </section>
  );
}
