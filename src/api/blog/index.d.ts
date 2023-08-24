export interface Section {
    id: number;
    title: string;
    description: string;
    author: string | Array<string>;
    numArticle: number;
    numHeat: number;
    // latestUpdated: {
    //   id: number;
    //   title: string;
    //   author: string;
    //   updatedTime: string;
    // };
}

export interface Section {
    id: number;
    title: string;
    description: string;
    maintainers: string;
    numHeat: number;
    numArticle: number;
    articleTitle: string;
    articleAuthor: string;
    articleUpdatedAt: string;
}

export type SectionInfo = {
    title: string
    description: string
    maintainers: string
    numArticle: number
    categories: null
}

export interface CategoryItem {
    id: number;
    title: string;
    sectionId: number;
    numArticle: number;
}

export interface ArticleCategory {
    id: number;
    sectionId: number;
    title: string;
    numArticle: number;
}

export interface Article {
    id: number;
    categoryId: number;
    title: string;
    categoryTitle: string;
    numHeat: number;
    author: string;
    createdAt: Date;
}

export interface ArticleDetail extends Article {
    content: string;
}
