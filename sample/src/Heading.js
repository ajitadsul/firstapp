
import { LevelContext } from './LevelContext.js';
import { useContext } from 'react';
export default function Heading({  children }) {
    const level = useContext(LevelContext);
    switch (level) {
      case 1:
        return <b>lkk{children}</b>;
      case 2:
        return <h2>{children}</h2>;
      case 3:
        return <h3>{children}</h3>;
      case 4:
        return <h4>{children}</h4>;
      case 5:
        return <h5>{children}</h5>;
      case 6:
        return <h6>{children}</h6>;
      default:
        throw Error('Unknown level: ' + level);
    }
  }