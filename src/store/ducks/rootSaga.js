import leagues from './leagues/saga';

export default function* rootSaga() {
  yield leagues();
}