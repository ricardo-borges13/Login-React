import { apiService } from "./api-services";

export type LoginForm = {
  email: string;
  password: string;
};

export const login = async (props: LoginForm): Promise<void> => {
  const result = await apiService.post('/user/login',props);
  console.log(result);
};
