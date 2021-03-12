import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Options,
  Config,
  GameButton
} from './styles';
import { selectGames } from '../../../store/ducks/matchDetails/selects';
import { selectActiveGame } from '../../../store/ducks/gameInfo/selects';
import { selectDelay } from '../../../store/ducks/timeTracker/selects';
import { changeGame } from '../../../store/ducks/gameInfo/actions';
import { setDelay } from '../../../store/ducks/timeTracker/actions';

const changeGameOnClick = (dispatch, id) => (
  () => {
    dispatch(changeGame(id));
  }
)

const setDelayOnChange = dispatch => (
  ({ target }) => {
    console.log(target.value)
    dispatch(setDelay(target.value));
  }
)

export default function Menu() {
  const games = useSelector(selectGames);
  const activeGame = useSelector(selectActiveGame);
  const delay = useSelector(selectDelay);
  const dispatch = useDispatch();

  if (games.length === 0)
    return null;

  return (
    <Container>
      <Options>
        <span>Options</span>
        <Config>
          <span>Games:</span>
          <div>
            {
              games.map(game => {
                let isGameActive = game.id === activeGame;

                return (
                  <GameButton active={isGameActive}
                    key={game.id} onClick={changeGameOnClick(dispatch, game.id)}
                  >
                    {game.number}
                  </GameButton>
                )
              })
            }
          </div>
        </Config>
        <Config>
          <span>Delay:</span>
          <label>
            <span>calls</span>
            <input type='number' value={delay} onChange={setDelayOnChange(dispatch)} />
          </label>
        </Config>
      </Options>
    </Container>
  )
}