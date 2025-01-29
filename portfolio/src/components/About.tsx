import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { aboutItems } from '@/data/PortfolioData'
import Header from '@/components/Header'

const About: React.FC = () => {
  // slideIndex state to control the image/description being displayed
  const [slideIndex, setSlideIndex] = useState(0)
  // fade state to control the transition between image/description slides
  const [fade, setFade] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: `-${64 + 48}px 0px 0px 0px`,
    triggerOnce: true
  })

  const changeSlide = (target: number | 'increment' | 'decrement'): void => {
    // trigger the fade-out animation
    setFade(true)
    // add a delay of 500ms to allow transition to resolve
    setTimeout(() => {
      // if a number is provided, set the slide index to that number directly
      if (typeof(target) === 'number') {
        setSlideIndex(target)
      } else {
        // increment or decrement slideIndex based on previous slideIndex value
        target === 'increment' 
        ? setSlideIndex(prevslideIndex => prevslideIndex != (aboutItems.length - 1) ? (prevslideIndex + 1) : 0)
        : setSlideIndex(prevslideIndex => prevslideIndex != 0 ? (prevslideIndex  - 1) : aboutItems.length - 1)
      }
      // trigger fade-in animation
      setFade(false)
    }, 500)
  }

  return (
    <section id='about' className='wrapper'>
      <div className='flex flex-col gap-y-12 px-4 py-12 items-center justify-center'>
        <Header text='about me' />
        <div
          ref={ref}
          className={`flex flex-col 2xl:flex-row gap-8 2xl:gap-12 p-8 md:p-12 rounded-3xl
                    border-4 border-earth-beige-light bg-earth-beige-dark items-center justify-center
                    ${inView ? 'slide-y' : 'opacity-0 translate-y-[100px]'}`}
        >
          <div className='flex flex-col gap-4 lg:gap-8 items-center justify-center'>
            <h3 className={`font-caladea text-4xl text-earth-green
                            transition-fade ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
              {aboutItems[slideIndex].topic}
            </h3>
            <p className={`max-w-2xl font-poppins text-md md:text-lg leading-loose md:leading-loose font-normal text-wrap text-earth-grey 
                            transition-fade ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
              {aboutItems[slideIndex].description}
            </p>
            <div className='flex flex-row gap-4 text-earth-grey text-5xl items-center justify-center'>
              <button 
                type='button'
                onClick={() => changeSlide('decrement')}
                className='hover:brightness-50'
              >
                <KeyboardArrowLeft color='inherit' fontSize='inherit' className='block' />
              </button>
              {aboutItems.map((_, index) => (
                <button 
                  key={index} type='button' 
                  onClick={() => changeSlide(index)}
                  className={`h-3 w-3 rounded-xl hover:bg-earth-brown-light 
                    ${index === slideIndex ? 'bg-earth-brown-dark' : 'bg-earth-grey'}`}
                >
                </button>
              ))}
              <button
                type='button'
                onClick={() => changeSlide('increment')}
                className='hover:brightness-50'
              >
                <KeyboardArrowRight color='inherit' fontSize='inherit' className='block' />
              </button>
            </div>
          </div>
          <Image
            src={aboutItems[slideIndex].src} height={0} width={800} alt={`${aboutItems[slideIndex].topic} image`}
            className={`border-[10px] lg:border-[16px] border-earth-white 
                        transition-fade ${fade ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </div>
    </section>
  )
}

export default About
