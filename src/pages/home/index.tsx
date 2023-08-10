import { LockClosedIcon } from "@heroicons/react/24/solid";
import { argv0 } from "process";

export default function() {
    const fakePosts: { id: number, category: string, title: string }[] = [
        { id: 1, category: "PHP", title: "PHP is a best language in the world" },
        { id: 2, category: "React", title: "Can you hear my heart beating?" },
        { id: 4, category: "Typescript", title: "I cant stop now" },
        { id: 5, category: "Typescript", title: "I cant stop now" },
        { id: 6, category: "Typescript", title: "I cant stop now" },
        { id: 7, category: "Go", title: "找出指定100个50位数之和的前十位数字" },
        { id: 8, category: "Go", title: "找出指定100个50位数之和的前十位数字" },
        { id: 9, category: "Go", title: "找出指定100个50位数之和的前十位数字" },
        // { id: 10, category: "Go", title: "找出指定100个50位数之和的前十位数字" },
        // { id: 11, category: "Go", title: "找出指定100个50位数之和的前十位数字" },
    ];
    const renderPostList = () => {
        // Loop <td> tags
        if (fakePosts.length <= 0) {
            return <>No records</>
        } else {
            return <>
                {
                    fakePosts.map(item => {
                        <td key={item.id}>{item.title}</td>
                    })
                }
            </>
        }
    }
    const isLock = true;
    return <div className="space-y-3">
        <div className="grid grid-cols-4 gap-0 border-2">
            <div className="">
                <h2 className="bg-gray-100 p-1 text-sm">热门文章</h2>
                <table className="w-full">
                    <tbody>
                        {
                            fakePosts.length > 0
                                ? fakePosts.map(item => {
                                    return <tr className="" key={item.id}>
                                        <td className="w-3/4 px-1 text-sm hover:bg-gray-100">
                                            <a className="cursor-pointer" onClick={() => { }}>
                                                <b className="mr-1">[{item.category}]</b>
                                            </a>
                                            <a className="cursor-pointer" onClick={() => { }}>
                                                {item.title}
                                            </a>
                                        </td>
                                    </tr>
                                })
                                : <>No records</>
                        }
                    </tbody>
                </table>
            </div>
            <div className="">
                <h2 className="bg-gray-100 p-1 text-sm">热门分享</h2>
                <table className="w-full">
                    <tbody>
                        <tr className="">
                            <td className="w-3/4 px-1 text-sm">
                                <b className="mr-1">[PHP]</b>...
                            </td>
                            <td className="text-right text-xs">{">>"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="">
                <h2 className="bg-gray-100 p-1 text-sm">锁定组件</h2>
                <table className="w-full">
                    <tbody>
                        <tr className="">
                            <td className="w-3/4 px-1 text-sm">
                                <b className="mr-1">[PHP]</b>...
                            </td>
                            <td className="text-right text-xs">{">>"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2 className="bg-gray-100 p-1 text-sm">锁定组件</h2>
                <table className="w-full">
                    <tbody>
                        <tr className="">
                            <td className="w-3/4 px-1 text-sm">
                                <b className="mr-1">[PHP]</b>...
                            </td>
                            <td className="text-right text-xs">{">>"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h2>New section</h2>
    </div>
}
