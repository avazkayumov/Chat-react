import axios from "axios";

axios.defaults.baseURL = "http://142.93.246.144"

class Api {
    async fetchMessages() {
        try {
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data" 
                }
            }

            const result = await axios.get("/messages", config)
            return result
        }
        catch(err) {
            console.log(err)
        }
    }

    async signup(data) {
      try {
          const result = await axios.post("/signup", data)
          return result
      }catch(err) {
            console.log(err)
      }
    }

    
    async signin(data) {
        try {
            const result = await axios.post("/login", data)
            return result
        }catch(err) {
            console.log(err)
        }
      }

    async addMessage(data) {
      try {
          const config = {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
              "Content-Type": "multipart/form-data" 
            } 
          }

          const result = await axios.post("/messages", data, config)
          return result
      }catch(err) {
          console.log(err)
      }
    }
}

export const api = new Api()