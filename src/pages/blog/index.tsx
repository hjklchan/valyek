import { useEffect, useState } from "react";
import { fetchSections } from "@/api/blog/blog";
import { log } from "console";
import { Link } from "react-router-dom";
import { Section } from "@/api/blog/index.d";

const Blog = () => {
    const [sections, setSections] = useState<Section[] | null>(null);
    const fakeArticles: { id: number; category: string; title: string }[] = [
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
    const getSectionsApi = () => {
        fetchSections().then((value) => {
            setSections(value.data);
        });
    };

    useEffect(() => {
        getSectionsApi();
    }, []);

    const isLock = true;
    return (
        <div className="space-y-3">
            {/*<div className="grid grid-cols-4 gap-0 border-2">
                <div className="">
                    <h2 className="bg-gray-200 p-1 text-sm cursor-pointer">
                        热门文章 Top 10
                    </h2>
                    <table className="w-full">
                        <tbody>
                            {fakeArticles.length > 0 ? (
                                fakeArticles.map((item) => {
                                    return (
                                        <tr className="" key={item.id}>
                                            <td className="w-3/4 px-1 text-sm hover:bg-gray-100">
                                                <a className="cursor-pointer" onClick={() => { }}>
                                                    <b className="mr-1">[{item.category}]</b>
                                                </a>
                                                <a className="cursor-pointer" onClick={() => { }}>
                                                    {item.title}
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <>No records</>
                            )}
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
                    <h2 className="bg-gray-200 p-1 text-sm">板块</h2>
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
            </div>*/}
            <div className="border-2">
                <h2 className="p-1 text-sm bg-gray-200">Photos</h2>
                <div className="p-1 text-sm h-32">Put photos here....</div>
            </div>
            <div className="border">
                <h2 className="p-1 text-sm bg-gray-200">综合区块</h2>
                <table className="table-fixed w-full border-separate border-spacing-y-2">
                    <tbody>
                        {sections?.map((item) => {
                            console.log(item)
                            return sectionRow(item);
                        })}

                        {/* <tr className="h-18 hover:bg-gray-100">
              <td className="px-2 space-y-1">
                <div className="items-center">
                  <span className="font-semibold text-blue-800 hover:underline cursor-pointer">{`< 原创区 >`}</span>
                  &nbsp;<em className="text-sm text-red-500">(988)</em>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    ◇&nbsp;讨论操作系统底层或系统软件的漏洞分析、也包含游戏安全等相关话题！&nbsp;◇
                  </p>
                </div>
                <div className="text-xs text-gray-500">
                  维护作者: valyek, illusion
                </div>
              </td>
              <td className="w-1/12 text-sm">🔥136</td>
              <td className="w-2/12">
                <h4 className="text-xs w-11/12 truncate">
                  <a className="cursor-pointer hover:underline">
                    【2023/8/9更新】计时器提醒 倒计时 间隔任务提醒
                    消息框与AI语音播报
                  </a>
                </h4>
                <span className="text-xs">
                  2023-12-30{" "}
                  <a className="cursor-pointer hover:underline">authorName</a>
                </span>
              </td>
            </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const sectionRow = (section: Section) => {
    return (
        <tr key={section.id} className="h-18 hover:bg-gray-100">
            <td className="px-2 space-y-1">
                <div className="items-center">
                    <Link
                        to={`/section/${section.id}`}
                        className="font-semibold text-blue-800 hover:underline cursor-pointer"
                    >
                        {`< ${section.title} >`}
                    </Link>
                    &nbsp;<em className="text-sm text-red-500">({section.numArticle})</em>
                </div>
                <div>
                    <p className="text-sm text-gray-500">
                        ◇&nbsp;{section.description}&nbsp;◇
                    </p>
                </div>
                <div className="text-xs text-gray-500">
                    维护作者: {section.maintainers}
                </div>
            </td>
            {/** Format number of heat to *K **/}
            <td className="w-1/12 text-sm">🔥{section.numHeat}</td>
            <td className="w-2/12">
                <h4 className="text-xs w-11/12 truncate">
                    <a className="cursor-pointer hover:underline">
                        {"null title"}
                    </a>
                </h4>
                <span className="text-xs">
                    {"null updated time"}
                    <a className="cursor-pointer hover:underline">
                        {"null author name"}
                    </a>
                </span>
            </td>
        </tr>
    );
};

export default Blog;
