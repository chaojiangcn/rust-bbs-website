export interface PageParams {
  page: number;
  size: number;
}
export interface APIResponse<T> {
  code: number;
  message?:string;
  data: T; 
}