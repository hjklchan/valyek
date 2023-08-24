import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import { fetchArticlesBySectionId, fetchArticlesByCategoryId, fetchCategoryBySectionId, fetchSection } from "@/api/blog/blog"
import { Article, CategoryItem, SectionInfo } from "@/api/blog";
import { hasToken } from "@/utils/tokenx";
import { duration } from "moment";

interface Category {
    id: number;
    title: string;
    numArticle: number;
}

const Detail = () => {
    const toast = useToast();
    const { sectionId } = useParams();
    const navigate = useNavigate();

    // ================================
    // ============ States ============
    // ================================
    const [categoryId, setCategoryId] = useState<string | null>(null);
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);
    const [sectionInfo, setSectionInfo] = useState<SectionInfo>({
        title: "",
        description: "",
        maintainers: "",
        numArticle: 0,
        categories: null,
    });

    // ==============================
    // ============ APIs ============
    // ==============================
    const getCategories = () => {
        fetchCategoryBySectionId(sectionId).then(res => {
            setCategories(res.data);
        })
    }
    const getSection = () => {
        fetchSection(sectionId).then(res => {
            const data = res.data;
            setSectionInfo(prevState => {
                return {
                    ...prevState,
                    title: data.title,
                    description: data.description,
                    maintainers: data.maintainers,
                    numArticle: data.numArticle,
                    categories: null,
                }
            });
        })
    }
    const getAllArticles = () => {
        fetchArticlesBySectionId(sectionId).then(res => {
            setArticles(res.data)
        });
    }

    // ==============================
    // ========== Eventss ===========
    // ==============================
    const createArticle = () => {
        if (hasToken()) {
            // redirect to article creating page
            navigate("/article/create", { state: { sectionId } });
        } else {
            toast({
                title: "Unable to create article",
                description: "Must be logged in first",
                duration: 2000,
                status: "warning",
                position: "top",
            })
        }
    }
    const onCategoryChange = (categoryId: string) => {
        fetchArticlesByCategoryId(categoryId).then(res => {
            setArticles(res.data);
        });
    }

    useEffect(() => {
        getSection();
        getCategories();
        // 默认获取所有文章
        getAllArticles();
    }, [])

    return <>
        <div className="mt-5">
            <h1 className="text-2xl font-semibold leading-none tracking-tight text-blue-800">
                {`< ${sectionInfo.title} >`}
                <span className="ml-3 text-base leading-none tracking-tight text-gray-400">
                    {sectionInfo.numArticle} result{sectionInfo.numArticle > 1 ? "s" : ""}
                </span>
            </h1>
            <div className="flex justify-between mt-5">
                <Button
                    borderRadius="0"
                    variant="outline"
                    size="sm"
                    onClick={() => createArticle()}
                >
                    <PlusIcon className="h-4 w-4" />&nbsp;
                    <span className="text-gray-600">发帖</span>
                </Button>
                <div className="space-x-2">
                    <span className="text-sm font-bold">1 / 5</span>
                    <Button size="sm" variant="outline" >
                        <ArrowLeftIcon className="font-bold h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                        <ArrowRightIcon className="font-bold h-3 w-3" />
                    </Button>
                </div>
            </div>
            <ul className="flex flex-wrap  gap-2 mt-3 text-xs">
                <li className="border-2 p-1 hover:bg-gray-200 hover:cursor-pointer" onClick={() => getAllArticles()}>全部</li>
                {
                    (categories.length) > 0
                        ? categories.map(item => {
                            return <li
                                className="border-2 p-1 hover:bg-gray-200 hover:cursor-pointer"
                                key={item.id}
                                onClick={() => onCategoryChange(item.id.toString())}
                            >
                                ◾ {item.title}<em className="text-red-600">&nbsp;({item.numArticle})</em>
                            </li>
                        })
                        : <></>
                }
            </ul>
            {/** List Component **/}
            <div className="mt-2">
                {/** Show Menu **/}
                <div className="bg-gray-100 p-1 space-x-2 text-xs mb-1">
                    <span className="cursor-pointer">最新</span>
                    <span className="cursor-pointer">热门</span>
                    <span className="cursor-pointer">精华</span>
                </div>
                {
                    articles.length > 0
                        ? <table className="table-fixed w-full border-none">{/** List **/}
                            <tbody>
                                {
                                    articles.map(item => {
                                        return <tr className="hover:bg-gray-100" key={item.id}>
                                            <td>
                                                <Link to="/" className="mr-2 text-sm text-blue-800">
                                                    [{item.categoryTitle}]
                                                </Link>
                                                <Link to={`/article/${item.id}`} className="text-sm">
                                                    {item.title}
                                                </Link>
                                            </td>
                                            <td className="w-1/12 text-sm">&nbsp;🔥{item.numHeat}</td>
                                            <td className="w-1/12 text-xs">
                                                <Link to="">{item.author}</Link><br />
                                                <span className="text-gray-600">{item.createdAt}</span>
                                            </td>
                                        </tr>
                                    })
                                }
                                {/*<tr className="hover:bg-gray-100">
                                    <td>
                                        <span className="mr-2 text-sm text-blue-800">
                                            [原创工具]
                                        </span>
                                        <Link to="" className="text-sm">ahahahahahahahhhh...</Link>
                                    </td>
                                    <td className="w-1/12 text-sm">🔥549</td>
                                    <td className="w-1/12 text-xs">
                                        illusion<br />
                                        2023-04-07
                                    </td>
                                </tr>*/}
                            </tbody>
                        </table>
                        : <div className="flex justify-center my-2">{/** Empty Text **/}
                            <span className="text-sm text-gray-400">No record</span>
                        </div>
                }
            </div>
        </div>
    </>
}

export default Detail;
