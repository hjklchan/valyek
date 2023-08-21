import { httpGet } from "@/utils/netx/request"
import { Section } from "."

const fetchSections = async () => {
    return (await httpGet<Section[]>("http://localhost:8080/api/sections")).data;
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
    fetchSections,
    fetchPopularPosts,
    fetchCategories,
    fetchPostsByCategory,
    fetchPostDetail
};
