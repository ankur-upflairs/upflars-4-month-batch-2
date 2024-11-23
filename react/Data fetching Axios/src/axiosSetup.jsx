import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export async function fetchData(url) {
    try{
        let res=await instance.get(url);
        return res.data
    }catch(err){
        console.log(err)
    }
}
export async function postData(url,data) {
    let res=await instance.post(url,data);
    return res.data
}


