import React from 'react';
import Icons from './sprites.svg'

const Icon = ({ name, color, size }) => {
    return (
        <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
            <use xlinkHref={`${Icons}#icon-${name}`} x="3" y="4"/>
        </svg>
    );
};

export default Icon;