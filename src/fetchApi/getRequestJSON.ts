const headers: Headers = new Headers();
const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

type GetRequestJSON = (url: string) => Promise<any>;
const getRequestJSON: GetRequestJSON = (url: string) => {
    return new Promise<Response>((resolve, reject) => {
        fetch(url, requestOptions).then(response => {
            return response.json();
        }).then(data => {
            resolve(data);
        })
    })
}

export default getRequestJSON;

