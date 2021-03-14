import { LEAGUE } from './types';

const INITIAL_STATE = {
  data: [],
  filter: '',
  loading: false,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LEAGUE.REQUEST:
      return {
        ...state,
        loading: true
      }
    case LEAGUE.SUCCESS:
      let filter = '';
      action.payload.forEach(league => {
        filter += `${league.id},`;
      });

      return {
        ...state,
        data: action.payload,
        filter,
        loading: false,
        error: false
      };
    case LEAGUE.FAILURE:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}