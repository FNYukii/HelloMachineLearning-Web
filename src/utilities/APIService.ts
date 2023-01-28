import axios from "axios"

class APIService {

  static async helloAPI(): Promise<string | null> {

    return axios
      .get('http://34.204.60.163:8000/')
      .then(response => {

        return response.data
      })
      .catch(() => {

        return null
      });
  }
}

export default APIService