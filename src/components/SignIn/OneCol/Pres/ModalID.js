import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PersonCheck, XCircle, Icon1Circle, Icon2Circle, Icon3Circle, Icon4Circle } from 'react-bootstrap-icons';

function ModalID(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="mt-5" style={{ height: "10%" }}>
                <Button type="button" onClick={handleShow} className="btn btn-light rounded-pill border mt-1 mb-1 w-100 h-100" style={{ backgroundColor: "#E4FBEA" }}>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-sm-1'>
                                <PersonCheck />
                            </div>
                            <div className='col-sm-10 text-start' style={{ color: "#3DA856" }}>
                                Why do we need to verify your identity?
                            </div>
                        </div>
                    </div>
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div class="container">
                        <div class="row justify-content-start pb-2">
                            <div class="col-sm-1">
                                <XCircle size={35} onClick={handleClose} />
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-10">
                                <h4 class="text-start font-weight-bold pb-3">
                                    Why do we need to verify your identity?
                                </h4>
                                <div class="my-4">
                                    <div className='row align-items-start'>
                                        <div className='col-auto text-start '>
                                            <Icon1Circle />
                                        </div>
                                        <div className='col-sm-10 text-start'>
                                            Book2wheel is a service from people to people. Identity verification is important for the safety of drivers and vehicle owners.
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <div className='row align-items-start'>
                                        <div className='col-auto text-start '>
                                            <Icon2Circle />
                                        </div>
                                        <div className='col-sm-10 text-start'>
                                            We want to ensure you are setting up your own account for yourself by confirming this with your documents.
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <div className='row align-items-start'>
                                        <div className='col-auto text-start '>
                                            <Icon3Circle />
                                        </div>
                                        <div className='col-sm-10 text-start'>
                                            We need to know you have a valid driving license.
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <div className='row align-items-start'>
                                        <div className='col-auto text-start '>
                                            <Icon4Circle />
                                        </div>
                                        <div className='col-sm-10 text-start'>
                                            All data is stored securely, we pay attention to data protection and GDPR policies.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalID;
