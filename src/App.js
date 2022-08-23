import React from "react";
import User from "./components/layout/User";
import Pc from "./components/layout/Pc";
import Result from "./components/layout/Result";
import Button from "./components/button/Button";

const App = () => {
  const [userSelect, setUserSelect] = React.useState({ user: null, pc: null });
    console.log(userSelect)
  const onClickHandler = (data) => {
    setUserSelect({...userSelect, user: data});
  };

  const resetButton = () => {
    setUserSelect({user: null, pc: null})
  }

  // 0 = Rock; 1 = Paper; 2 = Scissor;

  const pcSelect = () => {
    let randomSelect = Math.floor(Math.random() * 10);
    return setUserSelect({
      ...userSelect,
      pc: randomSelect <= 3 ? 0 : randomSelect <= 6 ? 1 : 2,
    });
  };

  React.useEffect(()=>{
    if(userSelect.user != null){
        pcSelect()
    }
  },[userSelect.user])

  const renderResult = () => {
    
    const {user, pc} = userSelect;

    if(user === null || pc === null){
        return null;
    }
    
    if(user === pc){
        return 'DRAW'
    }
    if(user === 0 && pc === 2){
        return 'WIN'
    }
    if(user === 1 && pc === 0){
        return 'WIN'
    }
    if(user === 2 && pc === 1){
        return 'WIN'
    }
        return "LOSE"
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alingItems: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alingItems: 'center'}}>
        <User userSelect={userSelect} onClickHandler={onClickHandler} />
        <Pc pcSelect={userSelect} />
      </div>
      <Result renderResult={renderResult} />
      <Button onClickHandler={resetButton} data={null} text={'RESET'} />
    </div>
  );
};

export default App;
