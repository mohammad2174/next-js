import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home({ articles }) {
  return (
    <div>
      <h1>Welcome to next!</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await response.json()

  return {
    props: {
      articles
    }
  }
}