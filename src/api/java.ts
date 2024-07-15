import axios from 'axios'

import { ref } from 'vue'

axios.defaults.baseURL = 'http://localhost:8080/'

const api_path = ref('otp_manager')

export default function generateOTP() {
  const generate = async (data: object) => {
    try {
      await axios({
        method: 'POST',
        url: api_path.value,
        data: data
      })
    } catch (err) {
      console.error(err)
    }
  }
  return { generate }
}
