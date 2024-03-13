import React from 'react';
import './MyBoard.css'
import {Button, Col, Flex, Row} from 'antd';
import NumberBlock from "../piece/NumberBlock";


const MyBoard = () => {
    return (
        <div className="my-board">
            <Row>
                <Col span={20}>
                    <Flex className='holder' justify={'space-between'} align={'start'}>
                        <NumberBlock num={10} color='black'/>
                        <NumberBlock num={10} color='white'/>
                        <NumberBlock num={10} color='black'/>
                        <NumberBlock num={10} color='white'/>
                    </Flex>
                </Col>
                <Col span={4}>
                    <div className='buttons'><Button type='primary'>NEXT</Button></div>

                </Col>
            </Row>
        </div>
    );
};

export default MyBoard;
