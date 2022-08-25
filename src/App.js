import { React, useState, useEffect, useCallback } from "react";
import "./app.css";
import User from "./components/layout/User";
import Pc from "./components/layout/Pc";
import Result from "./components/layout/Result";
import Button from "./components/button/Button";

const App = () => {
  const [userSelect, setUserSelect] = useState({ user: null, pc: null });
  console.log(userSelect);
  const onClickHandler = (data) => {
    setUserSelect({ ...userSelect, user: data });
  };

  const resetButton = () => {
    setUserSelect({ user: null, pc: null });
  };

  // 0 = Rock; 1 = Paper; 2 = Scissor;

  const pcSelect = useCallback(() => {
    let randomSelect = Math.floor(Math.random() * 10);
    return setUserSelect({
      ...userSelect,
      pc: randomSelect <= 3 ? 0 : randomSelect <= 6 ? 1 : 2,
    });
  }, [userSelect]);

  useEffect(() => {
    if (userSelect.user != null && userSelect.pc === null) {
      pcSelect();
    }
  }, [userSelect.user, userSelect.pc, pcSelect]);

  const renderResult = () => {
    const { user, pc } = userSelect;

    if (user === null || pc === null) {
      return null;
    }

    if (user === pc) {
      return "DRAW";
    }
    if (user === 0 && pc === 2) {
      return "WIN";
    }
    if (user === 1 && pc === 0) {
      return "WIN";
    }
    if (user === 2 && pc === 1) {
      return "WIN";
    }
    return "LOSE";
  };

  return (
    <div
      className="container"
      //   style={{ display: "flex", flexDirection: "column", alingItems: "center" }}
    >
      <div
        className="main"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alingItems: "center",
        // }}
      >
        <User userSelect={userSelect} onClickHandler={onClickHandler} />
      </div>
      <div className="btn-reset">
        <Pc pcSelect={userSelect} />
        {userSelect.user !== null && (
          <Button onClickHandler={resetButton} data={null} text={"Reset"} />
        )}
      </div>
      <div className="results">
        <Result renderResult={renderResult} />
      </div>
    </div>
  );
};

export default App;
