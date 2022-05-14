import articleStyles from '../styles/Article.module.css';
import Link from 'next/link';


const ArticleList = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a>
                <h3>{article.title.toUppercase()} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleList;