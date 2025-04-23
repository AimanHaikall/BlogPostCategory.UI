export interface UpdateBlogPost{
    title: string;
    shortDesc: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
    categories: string[];
}