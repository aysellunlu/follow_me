import React, { useState } from 'react';
import { Form, Button, Row, Col, Image, Modal, FormControl } from 'react-bootstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import DeleteImg from '../images/trash.png';
import EditImg from '../images/edit.png';
// import Swal from 'sweetalert2';
import Data from '../Datas/data.json';
import Options from '../Datas/data.json';

const PageMain = () => {
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const selectOptions = [
        {
            value: 0,
            label: 'Urgent'
        },
        {
            value: 1,
            label: 'Regular'
        },
        {
            value: 2,
            label: 'Trivial'
        }
    ]

    // const selectOptions = Options;

    // const tableData = Data.map((x) => [
    //     {
    //         "id": x.id,
    //         "name": x.name,
    //         "priority": x.priority,
    //         "action": x.action
    //     }
    // ])



    const products = [

        // {
        //     "name": tableData.name,
        //     "priority":
        //         <option className='urgent col-md-4 text-center mt-2' value={tableData.id}>
        //             {tableData.priority}
        //         </option>,
        //     "action":
        //         <Row key={tableData.action}>
        //             <Col className='mb-2 '>
        //                 <Button className='btn-action' onClick={handleShowEdit}>
        //                     <Image src={EditImg} width={20} />
        //                 </Button>
        //             </Col>
        //             <Col className='mb-2'>
        //                 <Button className='btn-action' onClick={() => onClickDelete()}>
        //                     <Image src={DeleteImg} width={20} />
        //                 </Button>
        //             </Col>
        //         </Row>
        // }

        {
            id: 1,
            "name": "Adaylar ile ilgili teknik bir ödev hazırlamam gerekiyor.",
            "priority":
                <option className='urgent col-md-4 text-center mt-2' value={0}>
                    Urgent
                </option>,
            "action":
                <Row>
                    <Col className='mb-2 '>
                        <Button className='btn-action' onClick={handleShowEdit}>
                            <Image src={EditImg} width={20} />
                        </Button>
                    </Col>
                    <Col className='mb-2'>
                        <Button className='btn-action'
                        // onClick={() => onClickDelete()}
                        >
                            <Image src={DeleteImg} width={20} />
                        </Button>
                    </Col>
                </Row>
        },
        {
            id: 2,
            "name": "Yapılan işlerle ilgili activity kayırları oluşturmam gerekiyor.",
            "priority":
                <option className='regular col-md-4 text-center mt-2' value={1}>
                    Regular
                </option>,
            "action":
                <Row>
                    <Col className='mb-2'>
                        <Button className='btn-action'>
                            <Image src={EditImg} width={20} onClick={handleShowEdit} />
                        </Button>
                    </Col>
                    <Col className='mb-2'>
                        <Button className='btn-action'>
                            <Image src={DeleteImg} width={20} />
                        </Button>
                    </Col>
                </Row>
        },
        {
            id: 3,
            "name": "Teknik taskleri planlayacağım.",
            "priority":
                <option className='trivial col-md-4 text-center mt-2' value={2}>
                    Trivial
                </option>,
            "action":
                <Row>
                    <Col className='mb-2'  >
                        <Button className='btn-action'>
                            <Image src={EditImg} width={20} onClick={handleShowEdit} />
                        </Button>
                    </Col>
                    <Col className='mb-2'>
                        <Button className='btn-action'>
                            <Image src={DeleteImg} width={20} />
                        </Button>
                    </Col>
                </Row>
        },
    ];

        // const columns = [{
        //     dataField: 'name',
        //     text:
        //         <div className='mb-2'>
        //             Name
        //         </div>,
        //     filter: textFilter({
        //         placeholder: "Search"
        //     })
        // }, {
        //     dataField: 'priority',
        //     text:
        //         <div className='mb-2'>
        //             +
        //             Priority
        //         </div>,
        //     filter: selectFilter({
        //         options: selectOptions,
        //         placeholder: 'Choose'
        //     })
        // }, {
        //     dataField: 'action',
        //     text:
        //         <div className='mb-4 pb-3'>
        //             Action
        //         </div>
        // }];

    // const onClickDelete = () => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Swal.fire(
    //                 'Deleted!',
    //                 'Your file has been deleted.',
    //                 'success'
    //             )
    //         }
    //     })
    // }

    return (
        <div className='container-fluid'>
            <div className="title">
                Create New Job
            </div>
            <div>
                <Form>
                    <Row>
                        <Col xs={12} md={7} >
                            <Form.Label>Job Name</Form.Label>
                            <Form.Group className="mb-3" controlId="jobName">
                                <Form.Control type="text" placeholder="" required />
                                <FormControl.Feedback />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Label>Job Priority</Form.Label>
                            <Form.Group className="mb-3" controlId="jobPrioty">
                                <Form.Control type="text" placeholder="" required />
                                <FormControl.Feedback />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={2} className='text-center mt-4 pt-2' >
                            <Button className="text-left row align-item-center" variant="primary" type="submit">
                                + Create
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="title mt-5 mb-3">
                Job List
            </div>
            {/* <div className='mb-4'>
                <BootstrapTable keyField='id'
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                />
            </div> */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className=''>
                            Job Edit
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Job Name</Form.Label>
                        <Form.Group className="mb-3" controlId="jobName">
                            <Form.Control type="text" placeholder="Adaylar ile ilgili teknik bir ödev hazırlamam gerekiyor." disabled />
                        </Form.Group>
                        <Form.Label>Job Priority</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {selectOptions &&
                                selectOptions.map((opt) =>
                                    <option value={opt.value}>{opt.label}</option>
                                )}
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button className='btn-save' onClick={handleCloseEdit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default PageMain