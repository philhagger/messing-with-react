import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Fragment>
    <h3>Sorry page not found!</h3>
    <Link to="/">Go back home</Link>
  </Fragment>
);

export default NotFound;
