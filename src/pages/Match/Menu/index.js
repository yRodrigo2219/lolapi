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
import { changeGame } from '../../../store/ducks/gameInfo/actions';

const changeGameOnClick = (dispatch, id) => (
  () => {
    dispatch(changeGame(id));
  }
)

export default function Menu() {
  const games = useSelector(selectGames);
  const activeGame = useSelector(selectActiveGame);
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
      </Options>
    </Container>
  )
}