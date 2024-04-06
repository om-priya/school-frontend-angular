/*
  Interfaces/Types to be used across all the different modules.
  Interfaces/Types related to each module is in their respective directory.
*/

export interface SuccessResponse<T> {
  status_code: number;
  success: boolean;
  message: string;
  data: {
    json: T[];
  };
}
