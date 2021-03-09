import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Options,
  Config,
  GameButton
} from './styles';
import { selectGames } from '../../../store/ducks/matchDetails/selects';

export default function Menu({ id }) {
  const games = useSelector(selectGames(id));
  const activeGame = '';

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
                    key={game.id}
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