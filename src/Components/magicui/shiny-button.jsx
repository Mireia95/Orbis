'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const animationProps = {
  initial: { '--x': '100%', scale: 0.8 },
  animate: { '--x': '-100%', scale: 1 },
  whileTap: { scale: 0.95 },

  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring',
      stiffness: 200,
      damping: 5,
      mass: 0.5
    }
  }
}

export const ShinyButton = React.forwardRef(
  ({ children, to, className, ...props }, ref) => {
    return (
      <MotionLink
        ref={ref}
        to={to}
        className={cn(
          'relative cursor-pointer rounded-lg px-6 py-2 font-medium backdrop-blur-xl border border-[var(--OR-colorSecondary)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_10px_var(--OR-colorSecondary)/50%]',
          className
        )}
        {...animationProps}
        {...props}
      >
        <span
          className='relative z-20 block size-full text-sm uppercase tracking-wide text-[var(--OR-colorSecondary)] dark:font-light'
          style={{
            maskImage:
              'linear-gradient(-75deg,var(--OR-colorSecondary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--OR-colorSecondary) calc(var(--x) + 100%))'
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
            WebkitMask:
              'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
            backgroundImage:
              'linear-gradient(-75deg,var(--OR-colorSecondary)/10% calc(var(--x)+20%),var(--OR-colorSecondary)/50% calc(var(--x)+25%),var(--OR-colorSecondary)/10% calc(var(--x)+100%))'
          }}
          className='absolute inset-0 z-5 block rounded-[inherit] p-px'
        />
      </MotionLink>
    )
  }
)

ShinyButton.displayName = 'ShinyButton'
