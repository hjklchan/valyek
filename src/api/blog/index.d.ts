
export interface Block {
    id: number;
    title: string;
    description: string;
    author: string | Array<string>;
    numPost: number;
    numHeat: number;
    latestUpdated: {
        id: number;
        title: string;
        author: string;
        updatedTime: string;
    }
}

export interface PostCategory {
    id: number;
    blockId: number;
    title: string;
    numPost: number;
}

export interface Post {
    id: number;
    categoryId: number;
    title: string;
    numHeat: number;
    author: string;
    createdTime: string;
}

export interface PostDetail extends Post {
    content: string;
}

