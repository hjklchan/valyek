import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { defaultHomePath } from "@/routes"
import { UserIcon, CogIcon } from "@heroicons/react/24/solid";
import { Avatar, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, useDisclosure } from "@chakra-ui/react";

interface Menu {
    key: string;
    label: string;
    to: string;
}

interface ArticleSimpleItem {
    id: number;
    title: string;
}

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useDisclosure();
    const setting = useDisclosure();
    const userBtnRef = useRef(null);
    const settingBtnRef = useRef(null);

    const menu: Menu[] = [
        { key: "blog", label: "Blog", to: "/blog" },
        { key: "share", label: "Share", to: "/share" },
        { key: "collection", label: "Collection", to: "/collection" },
        { key: "about", label: "About", to: "/about" },
    ];
    const userMenu: Menu[] = [
        { key: "profile", label: "Profile", to: "" },
        { key: "articles", label: "Articles", to: "" },
        { key: "stars", label: "Stars", to: "" },
    ];
    const userArticles: ArticleSimpleItem[] = [
        { id: 1, title: "求赵爱林老师2023年一级建造师建筑实物6套模拟卷" },
        { id: 2, title: "抖音 V16.4.9 谷歌商店最新版，清爽，无广告 95.4M大小" },
        { id: 3, title: "《千门八将 1 八将聚首》+《千门八将 2 永乐大典》+《千门八将 3 千手观音》" },
        { id: 4, title: "前几天大佬发的一款web端局域网文档管理系统显示已删帖，请问系统的默认口令是什么" },
        { id: 5, title: "CVE-2022-42475 FortiGate SSLVPN 堆溢出漏洞研究" },
    ]

    const headerGradientCss = () => {
        return "bg-gradient-to-b from-gray-100 via-gray-150 to-gray-200"
    }
    const goHome = () => {
        navigate(defaultHomePath);
    }
    const selectedMenu = (path: string) => {
        let extraClass = location.pathname == path
            ? "text-gray-800 underline"
            : "text-gray-500";
        return `block ${extraClass} hover:underline`
    }
    // const 

    return <header
        className={`sticky top-0 z-[999] max-w-screen flex justify-between items-center shadow-md px-2 h-8 ${headerGradientCss()}`}
    >
        {/** Text Logo **/}
        <div className="flex items-center h-full text-gray-800 mr-3">
            <div>
                <span
                    className="text-xxl font-bold cursor-pointer text-bold text-gray-700"
                    onClick={() => goHome()}
                >Valye98</span>
            </div>
            {/** Navigation **/}
            <nav className="ml-2">
                <div className="px-2 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-4 text-sm">
                            {
                                menu.map((item: Menu) => {
                                    return <li key={item.key}>
                                        <Link
                                            className={selectedMenu(item.to)}
                                            to={item.to}
                                        >{item.label}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="flex w-auto space-x-1">
            <CogIcon
                className="transition h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600 duration 150"
                onClick={setting.onOpen}
                ref={settingBtnRef}
            />
            <Drawer
                isOpen={setting.isOpen}
                placement="right"
                onClose={setting.onClose}
                finalFocusRef={settingBtnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>Setting</DrawerHeader>
                </DrawerContent>
            </Drawer>

            <UserIcon
                className="transition h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600 duration-150"
                onClick={user.onOpen}
                ref={userBtnRef}
            />
            <Drawer
                isOpen={user.isOpen}
                placement="right"
                onClose={user.onClose}
                finalFocusRef={userBtnRef}
                size="xs"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <div className="space-y-5">
                            {/** Avatar **/}
                            <div className="mt-5 space-x-2">
                                <Avatar size="md" src="https://bit.ly/prosper-baba" />
                                <span className="font-bold">Illus1onnn</span>
                            </div>
                            {/** Menu List **/}
                            <div>
                                <ul>
                                    {
                                        userMenu.map(item => {
                                            return <li key={item.key} className="hover:border-r">
                                                <Link
                                                    to={item.to}
                                                    className="text-xl hover:text-gray-500 hover:underline"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            {/** 最近发布的前五篇文章 **/}
                            <div>
                                <h1 className="text-md font-semibold">最近发布的文章</h1>
                                <ul>
                                    {
                                        userArticles.map((item, key) => {
                                            return <li
                                                key={item.id}
                                                className="my-1 text-sm truncate ..."
                                            >
                                                <Link to="" className="hover:underline">{++key}.{item.title}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-md font-semibold">其他内容尽情期待</h1>
                                ...
                            </div>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </div>
    </header>
}

// TODO
const DesktopNav = (navigations: any) => {
    return <></>
}

export default Header;

