import { Link, useLocation, useNavigate } from "react-router-dom";
import { defaultHomePath } from "@/routes"

interface Menu {
    label: string;
    to: string;
}

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigations: Menu[] = [
        { label: "Home", to: "/home" },
        { label: "Post", to: "/post" },
        { label: "Share", to: "/share" },
    ];
    const goHome = () => {
        navigate(defaultHomePath);
    }
    const selectedNavagition = (path: string) => {
        let extraClass = location.pathname == path
            ? "text-gray-800 underline"
            : "text-gray-500";
        return `block ${extraClass} hover:underline`
    }
    const headerGradientCss = () => {
        return "bg-gradient-to-b from-gray-100 via-gray-150 to-gray-200"
    }

    return <header
        className={`flex items-center flex-wrap bg-gray-100 shadow-md px-2 h-8 ${headerGradientCss()}`}
    >
        {/** Text Logo **/}
        <div className="flex items-center h-full text-gray-800 mr-3">
            <span
                className="font-bold text-xxl cursor-zoom-in transition duration-700 hover:skew-y-3"
                onClick={() => goHome()}
            >
                Valye0
            </span>
        </div>
        {/** Navigation **/}
        <nav className="">
            <div className="max-w-screen-xl px-2 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-4 text-sm">
                        {
                            navigations.map((item: Menu) => {
                                return <li key={item.label}>
                                    <Link
                                        className={selectedNavagition(item.to)}
                                        to={item.to}
                                    >{item.label}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}

// TODO
const DesktopNav = (navigations: any) => {
    return <></>
}

export default Header;

