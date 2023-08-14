import { Link, useLocation, useNavigate } from "react-router-dom";
import { defaultHomePath } from "@/routes"
import { UserIcon, CogIcon } from "@heroicons/react/24/solid";

interface Menu {
    label: string;
    to: string;
}

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const menu: Menu[] = [
        { label: "Home", to: "/home" },
        { label: "Post", to: "/post" },
        { label: "Share", to: "/share" },
    ];
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
        className={`sticky top-0 max-w-screen flex justify-between items-center shadow-md px-2 h-8 ${headerGradientCss()}`}
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
                                    return <li key={item.label}>
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
            />
            <UserIcon
                className="transition h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600 duration-150"
                onClick={() => { }}
            />
        </div>
    </header>
}

// TODO
const DesktopNav = (navigations: any) => {
    return <></>
}

export default Header;

