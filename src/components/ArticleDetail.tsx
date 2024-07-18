import React from 'react';
import { useLocation } from 'react-router-dom';
import ArticleRelation from './ArticleRelation';
import { Article } from '../interfaces/Article';

function ArticleDetail() {
    const { state } = useLocation();
    const { article }: { article: Article } = state;
    return (
        <div className="my-8 mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className='border-2 border-gray-500'>
                    <img className="p-1 w-80 max-w-full" 
                        src={article?.image?.metadata[2].url} 
                        alt={article?.image?.caption}/>
                </div>
                <div className='flex-1'>
                    <h1 className="font-satoshi text-2xl font-semibold text-gray-900">{article.title}</h1>
                    <p className='font-inter text-sm text-gray-700 mb-4'>
                        {article.abstract}
                    </p>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className="font-satoshi text-lg font-semibold text-gray-900">
                    Article Details
                </h3>
                <p><span className='font-satoshi text-base font-medium text-gray-900'>Published: </span> {article.publishedDate}</p>
                <p><span className='font-satoshi text-base font-medium text-gray-900'>Author: </span>{article.byline}</p>
                {
                    article.organizationFacets &&
                    <ArticleRelation title="Related Organizations" values={article.organizationFacets} />
                }
            </div>
        </div>
    );

}

export default ArticleDetail;