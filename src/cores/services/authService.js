 import { AuthenticationService } from "./mocks/AuthenticationService";
 import { AppStatus } from "../config/config";
  
  export const authService = AppStatus.isTesting?new AuthenticationService():"";