import { resolve } from "path";
import { lazy } from "react";

// @ts-ignore
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // Так делать не нужно, для proda это нужно убрать
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1000)
}))




// import('./AboutPage')