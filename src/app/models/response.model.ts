export interface LoginSuccessResponse<T> {
  status_code: number;
  success: boolean;
  message: string;
  data: {
    json: T[];
  };
}
