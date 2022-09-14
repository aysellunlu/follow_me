import React, { useState } from "react";
import { Form, Button, Row, Col, Image, Modal } from "react-bootstrap";
import DeleteImg from "../images/trash.png";
import EditImg from "../images/edit.png";
import NewJob from "../components/NewJob";
import Table from "../components/Table";

const MainPage = () => {
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);


  return (
    <div className="container-fluid bg-color">
      <NewJob />
      <Table />
    </div>
  );
};
export default MainPage;
