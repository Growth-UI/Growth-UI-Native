import React from 'react';

type State = Record<string, any>;

const ComponentDocContext = React.createContext<State>({});

export default ComponentDocContext;
