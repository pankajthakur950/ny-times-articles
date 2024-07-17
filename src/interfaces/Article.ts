interface ImageInfo{
    url: string;
    format: string;
    height: number;
    width: number;
}

interface ArticleImage {
    caption: string;
    metadata: ImageInfo[]
}
export interface Article{
    id: string;
    title: string;
    url: string;
    abstract: string;
    byline: string;
    publishedDate: string;
    image?: ArticleImage
}