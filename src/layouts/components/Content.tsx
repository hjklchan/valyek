import React, { useState } from "react";

// Content
const Content = ({ children }: { children: React.ReactNode }) => {
    const [timer, setTimer] = useState()
    return <main className="container mx-auto px-2 mt-4 mb-8" role="main" style={{minHeight: "100%"}}>
        <div className="my-2">
            {children}
        </div>
    </main>
}

export default Content;
