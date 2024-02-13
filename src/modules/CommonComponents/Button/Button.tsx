import React, { SVGProps } from 'react';
import cn from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: 'primary' | 'secondary';
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
const Button = (props: ButtonProps) => {
  return (
    <button
      className={cn('px-4 py-3 font-bold rounded-lg', {
        'bg-theme-500 text-theme-50': props.theme === 'primary',
        'text-theme-500 bg-theme-50': props.theme === 'secondary',
      })}
      {...props}
    >
      {props.children}
      {props.icon && <props.icon className='w-4 h-4 ml-4' />}
    </button>
  );
};

export default Button;
