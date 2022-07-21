import React from 'react'

function ArticleImage({article}) {
  return (
    <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
    <div
      className=" relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
      data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img src={article.imageUrl}
        className="w-full" alt={article.title} />
      <a href="##">
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-[#fbfbfb3]"
         ></div>
      </a>
    </div>
  </div>
  )
}

export default ArticleImage