import { useEffect, useState } from "react";
import { fetchArticleById } from "@/api/blog/blog";
import { useParams } from "react-router-dom";
import { ArticleDetail } from "@/api/blog";
import { argv0 } from "process";

const Detail = () => {
    const { articleId } = useParams();

    // ======================
    // ======= States =======
    // ======================
    const [loading, setLoading] = useState<boolean>(false);
    const [article, setArticle] = useState<ArticleDetail>({
        id: 0,
        categoryId: 0,
        title: "",
        categoryTitle: "",
        numHeat: 0,
        author: "",
        content: "",
        createdAt: new Date("0000-00-00 00:00:00"),
    })

    // ======================
    // ======== APIs ========
    // ======================
    const getArticle = () => {
        setLoading(true);
        if (articleId != undefined) {
            fetchArticleById(articleId).then(res => {
                setLoading(false);
                setArticle(res.data);
            }).catch(error => {
                setLoading(false);
            })
        }
    }

    // =======================
    // ======= Handles =======
    // =======================
    const handleDatetime = (date: Date): string => {
        const dt = new Date(date);
        return dt.toUTCString()
    }

    useEffect(() => {
        getArticle();
    }, [])

    return <>
        {/** Article Title **/}
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <div className="space-x-3 my-1">
            <span className="text-sm text-gray-500">By <b>{article.author}</b></span>
            <span className="text-sm text-gray-500">{handleDatetime(article.createdAt)}</span>
        </div>
        {/** Article Main Content **/}
        <article className="prose max-w-none min-h-50 hover:prose-a:text-blue-500 prose-neutral p-1">
            {
                article.content.length > 0
                    ? <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    : <>No content...</>
            }
        </article>
        <div className="my-5">
            <h3 className="bg-gray-200 text-md px-1">Comment(s)</h3>
            {/** Article Comment **/}
        </div>
    </>
}

export default Detail;
