import React from 'react'
import { Article } from '../interfaces/Article'

function ArticleItem({item}:{item:Article} ){
  return (
    <div className='article_item' data-article={item.id}>
        <div className='flex flex-col gap-2'>
            <h3 className='font-satoshi text-lg font-semibold text-gray-900 leading-2 flex gap-3 justify-between'>
                <span>{item.title}</span>
                <span className='font-inter text-sm text-gray-500 leading-7 font-medium'>{item.publishedDate}</span>
            </h3>
            <p className='font-inter text-sm text-gray-700'>{item.abstract}</p>
        </div>
        <p className='font-inter text-sm self-end font-medium text-gray-500 text-right mt-4 w-2/3 '>{item.byline}</p>
    </div>
  )
}

export default ArticleItem