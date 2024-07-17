import { Article, ImageInfo } from "../interfaces/Article";
import { get } from "./api";
import { Endpoints } from "./endpoints";

export const getArticlesList = async (days = 1) => {
    const url = Endpoints.getArticles(days);
    const response = await get(url);

    const result: Article[] = response?.data?.results.map((item: { id: string; title: string; abstract: string; byline: string; url: string; published_date: string; media: { [x: string]: ImageInfo[]; }[]; }) => {
        return {
            id: item.id,
            title: item.title,
            abstract: item.abstract,
            byline: item.byline,
            url: item.url,
            publishedDate: new Date(item.published_date).toLocaleDateString(),
            image: {
                caption: item.media[0]?.caption,
                metadata: item.media[0]?.["media-metadata"].map((data) => {
                    return {
                        url: data.url,
                        format: data.format,
                        height: data.height,
                        width: data.width
                    };
                })
            }
        };
    }) || [];
    return result;
};
