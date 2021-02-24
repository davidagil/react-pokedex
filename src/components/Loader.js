import React from 'react';
import { Spinner, Col, Row } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center mt-5' style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <Spinner
                        className='spinner-border  spinner-border-lg'
                        role='status'
                        style={{ height: '5vh', width: '5vh' }}
                    >
                    </Spinner>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='mx-3'> Fetching Pokemon...</div>
                </Col>
            </Row>
        </div>
    )
}

export default Loader;
