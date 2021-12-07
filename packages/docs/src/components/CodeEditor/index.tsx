import dynamic from 'next/dynamic';
import React from 'react';
import { IAceEditorProps } from 'react-ace';

const CodeEditor = dynamic(() => import('./CodeEditor'), { ssr: false });

const CodeEditorSafe = (props: IAceEditorProps) => {
  return <CodeEditor {...props} />;
};

export default CodeEditorSafe;
