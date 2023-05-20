import React, { useState } from 'react'
// import article from './ArticleData'
// import images from './img/index1.js'

// function Articles() {
//     const [articles, setArticles]= useState(article)
//   return (
//    <section className='article-map'>
//     <h2>Articles</h2>
//     <h3>Published content</h3>
//     <p>Get insight on the latest and greatest in web technologies as well as best practices I've learned in the industry.</p>
//     {articles.map((art)=>{

//         const { id, image, title, info,text}= art
//         return (
//             <div className='article-info' key={id}> 
//             {console.log(image, "coming from article.....")}
//             <img src={image} alt="article" className='articles-img' />
         

//                 <h2 className='article-h2'>{title}</h2>
//                 <h3 className='article-h3'>  {info}</h3>
//                 <p className='article-p'>{text}</p>

//             </div>
//         )
//     })}
//    </section>
//   )
// }

// export default Articles