import React from 'react';
import classNames from "classnames";

function Button ({ children, onClick, className, outline }) {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
            'button--outline': outline,
        })}>
            {children}
        </button>
    );
};

export default Button;


