import React from 'react'

import SkillsCard from '@/components/SkillsCard'
import { skillsItems } from '@/data/PortfolioData'
import Header from '@/components/Header'

const Skills: React.FC = () => {
  return (
    <section id='skills' className='wrapper'>
      <div className='flex flex-col gap-y-8 px-4 py-12 items-center justify-center'>
        {skillsItems.map((item, itemIndex) => (
          <div key={itemIndex} className='flex flex-col gap-y-6 items-center justify-center'>
            <Header text={item.category} />
            <div className='flex flex-wrap gap-12 items-center justify-center'>
              {item.technologies.map((technology, techIndex) => (
                <SkillsCard key={techIndex} name={technology.name} src={technology.src} index={techIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
