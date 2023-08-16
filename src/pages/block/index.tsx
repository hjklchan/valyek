import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

interface Category {
    id: number;
    title: string;
    numPost: number;
}

const Block = () => {
    const location = useLocation();
    const fakeCategories: Category[] = [
        {
            id: 1,
            title: "原创工具",
            numPost: 11021,
        },
        {
            id: 2,
            title: "原创汉化",
            numPost: 1
        },
        {
            id: 3,
            title: "Android 工具",
            numPost: 113,
        },
        {
            id: 4,
            title: "Android 汉化",
            numPost: 999,
        },
    ];
    const getPostsByCategory = (id: Category["id"]) => {
        // TODO Invoke API function
        console.log(id);
    }
    const createPost = () => {
        console.log("创建博文");
    }
    const numResults = 99999;
    useEffect(() => {
        const loc = location.pathname;
        console.log(loc);
    }, [])
    return <>
        <div className="mt-5">
            <h1 className="text-2xl font-semibold leading-none tracking-tight text-blue-800">
                {"< 软件区 >"}
                <span className="ml-3 text-base leading-none tracking-tight text-gray-400">
                    {numResults} result{numResults > 1 ? "s" : ""}
                </span>
            </h1>
            <div className="flex justify-between mt-5">
                <Button
                    borderRadius="0"
                    variant="outline"
                    size="sm"
                    onClick={() => createPost()}
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
                <li className="border-2 p-1 hover:bg-gray-200">全部</li>
                {
                    fakeCategories.length > 0
                        ? fakeCategories.map(item => {
                            return <li
                                className="border-2 p-1 hover:bg-gray-200 hover:cursor-pointer"
                                key={item.id}
                            >
                                ◾ {item.title}<em className="text-red-600">&nbsp;({item.numPost})</em>
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
                    true
                        ? <table className="table-fixed w-full border-none">{/** List **/}
                            <tbody>
                                <tr className="hover:bg-gray-100">
                                    <td>
                                        <Link to="/" className="mr-2 text-sm text-blue-800">
                                            [原创工具]
                                        </Link>
                                        <Link to="/post/1" className="text-sm">
                                            ahahahahahahahhhh...
                                        </Link>
                                    </td>
                                    <td className="w-1/12 text-sm">🔥1K</td>
                                    <td className="w-1/12 text-xs">
                                        <Link to="">illusion</Link><br />
                                        <span className="text-gray-600">2023-04-07</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
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

                                </tr>
                            </tbody>
                        </table>
                        : <div className="flex justify-center my-2">{/** Empty Text **/}
                            <span className="text-sm">No record</span>
                        </div>
                }
            </div>
        </div>
    </>
}

export default Block;
