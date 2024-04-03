type access_token = {access_token: string}

export interface LoginSuccessResponse {
  status_code: number;
  success: boolean;
  message: string;
  data: {
    json: access_token[];
  };
}
