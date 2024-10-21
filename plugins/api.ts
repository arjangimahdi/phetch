import { $fetch, type FetchOptions } from 'ofetch'

import ProductModule from '~/repository/modules/product'

interface IApiInstance {
  products: ProductModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl as string,
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const modules: IApiInstance = {
    products: new ProductModule(apiFetcher)
  }

  return {
    provide: {
      api: modules
    }
  }
})
