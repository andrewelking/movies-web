import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick }) => {
  return <button className={`btn ${className}`} onClick={onClick ? () => onClick() : null}>
    {children}
  </button>;
};

const OutlineButton = () => {
    return (
        <Button className={`btn-outline ${className}`} onClick={onClick ? () => onClick() : null}>
    {children}
  </Button>;
    )
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
