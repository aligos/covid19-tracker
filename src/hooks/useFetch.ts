import {ref} from 'vue'
import axios, {AxiosRequestConfig} from 'axios'

interface Config extends AxiosRequestConfig {
  delay?: number
}

export default async function useFetch(url: string, config: Config) {
  const fetch = () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve(
          await (
            await axios.request({
              url,
              ...config,
            })
          ).data,
        )
      }, config.delay ?? 0)
    })
  }

  const response = ref()
  response.value = await fetch()

  return response
}
