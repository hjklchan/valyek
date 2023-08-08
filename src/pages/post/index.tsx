import { useNavigate } from "react-router-dom";

interface Category {
    id: number;
    title: string;
}

interface Post {
    id: number;
    title: string;
    watch: number;
}

const Post = () => {
    const navigate = useNavigate();
    const categories: Category[] = [
        { id: 1, title: "自然" },
        { id: 2, title: "科技" },
        { id: 3, title: "前端" },
        { id: 4, title: "后端" },
        { id: 5, title: "开发工具" },
        { id: 6, title: "综合" },
    ];
    const getPostsByCategory = (id: Category["id"]) => {
        // TODO Invoke API function
        console.log(id);
    }
    const gotoPost = (id: number) => {
        navigate("/post/1");
    }
    const numResults = 99999;
    return <>
        {/** Categories **/}
        <div className="grid grid-cols-12 gap-x-2 gap-y-1">
            {
                categories.map((item: Category) => (
                    <div key={item.id}>
                        <a
                            className="cursor-pointer"
                            onClick={() => getPostsByCategory(item.id)}>
                            {item.title}
                        </a>
                    </div>
                ))
            }
        </div>
        {/** Post List **/}
        <div className="mt-5">
            <h1 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                Posts
                <span className="ml-3 text-base leading-none tracking-tight text-gray-400">
                    {numResults} result{numResults > 1 ? "s" : ""}
                </span>
            </h1>
            {/** List Component **/}
            <div className="mt-10">
                <table className="table-fixed w-full">
                    <thead>
                        <tr>
                            <th className="w-1/2">Title</th>
                            <th>Author</th>
                            <th>Update Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a>hello...</a></td>
                            <td><a>hello...</a></td>
                            <td><a>hello...</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default Post;
