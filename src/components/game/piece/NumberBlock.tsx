import React from 'react';
import {Button} from 'antd';
import './NumberBlock.css';

interface NumberBlockProps {
    num: number,
    color: string,
}

const NumberBlock = (props: NumberBlockProps) => {
    const {num, color} = props;

    return (
        <div className='number-block'>
            <Button className={color} type='primary'>{num}</Button>
        </div>
    )
};

export default NumberBlock;