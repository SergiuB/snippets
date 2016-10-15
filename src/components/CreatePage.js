import React from 'react';

import 'brace/mode/text';

import CodeEditor from './CodeEditor';
import modes from '../constants/modes';

class CreatePage extends React.Component {
  state = {
    code: '',
    mode: 'text',
    allModes: ['text'],
  };

  onCodeChange = (newCode) => this.setState({ code : newCode });
  onModeChange = ({ value }) => this.setState({ mode: value });
  
  componentWillMount() {
    require.ensure([], (require) => {
      require('brace/mode/javascript');
      require('brace/mode/python');
      require('brace/mode/haskell');
      require('brace/mode/ruby');
      this.setState({allModes: modes});
    });
  }

  render() {
    const { code, mode, allModes } = this.state;
    return (
      <div>
        <CodeEditor
          code={code}
          mode={mode}
          allModes={allModes}
          onModeChange={this.onModeChange}
          onCodeChange={this.onCodeChange}
        />
        <button onClick={this.onSave}>Save</button>
      </div>
    );
  }

}

export default CreatePage;
