import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

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

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button;


