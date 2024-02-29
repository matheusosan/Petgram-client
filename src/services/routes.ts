import { baseUrl } from "./api-url";

interface Routes {
  HOME: string;

  AUTH: {
    LOGIN: string;
    LOGOUT: string;
  };

  USER: {
    AUTHENTICATED: string;
    FOLLOWERS: (id: string) => string;
  };

  POSTS: {
    GET_HOME_POSTS: string;
    GET_USER_POSTS: (id: string) => string;
    CREATE_POST: string;
  };
}

const ROUTES: Routes = {
  HOME: `${baseUrl}/`,

  AUTH: {
    LOGIN: `${baseUrl}/auth/login`,
    LOGOUT: `${baseUrl}/auth/logout`,
  },

  USER: {
    AUTHENTICATED: `${baseUrl}/user/authenticated`,
    FOLLOWERS: (id) => `${baseUrl}/followers/${id}`,
  },

  POSTS: {
    GET_HOME_POSTS: `${baseUrl}/post`,
    GET_USER_POSTS: (id) => `${baseUrl}/user/posts/${id}`,
    CREATE_POST: `${baseUrl}/ post`,
  },
};

export default ROUTES;
