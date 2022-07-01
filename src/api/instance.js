import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://track-api.leadhit.io/',
    headers: {
        'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
    }
})

export default instance