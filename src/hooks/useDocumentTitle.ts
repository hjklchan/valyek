import { useEffect } from "react";

const useDocumentTitle = (title: string): void => {
    useEffect(() => {
        document.title = title + " - " + "valye98";
    }, [])
}

export { useDocumentTitle } 
