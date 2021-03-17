import React from 'react';
import { useSelector } from 'react-redux';

import LiveIndicator from './LiveIndicator';
import LiveMatch from './LiveMatch';
import { Container, MatchList, NoMatches } from './styles';
import { liveMatches } from '../../../store/ducks/schedule/selects';

export default function LiveMatches() {
  const live = useSelector(liveMatches);

  return (
    <Container>
      <LiveIndicator />
      <MatchList>
        {
          live.length === 0 ?
            <NoMatches>No live matches yet :\</NoMatches> :
            live.map(
              event => (<LiveMatch data={event} key={event.match.id} />)
            )
        }
      </MatchList>
    </Container>
  );
}