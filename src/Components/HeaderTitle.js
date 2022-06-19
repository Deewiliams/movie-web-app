import React from 'react';
import PropTypes from "prop-types";

const HeaderTitle = (props) => {
  return (
    <h2>{props.title}</h2>
  )
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeaderTitle