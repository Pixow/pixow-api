export interface QueryParams {
  page: number;
  pageSize?: number;
  keyword?: string;
  sorts?: string[];
  [k: string]: any;
}
