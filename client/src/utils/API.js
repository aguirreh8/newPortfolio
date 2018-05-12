import axios from "axios";

export default {
	sendMail: (data) => {
		return axios.post("/sendMail", data);
	}
}