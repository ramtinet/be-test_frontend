import getRequest from "../fetchApi/getRequestJSON";
import postRequestJSON from "../fetchApi/postRequestJSON";
import getRequestJSON from "../fetchApi/getRequestJSON";

const baseUrl = "http://localhost:9000/mail/"

type Mail = {
    message: string,
    recipient: string,
    prio: boolean,
}
type GetMail = (name: string) => Promise<Mail[]>;
const getMail: GetMail = (name) => {
    const url: string = `${baseUrl}${name}`;
    return getRequestJSON(url);
}

type SendMail = (mail: Mail) => Promise<Mail>;
const sendMail: SendMail = (mail: Mail) => {
    const url: string = baseUrl;
    return postRequestJSON(url, mail);
}

type CreateMail = (recipient: string, message: string, prio?: boolean) => Mail;
const createMail: CreateMail = (recipient, message, prio = true) => {
    const mail: Mail = {recipient, message, prio};
    return mail;
}

export {getMail, sendMail, createMail};
export type {Mail};
