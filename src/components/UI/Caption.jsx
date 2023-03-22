import React from 'react';

const Caption = (props) => {
    return (
        <div className="caption-wrapper">
            <h1 className="caption">{props.caption}</h1>
            {/*<div className="bread-crumbs">*/}
            {/*    <Link to="/">Главная</Link> - <NavLink to="/shop">Магазин</NavLink>*/}
            {/*</div>*/}
        </div>
    );
};

export default Caption;