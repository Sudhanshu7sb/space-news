import { useEffect, useState } from 'react';
import ArticleDetails from './components/ArticleDetails';
import ArticleImage from './components/ArticleImage';
import Header from './components/Header';
import Notice from './components/Notice';

function App() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles").then(res => res.json()).then(data => setArticles(data))
  }, [articles])
  
  return (
    <div className="App">
      <section className="mb-32 text-gray-800 text-center md:text-left">

<Header />
<Notice />
{articles && articles.map((article) => {
  return (

<div className="flex flex-wrap items-center mb-8 pb-1 border-b-2 border-b-rose-500 lg:border-b-0" key={article.id} onClick={() => {window.location.href=article.url}}>
  <ArticleImage article={article}/>
  <ArticleDetails article={article}/>

  
</div>
  )
})}



</section>
    </div>
  );
}

export default App;
