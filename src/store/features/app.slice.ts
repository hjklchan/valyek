import { appRouter } from "@/routes";
import { createSlice } from "@reduxjs/toolkit";

export type Menu = {
    id: number;
    title: string;
    icon?: string;
}

export type AppState = {
    appName: string;
    menus: Menu[];
} 

const initialState: AppState = {
    appName: "valye98",
    menus: [],
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
})

export default appSlice.reducer;
