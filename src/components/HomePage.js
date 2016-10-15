import React from 'react';
import 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

function onChange(newValue) {
  console.log('change', newValue);
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'javascript'
    };
  }

  loadHaskell() {
    require.ensure([], (require) => {
      require('brace/mode/haskell');
      this.setState({mode: 'haskell'});
    });
  }

  render() {
    const {mode} = this.state;
    const code = `module Main where

    import Data.List
    import Data.Function

    main :: IO ()
    main = do
      -- n <- getLine
      -- tree <- getLine
      let result = treeHeight ((-1):[0..30000]) -- $ map read $ words tree
      putStrLn $ show result

    treeHeight :: [Int] -> Int
    treeHeight tree = foldr (\node height -> max height (nodeHeightMemo node)) 0 tree
      where nodeHeightMemo = fix (memoize . nodeHeight)
            nodeHeight f n = 1 + f (tree!!n)

    memoize :: (Int -> Int) -> Int -> Int
    memoize f (-1) = 1
    memoize f n = (map f [0 ..] !! n)
`;
    return (
      <div>
        <AceEditor mode={mode} theme="monokai" value={code} onChange={onChange} name="UNIQUE_ID_OF_DIV" editorProps={{
          $blockScrolling: true
        }}/>
        <button type="button" onClick={() => this.loadHaskell()}>
          Haskell
        </button>
      </div>

    );
  }
}

export default HomePage;
