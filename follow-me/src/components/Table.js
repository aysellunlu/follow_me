import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Image } from "react-bootstrap";
import selectOptions from "../Datas/options";
import DeleteImg from "../images/trash.png";
import EditImg from "../images/edit.png";
import Modal from "react-bootstrap/Modal";
import EditModal from "./EditModal";
import Datas from '../Datas/data.json';

const Table = () => {
  const [lgShow, setLgShow] = useState(false);
  const [items, setItems] = useState(Datas);
  // const [datas, setDatas] = useState([]);


  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  //   setDatas(localStorage.items)
  //   console.log("items", items);
  // }, [items,datas]);

  return (
    <div className="container-fluid">
      <div className="title">Job List</div>
      <div className="table mt-3 mb-3">
        <Form>
          <Row>
            <Col lg={8} sm={12}>
              <Form.Group className="mb-3" controlId="jobName">
                <Form.Control type="text" placeholder="Enter job name" />
              </Form.Group>
            </Col>
            <Col lg={4} sm={12}>
              <Form.Select aria-label="Default select example">
                {selectOptions &&
                  selectOptions.map((opt) => (
                    <option value={opt.value}>{opt.label}</option>
                  ))}
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="table-title mt-3 mb-3">
        <Row>
          <Col lg={7} xs={4}>
            Name
          </Col>
          <Col lg={3} xs={4}>
            Priority
          </Col>
          <Col lg={2} xs={4}>
            Action
          </Col>
        </Row>
      </div>
      <hr />
      {items &&
      items.map((x)=>(
      <div className="table-list mt-3 mb-3">
        <Row>
          <Col lg={7} xs={12}>
            {x.name}
          </Col>
          <Col lg={3} xs={12}>
            <div className="col-3 row justify-content-center">
              {x.priority}
            </div>
          </Col>
          <Col lg={2} xs={12}>
            <Row>
              <Col>
                <Button className="btn-action" onClick={() => setLgShow(true)}>
                  <Image src={EditImg} width={15} />
                </Button>
              </Col>
              <Col>
                <Button className="btn-action">
                  <Image src={DeleteImg} width={15} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      ))}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Job Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditModal />
        </Modal.Body>
        <Row className="justify-content-end col-12 mb-4">
          <Col xs={12} lg={2} className="row mt-4 pt-2">
            <Button
              variant="danger"
              type="submit"
            >
              Save
            </Button>
          </Col>
          <Col xs={12} lg={2} className="row mt-4 pt-2">
            <Button
              onClick={() => setLgShow(false)}
              variant="secondary"
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};
export default Table;
