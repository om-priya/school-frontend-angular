export interface SuccessResponse<T> {
  status_code: number;
  success: boolean;
  message: string;
  data: {
    json: T[];
  };
}
