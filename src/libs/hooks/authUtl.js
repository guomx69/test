import { LOCAL_STORAGE_KEYS } from '../../apps/config/config';

export const returnHome = (returnUrl) => {

    const customReturnUrl = returnUrl||localStorage.getItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL);
    //localStorage.removeItem(LOCAL_STORAGE_KEYS.CUSTOM_AUTH_URL);
    if (customReturnUrl) {
            window.location.href = customReturnUrl;
    }
  }