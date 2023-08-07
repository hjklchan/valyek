import { Link } from "react-router-dom";

export default function() {
    const navigations = [
        { label: "Home", to: "/home" },
        { label: "Post", to: "/post" },
        { label: "Share", to: "/share" },
    ];
    return <header className="flex items-center justify-start flex-wrap bg-gray-100 px-4 h-8">
        {/** Text Logo **/}
        <div className="flex items-center h-full text-gray-800 mr-3">
            <span className="font-bold text-xxl tracking-tight">Valye0</span>
        </div>
        {/** Navigation **/}
        <nav className="">
            <div className="max-w-screen-xl px-2 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-4 text-sm">
                        {
                            navigations.map((item: any) => {
                                return <li>
                                    <Link className="block hover:underline" to={item.to}>{item.label}</Link>
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

