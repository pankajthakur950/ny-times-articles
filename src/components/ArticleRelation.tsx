import React from 'react';
import Chips from './Chips';

interface ArticleRelationProps {
    title: string;
    values: string[];
}

function ArticleRelation({ title, values }: ArticleRelationProps) {
    return (
        <div className='flex gap-4 items-center my-4'>
            <h4 className='font-satoshi text-base font-medium text-gray-900'>{title}</h4>
            <div className='flex gap-2'>
                {values.map((value:string)=>{
                    return <Chips key={value} value={value}/>;
                })}
            </div>
        </div>
    );
}
export default ArticleRelation;