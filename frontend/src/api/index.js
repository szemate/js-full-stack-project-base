import realUserApi from './userApi';
import fakeUserApi from './userApi.fake';

const useFakes = process.env.REACT_APP_USE_FAKES === 'true';

// eslint-disable-next-line import/prefer-default-export
export const userApi = useFakes ? fakeUserApi : realUserApi;
