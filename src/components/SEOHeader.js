import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEOHeader = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content="Proyect Tracker" />
      <meta property="og:description" content="Proyect Tracker" />
      <meta property="og:image" content="" />
      <meta property="og:url" content=".github" />
      <meta property="og:site_name" content="Proyect Tracker" />
      <meta property="og:locale" content="es_EN" />
      <meta property="og:type" content="article" />
    </Helmet>
  );
};

export default SEOHeader;

SEOHeader.propTypes = {
  title: PropTypes.string.isRequired
}