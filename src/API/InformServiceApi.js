import axios from "axios";

class InformServiceApi{
    static async getAllInforms(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
    }
}

export default InformServiceApi