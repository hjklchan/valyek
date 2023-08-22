import { httpGet } from "@/utils/netx/request"
import { CategoryItem, Section, SectionInfo, Article } from "."

const fetchSections = async () => {
    return (await httpGet<Section[]>("http://localhost:8080/api/sections")).data;
}

const fetchSection = async (sectionId: number | string | any) => {
    return (await httpGet<SectionInfo>("http://localhost:8080/api/sections/" + sectionId)).data
}

const fetchCategoryBySectionId = async (sectionId: any) => {
    return (await httpGet<CategoryItem[]>(`http://localhost:8080/api/categories/${sectionId}/section`)).data
}

const fetchArticlesByCategoryId = async (categoryId: string) => {
    let url = `http://localhost:8080/api/articles/${categoryId}/category`
    return (await httpGet<Article[]>(url)).data
}

const fetchArticlesBySectionId = async (sectionId: any) => {
    const url = `http://localhost:8080/api/articles/${sectionId}/section`;
    return (await httpGet<Article[]>(url)).data;
}

const fetchPopularPosts = () => {
    //
}

const fetchCategories = (sectionId: number | string | null) => {
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
    fetchCategoryBySectionId,
    fetchArticlesBySectionId,
    fetchArticlesByCategoryId,
    fetchPostsByCategory,
    fetchPostDetail
};
