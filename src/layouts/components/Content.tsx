import React, { useState } from "react";

// Content
const Content = ({ children }: { children: React.ReactNode }) => {
    const [timer, setTimer] = useState()
    return <main className="container w-screen px-4 mt-4 mb-8">
        {/** weather and datetime **/}
        <div className="flex space-x-4">
            <span className="">2023-08-08 14:24</span>
            <span className="">☀ 20℃~35℃</span>
            <span className="">下午好</span>
        </div>
        <div className="my-6">
            {children}
        </div>
    </main>
}

export default Content;
