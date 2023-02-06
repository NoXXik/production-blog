import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {children, className, theme, ...otherProps} = props
  return (
    <button 
    className={classNames(cls.Button, {}, [className, cls[theme]])}
    {...otherProps}
    >
      
      {children}
    </button>
  )
}