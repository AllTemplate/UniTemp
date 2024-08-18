import { API_URL } from '@/config/env.config';
import type { IRequestConfig, IResponse } from '@/interface';
import { un, type UnHeaders, type UnInstance } from '@uni-helper/uni-network';

export default class ShopRequestInstance {
  private readonly instance: UnInstance;
  constructor() {
    this.instance = un.create({
      baseUrl: API_URL,
      timeout: 10000,
      headers: {
        'content-type': 'application/json',
      },
    });
    this.init();
  }
  protected init() {
    this.instance.interceptors.request.use(
      (request) => {
        const token = uni.getStorageSync('token') || '';
        (request.headers as UnHeaders)['authorization'] = 'Bearer' + ' ' + token;
        return request;
      },
      (error) => error,
    );

    this.instance.interceptors.response.use(
      (response) => {
        return Promise.resolve(response.data as IResponse);
      },
      (error) => {
        return Promise.reject(error.response?.data || error.code);
      },
    );
  }
  async request(config: IRequestConfig) {
    return await this.instance
      .request(config)
      .then((res) => res)
      .catch((err) => err);
  }
}
