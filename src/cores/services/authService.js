 import { AuthenticationService } from "./mocks/AuthenticationService";
 import { EsriAuthService } from "./EsriAuthService";
 import { AppStatus } from "../config/config";
  
  export const authService = AppStatus.isTesting?new AuthenticationService():new EsriAuthService();
