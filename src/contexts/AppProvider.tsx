import React from "react";

// AppType 上下文类型
export interface AppType {
    gloading: boolean;
    toggleGloading: (gloading: boolean) => void;
}

// initialData 初始化数据
const initialData: AppType = {
    gloading: false,
    toggleGloading: () => { },
}

// AppContext 创建上下文实例
export const AppContext = React.createContext<AppType>(initialData);

// AppProvider 返回 Provider 实例
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [gloading, setGloading] = React.useState<boolean>(false);
    const toggleGloading = (gloading: boolean): void => {
        setGloading(!gloading);
    }
    const value = {
        gloading,
        toggleGloading,
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

// 封装 Context 为 Hooks
export const useApp = () => React.useContext(AppContext);
