import React from "react";
import { Form, Col, Row, FormControl, Button } from "react-bootstrap";
import selectOptions from "../Datas/options";

export default function NewJob() {
  return (
    <div className="container-fluid">
      <div className="title">Create New Job</div>
      <div>
        <Form>
          <Row>
            <Col xs={12} md={7}>
              <Form.Label>Job Name</Form.Label>
              <Form.Group className="mb-3" controlId="jobName">
                <Form.Control type="text" placeholder="" required />
                <FormControl.Feedback />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Label>Job Priority</Form.Label>
              <Form.Select aria-label="Default select example">
                {selectOptions &&
                  selectOptions.map((opt) => (
                    <option value={opt.value}>{opt.label}</option>
                  ))}
              </Form.Select>
              
            </Col>
            <Col xs={12} md={2} className="text-center mt-4 pt-2">
              <Button
                className="text-left row align-item-center"
                variant="primary"
                type="submit"
              >
                + Create
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
