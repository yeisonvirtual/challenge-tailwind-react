import { useState } from "react"
import { NewArticle } from "./NewArticle"

export const NewContainer = () => {

  const initialState = [
    { 
      id:1,
      title: 'Hydrogen VS Electric Cars',
      text: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
      id:2,
      title: 'The Downsides of AI Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
      id:3,
      title: 'Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    },
  ]

  const [articles, setArticles] = useState(initialState)

  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] lg:wrap-2">
      
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
      
      {
        articles.map(article =>
          <NewArticle
            key={article.id}
            title={article.title}
            text={article.text}
          />
        )
      }

    </aside>
  )
}
