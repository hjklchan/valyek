import React, { useEffect, useState } from "react";
import { MegaphoneIcon } from "@heroicons/react/20/solid";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import moment from "moment";
import { useApp } from "@/contexts/AppProvider";
import { Spinner } from "@chakra-ui/react";

const AppLayout = () => {
    const {gloading} = useApp();
    const [timePeriod, setTimePeriod] = useState<string>("")
    const initialTimePeriod = () => {
        // TODO This initial action need to be wrapped separately
        moment.updateLocale("zh-cn", {
            meridiem: function(hour, minute, isLowercase) {
                if (hour < 9) {
                    return "早上";
                } else if (hour < 11) {
                    return "上午";
                } else if (hour < 13) {
                    return "中午";
                } else if (hour < 18) {
                    return "下午";
                } else {
                    return "晚上";
                }
            }
        })
        const r = moment().format("A");
        setTimePeriod(r);
    }
    useEffect(() => {
        initialTimePeriod();
    }, []);
    return <React.Fragment>
        <Header />
        <div className="flex justify-between px-2 mt-2 flex text-xs">
            <div className="flex">
                <div className="lg:text-md mr-3 text-gray-400">{timePeriod}</div>
                <div className="">{gloading ? <Spinner size="xs" color="green.500" /> : ""}</div>
                {/*<div className="lg:text-md mr-1">☀</div>
                <div className="lg:text-md">
                    <span className="text-green-600">29℃</span>
                    <span className="">~</span>
                    <span className="text-orange-600">35℃</span>
                </div>*/}
            </div>
            <div className="flex items-center">
                <MegaphoneIcon className="h-3 w-3" />
                <span className="ml-2">这是会滚动的公告</span>
            </div>
        </div>
        <Content><Outlet /></Content>
        <Footer />
    </React.Fragment>
}

export { AppLayout };
