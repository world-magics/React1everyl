import axios from "axios";

class InformServiceApi{
    static async getAllInforms(limit=5,page=1){
    const response=await axios.get("https://jsonplaceholder.typicode.com/users",{
        params:{
            _limit:limit,
            _page:page
        }
    })
        return response
    }
}

export default InformServiceApi