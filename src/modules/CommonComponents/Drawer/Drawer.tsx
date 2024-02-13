import { useEffect, useState, useRef } from 'react';
import useOutsideClick from '@/hooks/use-outside-click';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { increaseQuantity, removeFromCart } from '@/modules/Home/slices/shoppingSlice';
import Button from '../Button/Button';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';


type DrawerProps = {
  show: boolean;
  onClose: () => void;
};
const Drawer = ({ show, onClose }: DrawerProps) => {
  const [isShown, setIsShown] = useState(show);
  const wrapperRef = useRef(null);

  useOutsideClick({
    ref: wrapperRef,
    onClickOutside: () => onClose(),
  });

  useEffect(() => {
    setIsShown(show);
  }, [show]);
  
  

  const cart = useSelector((state: RootState) => state.shopping.cart);
  const dispatch = useDispatch();
  return (
    <div
      ref={wrapperRef}
      className={`fixed top-0 right-0 z-20 w-64 h-full transition-all duration-500 transform ${
        isShown ? 'translate-x-0' : 'translate-x-full'
      } bg-theme-50 shadow-lg`}
    >
      <div className='px-6 py-4'>
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={`item-${item.id}`} width={100} height={100} loading='lazy'/>
              <p className='text-xs'>
                {item.title} - {item.price}
              </p>
              <h1>quantity: {item.quantity}</h1>
              <Button onClick={() => dispatch(increaseQuantity(item.id))}>
                <PlusIcon className='w-4 text-theme-500 font-bold text-sm'/>
              </Button>
              <Button onClick={() => dispatch(removeFromCart(item.id))}>
                <TrashIcon className='w-4 text-theme-500 font-bold text-sm'/>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
