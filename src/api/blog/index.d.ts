export interface Block {
  id: number;
  title: string;
  description: string;
  author: string | Array<string>;
  numArticle: number;
  numHeat: number;
  latestUpdated: {
    id: number;
    title: string;
    author: string;
    updatedTime: string;
  };
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

export interface ArticleCategory {
  id: number;
  blockId: number;
  title: string;
  numArticle: number;
}

export interface Article {
  id: number;
  categoryId: number;
  title: string;
  numHeat: number;
  author: string;
  createdTime: string;
}

export interface ArticleDetail extends Article {
  content: string;
}
