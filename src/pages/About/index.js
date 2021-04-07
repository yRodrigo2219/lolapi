import React from 'react';

import SocialSVG, { SOCIAL } from '../../assets/svgs/socials';

import {
  Container,
  PersonalInfo,
  SocialContainer,
} from './styles';

const socials = [
  {
    name: SOCIAL.GITHUB,
    link: 'https://github.com/yRodrigo2219',
  },
  {
    name: SOCIAL.TWITTER,
    link: 'https://twitter.com/y2219_',
  },
  {
    name: SOCIAL.DISCORD,
    link: 'https://discordapp.com/users/308349999719251988'
  }
];

export default function About() {
  return (
    <Container>
      <div>
        <PersonalInfo>
          <img src='https://avatars.githubusercontent.com/u/50002002' alt='' />
          <span>Rodrigo</span>
        </PersonalInfo>
        <SocialContainer>
          {
            socials.map(social => (
              <button onClick={() => window.open(social.link)}>
                <SocialSVG social={social.name} />
              </button>
            ))
          }
        </SocialContainer>
      </div>
    </Container>
  )
}