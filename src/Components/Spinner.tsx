import React from "react";
import { Spinner as BootstrapSpinner } from "react-bootstrap";

const Spinner: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <BootstrapSpinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner;
