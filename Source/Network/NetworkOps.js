
import axios from 'axios';

class NetworkOps {

  async getFetch(url: string) {
    try {
      const response = await axios.get(url);
      console.log(response);
      return response;
    } catch (error) {

    }
  }


}
export default new NetworkOps();