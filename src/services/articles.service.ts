import { title } from "process";
import { Article } from "../interfaces/Article";
import { get } from "./api";
import { Endpoints } from "./endpoints"

export const getArticlesList = async (days = 1) => {
    const url = Endpoints.getArticles(days);
    const response = await get(url);
    try {
        const result: Article[] = response?.data?.results.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                abstract: item.abstract,
                byline: item.byline,
                url: item.url,
                publishedDate: new Date(item.published_date).toLocaleDateString(),
                image: {
                    caption: item.media[0]?.caption,
                    metadata: item.media[0]?.["media-metadata"].map((data: any) => {
                        return {
                            url: data.url,
                            format: data.format,
                            height: data.height,
                            width: data.width
                        }
                    })
                }
            }
        }) || [];
        return result;
    } catch (err) {
        throw err;
    }
}