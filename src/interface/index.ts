import type { UnData, UnMethod, UnParams } from '@uni-helper/uni-network';

export interface IResponse<T = any> {
  code:number
  data: T;
  success: boolean;
  message?: string;
  statusCode?: number;
  error?: string;
}

export interface IRequestConfig {
  url: string;
  method: UnMethod;
  params?: UnParams;
  data?: UnData;
}
