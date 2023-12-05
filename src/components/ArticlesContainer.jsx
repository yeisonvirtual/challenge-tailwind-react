import { useState } from "react"
import { Article } from "./Article"

import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

export const ArticlesContainer = () => {

  const urlBase = '../assets/images/'

  const articles = [
    {
      img: img1,
      number: 1,
      title: 'Reviving Retro PCs',
      text: 'What happens when old PCs are given modern upgrades?'
    },
    {
      img: img2,
      number: 2,
      title: 'Top 10 Laptops of 2022',
      text: 'Our best picks for various needs and budgets.'
    },
    {
      img: img3,
      number: 3,
      title: 'The Growth of Gaming',
      text: 'How the pandemic has sparked fresh opportunities.'
    },
  ]

  return (
    <section className="mb-[64px] md:flex md:flex-wrap">

      {
        articles.map(item=>(
          <Article
            key={item.number}
            img={item.img}
            number={item.number}
            title={item.title}
            text={item.text}
          />
        ))
      }
      
    </section>
  )
}
