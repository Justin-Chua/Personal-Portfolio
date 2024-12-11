import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import { aboutItems } from '@/data/PortfolioData'
import Header from '@/components/Header'

const About: React.FC = () => {
  // index state to control the image/description being displayed
  const [index, setIndex] = useState(0)
  // fade state to control the transition between image/description slides
  const [fade, setFade] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: `-${64 + 48}px 0px 0px 0px`,
    triggerOnce: true
  })

  useEffect(() => {
    // interval used to advance image + description every 5 seconds
    const slideInterval = setInterval(() => {
      // trigger the fade-out animation
      setFade(true)
      // add a delay of 500ms to allow transition to resolve
      setTimeout(() => {
        // set index to current (most recent) value of index, and increment
        setIndex(prevIndex => (prevIndex + 1) % aboutItems.length)
        // trigger fade-in animation
        setFade(false)
      }, 500)
    }, 20000)

    // clear the interval on unmount
    return () => clearInterval(slideInterval)
  }, [])

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
              {aboutItems[index].topic}
            </h3>
            <p className={`max-w-2xl font-poppins text-md md:text-lg leading-loose md:leading-loose font-normal text-wrap text-earth-grey 
                            transition-fade ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
              {aboutItems[index].description}
            </p>
          </div>
          <Image
            src={aboutItems[index].src} height={0} width={800} alt={`${aboutItems[index].topic} image`}
            className={`border-[10px] lg:border-[25px] border-earth-white 
                        transition-fade ${fade ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </div>
    </section>
  )
}

export default About
