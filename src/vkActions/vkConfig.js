import { Config, Connect, ConnectEvents} from '@vkontakte/superappkit';
import { APP_ID, REDIRECT_URI, SCOPE } from './config';

export const ACCESS_TOKEN_LINK = `https://oauth.vk.com/authorize?client_id=${APP_ID}&display=page&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&v=5.131&state=okay`