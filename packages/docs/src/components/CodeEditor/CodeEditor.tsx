import Ace, { IAceEditorProps } from 'react-ace';
import React from 'react';
import 'brace/ext/language_tools';
import 'brace/mode/jsx';
import 'brace/theme/tomorrow_night_eighties';

const CodeEditor = (props: IAceEditorProps) => {
  return (
    <Ace
      readOnly
      mode="jsx"
      height="100px"
      highlightActiveLine
      enableLiveAutocompletion
      width="100%"
      tabSize={2}
      maxLines={Infinity}
      theme="tomorrow_night_eighties"
      {...props}
    />
  );
};

export default CodeEditor;
