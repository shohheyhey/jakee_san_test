import React, { useEffect, useState } from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const [num, setNum] = useState(0);

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color="blue">おげんきですか</ColorfulMessage>

      <ColorfulMessage color="red">げんきですよ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>😄</p>}
    </>
  );
};

export default App;
