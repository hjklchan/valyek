import { EyeIcon } from "@heroicons/react/24/solid";

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
        { id: 10, category: "Go", title: "找出指定100个50位数之和的前十位数字" },
        { id: 11, category: "Go", title: "找出指定100个50位数之和的前十位数字" },
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
                <h2 className="bg-gray-200 p-1 text-sm">热门文章 Top 10</h2>
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
                <h2 className="bg-gray-200 p-1 text-sm">热门分享</h2>
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
                <h2 className="bg-gray-200 p-1 text-sm">锁定组件</h2>
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
                <h2 className="bg-gray-500 p-1 text-gray-300 text-sm">提交记录</h2>
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
        <div className="border-2">
            <h2 className="p-1 text-sm bg-gray-200">Photos</h2>
            <div className="p-1 text-sm">Put photos here....</div>
        </div>
        <div className="border">
            <h2 className="p-1 text-sm bg-gray-200">综合区块</h2>
            <table className="table-fixed w-full border-separate border-spacing-y-4">
                <tbody className="">
                    <tr className="h-18">
                        <td className="px-2">
                            <div className="items-center">
                                <span className="font-semibold text-blue-800 hover:underline cursor-pointer">{`< 软件区 >`}</span>
                                <span className="ml-2 text-sm text-gray-600">维护作者: valyek, illusion</span>
                            </div>
                            <div className="py-0">
                                <ul className="text-md">
                                    {
                                        fakePosts.map(item => {
                                            return <li key={item.id}>
                                                <a className="cursor-pointer hover:underline">美团前端研发框架Rome实践和演进趋势</a>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </td>
                        <td className="w-1/6">
                        </td>
                    </tr>
                    <tr className="h-18">
                        <td className="px-2">
                            <div className="items-center">
                                <span className="font-semibold text-blue-800 hover:underline cursor-pointer">{`< 编程区 >`}</span>
                                <span className="ml-2 text-sm text-gray-600">维护作者: valyek, illusion</span>
                            </div>
                            <div className="py-0">
                                <ul className="text-md">
                                    {
                                        fakePosts.map(item => {
                                            return <li key={item.id}>
                                                <a className="cursor-pointer hover:underline">美团前端研发框架Rome实践和演进趋势</a>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </td>
                        <td className="w-1/6">
                        </td>
                    </tr>
                    <tr className="h-18">
                        <td className="px-2">
                            <div className="items-center">
                                <span className="font-semibold text-blue-800 hover:underline cursor-pointer">{`< 软件调试区 >`}</span>
                                <span className="ml-2 text-sm text-gray-600">维护作者: valyek, illusion</span>
                            </div>
                            <div className="py-0">
                                <ul className="text-md">
                                    {
                                        fakePosts.map(item => {
                                            return <li key={item.id}>
                                                <a className="cursor-pointer hover:underline">美团前端研发框架Rome实践和演进趋势</a>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </td>
                        <td className="w-1/6">
                        </td>
                    </tr>
                    <tr className="h-18">
                        <td className="px-2">
                            <div className="items-center">
                                <span className="font-semibold text-blue-800 hover:underline cursor-pointer">{`< 病毒分析 >`}</span>
                                <span className="ml-2 text-sm text-gray-600">维护作者: valyek, illusion</span>
                            </div>
                            <div className="py-0">
                                <ul className="text-md">
                                    {
                                        fakePosts.map(item => {
                                            return <li key={item.id}>
                                                <a className="cursor-pointer hover:underline">美团前端研发框架Rome实践和演进趋势</a>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </td>
                        <td className="w-1/6">
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
}
