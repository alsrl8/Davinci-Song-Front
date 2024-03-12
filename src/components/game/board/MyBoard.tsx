import React, {useState} from 'react';
import './MyBoard.css'
import {Flex, Button} from 'antd';


const MyBoard = () => {
    return (
        <div className="my-board">
            <Flex className='holder' justify={'space-between'} align={'start'}>
                <Button className='primary-black' type='primary'>Primary</Button>
                <Button className='primary-black' type='primary'>Primary</Button>
                <Button className='primary-white' type='primary'>Primary</Button>
            </Flex>
        </div>
    );
};

export default MyBoard;
