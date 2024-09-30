// src/components/MyCarousel.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WithStyles from './WithStyles';

const MyCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container-with-dots"
      draggable
      infinite
      keyBoardControl
      pauseOnHover
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      <WithStyles
        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      {/* Agrega más instancias de WithStyles según sea necesario */}
    </Carousel>
  );
};

export default MyCarousel;