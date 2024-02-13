import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';

type SliderProps = {
  images: string[];
  price: string;
  size: string;
};

const Slider = ({ images, price, size }: SliderProps) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className='relative'>
      <ChevronLeftIcon
        onClick={prev}
        className='text-body-m font-bold absolute top-1/2  transform -translate-y-1/2 cursor-pointer w-6 h-6 text-white'
      />
      <img
        src={images[current]}
        alt='carousel'
        width={size}
        className='rounded-t-lg'
        style={{ boxShadow: 'inset 0 0 10px #000000' }}
      />
      <p className='absolute bottom-3 left-1/2 transform -translate-x-1/2 text-theme-950 bg-theme-100 text-body-m font-bold shadow-xl'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(parseFloat(price))}
      </p>
      <ChevronRightIcon
        onClick={next}
        className='text-body-m font-bold absolute top-1/2 right-1 transform -translate-y-1/2 cursor-pointer w-6 h-6 text-white'
      />
    </div>
  );
};

export default Slider;
