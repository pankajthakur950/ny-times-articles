import React from 'react'
import { Article } from '../interfaces/Article'

function ArticleItem({ item }: { item: Article }) {
  return (
    <div className='article_item' data-article={item.id}>
      <div className='flex gap-4'>
        <img className="h-16 w-16" src={item?.image?.metadata?.[0].url}/>
        <div className='flex flex-col gap-2'>
          <h3 className='font-satoshi text-lg font-semibold text-gray-900 leading-2 flex gap-3 justify-between'>
            {item.title}
          </h3>
          <p className='font-inter text-sm text-gray-700'>{item.abstract}</p>
        </div>
      </div>
      <div className='flex justify-between items-start mt-4 font-inter text-sm font-medium text-gray-500'>
        <span>{item.publishedDate}</span>
        <span className='text-right w-2/3 '>{item.byline}</span>
      </div>
    </div>
  )
}

export default ArticleItem