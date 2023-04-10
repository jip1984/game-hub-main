import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '35b6c075ef6948a6b487fa1e4894ad9c'
  },
});
