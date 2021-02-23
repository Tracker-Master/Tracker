import React from 'react';
import PropTypes from 'prop-types';

import { Container, Carousell } from 'Styles/components/CarouselStyle';

export const Carousel = ({ children, pages }) => {
  return (
    <Container>
      <Carousell 
        enableAutoPlay={true} 
        autoPlaySpeed={3000}
        showArrows={false}
        pagination={pages}
      >
        {children}
      </Carousell>
    </Container>
  );
};

Carousel.propTypes = {
  pages: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

Carousel.defaultProps = {
  pages: false
}
