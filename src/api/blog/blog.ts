import { httpGet } from "@/utils/netx/request"
import { BlockV1 } from "."

const fetchBlocks = async () => {
    return (await httpGet<BlockV1[]>("http://localhost:8080/api/blocks")).data;
}

const fetchPopularPosts = () => {
    //
}

const fetchCategories = () => {
    //
}

const fetchPostsByCategory = () => {
    //
}

const fetchPostDetail = () => {
    //
}

export {
    fetchBlocks,
    fetchPopularPosts,
    fetchCategories,
    fetchPostsByCategory,
    fetchPostDetail
};
