import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Options,
  Config,
  GameButton,
  GameStatus,
  Latency,
} from './styles';
import { selectGames } from '../../../store/ducks/matchDetails/selects';
import {
  selectActiveGame,
  selectGameState,
  selectPing,
  selectTimeNowFormatted,
} from '../../../store/ducks/gameInfo/selects';
import { selectDelay } from '../../../store/ducks/timeTracker/selects';
import { changeGame } from '../../../store/ducks/gameInfo/actions';
import { setDelay } from '../../../store/ducks/timeTracker/actions';

const ClockSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.38293 0 0 5.38293 0 12C0 18.6171 5.38293 24 12 24C18.6171 24 24 18.6171 24 12C24 5.38293 18.6171 0 12 0ZM17.707 18.2069C17.512 18.4019 17.256 18.5001 17.0001 18.5001C16.7441 18.5001 16.4879 18.4019 16.2931 18.2069L11.293 13.207C11.105 13.0201 11.0001 12.7659 11.0001 12.5001V6C11.0001 5.44702 11.4479 5.00006 12 5.00006C12.5521 5.00006 12.9999 5.44702 12.9999 6V12.0861L17.707 16.793C18.098 17.1841 18.098 17.816 17.707 18.2069Z" />
  </svg>
);

const LatencyPathSVG = () => (
  <>
    <path d="M12 19.3228C13.6303 19.3228 14.9518 18.0013 14.9518 16.371C14.9518 14.7408 13.6303 13.4192 12 13.4192C10.3698 13.4192 9.04823 14.7408 9.04823 16.371C9.04823 18.0013 10.3698 19.3228 12 19.3228Z" />
    <path d="M12 7.17603C9.0569 7.17603 6.29284 8.31923 4.21706 10.3951C3.75526 10.8568 3.50098 11.4708 3.50098 12.1238C3.50098 12.7769 3.7553 13.3908 4.21706 13.8526C4.67883 14.3144 5.29276 14.5686 5.94584 14.5686C6.59892 14.5686 7.21285 14.3143 7.67456 13.8526C10.0597 11.4675 13.9405 11.4675 16.3256 13.8526C16.7873 14.3144 17.4013 14.5686 18.0543 14.5686C18.7074 14.5686 19.3213 14.3143 19.7831 13.8526C20.2449 13.3908 20.4991 12.7768 20.4991 12.1238C20.4991 11.4707 20.2448 10.8568 19.7831 10.3951C17.7072 8.31923 14.9432 7.17603 12 7.17603Z" />
    <path d="M23.285 5.35157C20.2707 2.33723 16.2629 0.677177 12 0.677177C7.73701 0.677177 3.72924 2.33727 0.714935 5.35162C-0.238312 6.30482 -0.238312 7.85587 0.714935 8.80912C1.1767 9.27093 1.79068 9.52521 2.44366 9.52521C3.09674 9.52521 3.71067 9.27088 4.17239 8.80912C8.48853 4.49307 15.5114 4.49302 19.8275 8.80912C20.2893 9.27088 20.9032 9.52521 21.5562 9.52521C22.2093 9.52521 22.8232 9.27088 23.285 8.80912C24.2383 7.85587 24.2383 6.30482 23.285 5.35157Z" />
  </>
)

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
  const gameState = useSelector(selectGameState);
  const gameTime = useSelector(selectTimeNowFormatted);
  const ping = useSelector(selectPing);
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

        <GameStatus>
          <div>
            <span>{gameState}</span>
            <Latency ping={ping}>
              <LatencyPathSVG />
            </Latency>
          </div>
          <div>
            <div>
              <ClockSVG />
              <span>{gameTime}</span>
            </div>
          </div>
        </GameStatus>
      </Options>
    </Container>
  )
}