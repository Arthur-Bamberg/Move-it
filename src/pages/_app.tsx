import { useState } from 'react';

import '../styles/global.css';

import {ChallengesProvider} from '../contexts/ChallengesContext';


function MyApp({ Component, pageProps }) {//fica por volta de toda aplicação

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
