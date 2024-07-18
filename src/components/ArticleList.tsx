import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getArticlesList } from '../services/articles.service';
import ArticleItem from './ArticleItem';
import RadioButtonPills from './RadioButtonPills/index';
import ListSkeleton from './Skelton';
import { useFetchData } from '../hooks/useFetchData';
import { Article } from '../interfaces/Article';
import { ArticleTimeLine } from '../enums/Articles';

function ArticleList() {
    const navigate = useNavigate();
    const [daysData, setDaysData] = useState(ArticleTimeLine.Day);
    const { data: items, isLoading, isError } = useFetchData<Article[]>(() => getArticlesList(daysData), [`articles-${daysData}`]);

    if (isError) {
        return (
            <div aria-live="polite">
                <p>Error fetching data. Please try again later.</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    /**
     * Handles the click event on an article item.
     * Retrieves the article ID from the clicked element's data attribute 
     * and navigates to the article detail page.
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e - The click event object.
     */
    const onArticleItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const targetElement = e.target as HTMLDivElement;
        if (targetElement.classList.contains('article_item')) {
            const articleId = targetElement.getAttribute("data-article");
            const clickedArticle = items?.find((item =>
                item.id.toString() === articleId));
            if (clickedArticle) {
                navigate(`/detail/${articleId}`, { state: { article: clickedArticle } });
            }
        }
    };

    return (
        <div>
            <div className='articles-duration flex justify-end mt-8'>
                <RadioButtonPills
                    name="articles-days-history"
                    options={[
                        { text: "Day", value: ArticleTimeLine.Day },
                        { text: "Week", value: ArticleTimeLine.Week },
                        { text: "Month", value: ArticleTimeLine.Month }
                    ]}
                    selection={daysData}
                    onChange={(value: ArticleTimeLine) => { setDaysData(value); }}
                />
            </div>
            <div data-testid="articles" 
                role="list"
                className='articles-container' 
                onClick={onArticleItemClick}>
                {
                    isLoading && <ListSkeleton count={8} />
                }
                {
                    items?.map((item: Article) => {
                        return (
                            <ArticleItem key={item.id} item={item} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ArticleList;