import axios from "axios";

// const  fetchData = async() => {
//     try {
//         const Api = await axios.get("https://yts.mx/api/v2/list_movies.json")
//         return Api;
//     }
//     catch (e) {
//         console.log(e);
//     }
    
// }
const  fetchData =  () => {
    
    axios.get("https://yts.mx/api/v2/list_movies.json").then((res) => {console.log(res.data.data) }).catch( e => console.log(e)
        )
}
export default fetchData;