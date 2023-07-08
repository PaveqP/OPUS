import { Config, Connect, ConnectEvents} from '@vkontakte/superappkit';
import { APP_ID } from './config';


Config.init({
  appId: APP_ID, 
});

export const redirectAuthHandler = () => Connect.redirectAuth({
    url: 'https://localhost:80/login',
    state: '',
    source: '',
    action: undefined,
    screen: undefined,
  })