
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { motion } from 'framer-motion';

import serviceData from '../components/fakeData/ServiceData';
import Layout from '../components/Layout/Layout';

export default function Services() {
    return <Layout>

 <>
            
 {
                    serviceData.map((item, index) => (
                        < p key={index}>
                            <div

                              
                                className="service__item" style={{ background: `${item.bg}` }}>
                                <span>
                                    <i class={item.icon}></i>
                                </span>
                                <div>
                                    <h3>{item.title} </h3>
                                    <p>{item.subtitle}</p>
                                </div>
                          
                            </div>
                           
                        </p>
                    ))
                }
             
                </>
           
{/* <Container>
            <Row>
                {
                    serviceData.map((item, index) => (
                        <Col lg='3' md='4' key={index}>
                            <motion.div
                                whileTap={{ scale: 1.1 }}
                                className="service__item" style={{ background: `${item.bg}` }}>
                                <span>
                                    <i class={item.icon}></i>
                                </span>
                                <div>
                                    <h3>{item.title} </h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))
                }

            </Row>
        </Container> */}
    </Layout>
};

