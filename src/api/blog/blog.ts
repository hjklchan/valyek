import { httpGet, httpPost } from "@/utils/netx/request"
import { CategoryItem, Section, SectionInfo, Article, ArticleDetail, CreateSectionParameters } from "."

export const fetchSections = async () => {
    return (await httpGet<Section[]>("http://localhost:8080/api/sections")).data;
}

export const fetchSection = async (sectionId: number | string | any) => {
    return (await httpGet<SectionInfo>("http://localhost:8080/api/sections/" + sectionId)).data
}

export const fetchCategoryBySectionId = async (sectionId: any) => {
    return (await httpGet<CategoryItem[]>(`http://localhost:8080/api/categories/${sectionId}/section`)).data
}

export const fetchArticlesByCategoryId = async (categoryId: string) => {
    let url = `http://localhost:8080/api/articles/${categoryId}/category`
    return (await httpGet<Article[]>(url)).data
}

export const fetchArticlesBySectionId = async (sectionId: any) => {
    const url = `http://localhost:8080/api/articles/${sectionId}/section`;
    return (await httpGet<Article[]>(url)).data;
}

export const storeArticle = async<T>(values: T) => {
    const url = "http://localhost:8080/api/articles"
    return (await httpPost<{ newId: number }>(url, values)).data
}

export const fetchArticleById = async (articleId: string) => {
    const url = `http://localhost:8080/api/articles/${articleId}`;
    return (await httpGet<ArticleDetail>(url)).data;
}

export const fetchArticlesByType = async(type?: string) => {
    const url = `http://localhost:8080/api/articles`
    if (type) {
        url + `?${type}`
    }
    return (await httpGet<Article[]>(url)).data;
}

export const storeSection = async(values: CreateSectionParameters) => {
    const url = `http://localhost:8080/api/sections`;
    return (await (httpPost(url, values))).data;
}

export const fetchPopularPosts = () => {
    //
}

export const fetchCategories = (sectionId: number | string | null) => {
}

export const fetchPostsByCategory = () => {
    //
}

export const fetchPostDetail = () => {
    //
}

