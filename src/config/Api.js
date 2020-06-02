//connect with server
import axios from "axios";
//server URL
export default () => {
	return axios.create({
		baseURL: "http://delightfullytasty.local/wp-json/wp/v2"
	});
};
