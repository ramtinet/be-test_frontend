import globalConstants from "./globalConstants.json";
const baseUrl: string = (process.env.NODE_ENV === 'development') ? globalConstants.dev_baseUrl : globalConstants.baseUrl;

export {
    baseUrl
}
