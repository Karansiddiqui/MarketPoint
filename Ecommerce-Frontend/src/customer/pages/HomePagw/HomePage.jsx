import React from 'react'
import MainCarousel from '../../components/HomeCarousel/HomeCarousel'
import { HomeSectionCarousel } from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from "../../../Data/Men/men_kurta";
export const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        </div>
    </div>
  )
}
