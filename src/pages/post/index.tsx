import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

interface Category {
    id: number;
    title: string;
}

const Post = () => {
    const location = useLocation();
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
                    <span className="text-gray-600">发帖</span>
                </Button>
                <div className="space-x-1">
                    <Button size="sm" variant="outline" >
                        <ArrowLeftIcon className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                        <ArrowRightIcon className="h-3 w-3" />
                    </Button>
                </div>
            </div>
            <ul className="grid grid-flow-col auto-cols-max gap-2 mt-3">
                <li className="border-2 text-xs p-1 hover:bg-gray-200">全部</li>
                <li className="border-2 text-xs p-1 hover:bg-gray-200">
                    原创工具<em className="text-red-600">&nbsp;(11012)</em>
                </li>
                <li className="border-2 text-xs p-1 hover:bg-gray-200">
                    原创汉化<em className="text-red-600">&nbsp;(1)</em>
                </li>
                <li className="border-2 text-xs p-1 hover:bg-gray-200">
                    Android工具<em className="text-red-600">&nbsp;(112)</em>
                </li>
                <li className="border-2 text-xs p-1 hover:bg-gray-200">
                    Android汉化<em className="text-red-600">&nbsp;(999)</em>
                </li>
            </ul>
            {/** List Component **/}
            <div className="mt-2">
                <div className="bg-gray-100 p-1 space-x-1 text-xs">
                    <span className="">最新</span>
                    <span className="">热门</span>
                    <span className="">精华</span>
                </div>
                {
                    true
                        ? <table className="table-fixed w-full border-separate">
                            <tbody>
                                <tr className="hover:bg-gray-100 h-10">
                                    <td>
                                        <span className="mr-2 text-md">[原创工具]</span>
                                        <span className="text-sm">ahahahahahahahhhh...</span>
                                    </td>
                                    <td className="w-1/12 text-sm">🔥1K</td>
                                    <td className="w-1/12 text-xs">
                                        illusion<br />
                                        2023-04-07
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td>
                                        <span className="mr-2 text-md">[原创工具]</span>
                                        <span className="text-sm">ahahahahahahahhhh...</span>
                                    </td>
                                    <td className="w-1/12 text-sm">🔥549</td>
                                    <td className="w-1/12 text-xs">
                                        illusion<br />
                                        2023-04-07
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        : <div className="flex justify-center my-2">
                            <span className="text-sm">No record</span>
                        </div>
                }
            </div>
        </div>
    </>
}

export default Post;
