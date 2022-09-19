import React from "react";
import NewJob from "../components/NewJob";
import Table from "../components/Table";

const MainPage = () => {
  return (
    <div className="container-fluid bg-color">
      <NewJob />
      <Table />
    </div>
  );
};
export default MainPage;
