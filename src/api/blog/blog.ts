import { httpGet } from "@/utils/netx/request"
import { ArticleCategory, Section } from "."

const fetchSections = async () => {
    return (await httpGet<Section[]>("http://localhost:8080/api/sections")).data;
}

const fetchSection = async (sectionId: number | string) => {
    return (await httpGet<Section[]>("http://localhost:8080/api/sections/" + sectionId)).data
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
    fetchSection,
    fetchSections,
    fetchPopularPosts,
    fetchCategories,
    fetchPostsByCategory,
    fetchPostDetail
};
