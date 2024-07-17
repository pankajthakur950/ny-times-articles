import React from 'react';
import { useLocation } from 'react-router-dom';

function ArticleDetail() {
    const { state } = useLocation();
    const { article } = state;
    return (
        <div className="my-8 mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className='border-2 border-gray-500'>
                    <img className="p-1 w-80 max-w-full" src={article?.image.metadata[2].url}/>
                </div>
                <div className='flex-1'>
                    <h1 className="font-satoshi text-2xl font-semibold text-gray-900">{article.title}</h1>
                    <p className='font-inter text-sm text-gray-700 mb-4'>
                        {article.abstract}
                    </p>
                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                        href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
                    
                    {/* <p className="font-inter text-sm font-medium text-gray-500 ">
                        {article.byline}
                    </p> */}
                </div>
            </div>
            <div className='mt-8'>
                <h3 className="font-satoshi text-lg font-semibold text-gray-900">
                    Article Details
                </h3>
                <p><span>Published: </span> {article.publishedDate}</p>
                <p><span>Author: </span>{article.byline}</p>
            </div>            
        </div>
    );

}

export default ArticleDetail;