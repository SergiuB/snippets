import React from 'react';

import AceEditor from 'react-ace';
import 'brace';
import 'brace/theme/monokai';

import Select from 'react-select';
import 'react-select/scss/default.scss';

class CodeEditor extends React.Component {


  render() {
    const { code, mode, allModes, onCodeChange, onModeChange } = this.props;
    console.log(mode);
    return (
      <div>
        <Select
          name="form-field-name"
          value={mode}
          options={allModes.map(mode => ({
            value: mode,
            label: mode,
          }))}
          onChange={onModeChange}
        />
        <AceEditor
          mode={mode}
          theme="monokai"
          value={code}
          onChange={onCodeChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{
            $blockScrolling: true
          }}
        />
      </div>
    );
  }

}

CodeEditor.propTypes = {
  code: React.PropTypes.string,
  mode: React.PropTypes.string,
  onCodeChange: React.PropTypes.func,
  onModeChange: React.PropTypes.func,
};

export default CodeEditor;
