const headers: Headers = new Headers();
headers.append("Content-Type", "application/json");

type GetRequestOptions = (jsonData: any) => RequestInit;
const getRequestOptions: GetRequestOptions = (jsonData: any) => {
    return {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(jsonData),
        redirect: 'follow'
    };
}


type PostRequestJSON = (url: string, jsonData: any) => Promise<any>;
const postRequestJSON: PostRequestJSON = (url: string, jsonData: any) => {
    const requestOptions: RequestInit = getRequestOptions(jsonData);
    return new Promise<Response>((resolve, reject) => {
        fetch(url, requestOptions).then(response => {
            return response.json();
        }).then(data => {
            resolve(data);
        })
    })
}

export default postRequestJSON;
