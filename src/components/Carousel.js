import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container, Carousell } from 'Styles/components/CarouselStyle';

export const Carousel = ({ children, pages }) => {

  const carousel = useRef(null);
  const [loop, setLoop] = useState(null);

  const handleLoop = (currentItem) => {
    if (currentItem.index === 2) {
      setLoop(setTimeout(() => {
        carousel.current.goTo(0);
      }, 3000));
    }
  }

  useEffect(() => {
    return () => clearTimeout(loop);
  }, []);

  return (
    <Container>
      <Carousell
        ref={carousel}
        enableAutoPlay={true} 
        autoPlaySpeed={3000}
        showArrows={false}
        pagination={pages}
        onNextEnd={handleLoop}
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
