import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found flex-column">
            <p className="not-found__code">404</p>
            <p className="not-found__description">Страница не найдена</p>
            <Link to="/" className="button">Вернуться на главную</Link>
        </div>
    );
};

export default NotFound;