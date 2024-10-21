import type { FetchOptions } from 'ofetch'
import type { AsyncDataOptions } from '#app'

import FetchFactory from '../factory'

type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

class ProductModule extends FetchFactory<IProduct[]> {
  private RESOURCE: string = '/products'

  async getProducts(
    asyncDataOptions?: AsyncDataOptions<IProduct[]>
  ) {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US'
          }
        }

        return this.call(
          'GET',
          `${this.RESOURCE}`,
          undefined,
          fetchOptions
        )
      },
      asyncDataOptions
    )
  }
}

export default ProductModule