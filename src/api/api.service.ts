import type { IResponse } from '@/interface';
import ShopRequestInstance from './api.instance';

class ApiService {
  private readonly shopRequestInstance: ShopRequestInstance;
  constructor() {
    this.shopRequestInstance = new ShopRequestInstance();
  }

  async login(code: string): Promise<IResponse<string>> {
    return await this.shopRequestInstance.request({
      url: 'api/v1/auth/login',
      method: 'POST',
      data: { code },
    });
  }

  async test(): Promise<IResponse<string>> {
    return await this.shopRequestInstance.request({
      url: 'api/v1/auth/test',
      method: 'POST',
    });
  }
}

const apiService = new ApiService();
export default apiService;
