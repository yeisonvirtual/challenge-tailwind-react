import { Header } from './components/Header'
import { MainArticle } from './components/MainArticle'
import { NewContainer } from './components/NewContainer'
import { ArticlesContainer } from './components/ArticlesContainer'
import { Footer } from './components/Footer'
import './index.css'

function App() {

  return (
    <>
      
      <Header />

      <main className='px-[16px] sm:px-[50px] lg:px-[165px]'>

        <div className='lg:flex lg:gap-8'>
          <MainArticle />
          <NewContainer />
        </div>

        <ArticlesContainer />

      </main>

      <Footer />

    
    </>
  )
}

export default App
