import React from 'react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Proyect Tracker</title>
        <meta property="og:title" content="Proyect Tracker" />
        <meta property="og:description" content="Proyect Tracker" />
        <meta property="og:image" content="" />
        <meta property="og:url" content=".github" />
        <meta property="og:site_name" content="Proyect Tracker" />
        <meta property="og:locale" content="es_EN" />
        <meta property="og:type" content="article" />
      </Helmet>
      <h2>Hola Mundo</h2>
    </>
  );
};
