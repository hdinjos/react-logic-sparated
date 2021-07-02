import {useState} from 'react';

const s = {
  wrap: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  containerAct: {
    display:"flex",
    fontSize: "30px"
  },
  action: {
    width:"50px",
    height: "50px",
    backgroundColor: "#eee",
    textAlign: "center",
    lineHeight: "50px",
    cursor:"pointer",
    border:"1px solid black"
  },
  number: {
    width:"80px",
    height: "50px",
    lineHeight:"50px",
    textAlign: "center",
    borderBottom:"1px solid black",
    borderTop:"1px solid black"
  },

}

function App() {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");

  const onClickPlus = () => {
    if(value < 10 ){
      setValue(value + 1);
      setMessage("")
    }else {
      setMessage("Max!");
    }
  };

  const onClickMinus = () => {
    if(value > 0) {
      setValue(value -1);
      setMessage("")
    }else {
      setMessage("Min!");
    }
  };

  return (
    <div style={s.wrap}>
     <h3>Counter Jos</h3>
     <div style={s.containerAct}>
       <div onClick={()=> onClickMinus()} style={s.action}>-</div>
       <div style={s.number}>{value}</div>
       <div onClick={()=> onClickPlus()} style={s.action}>+</div>
     </div>
     <div><h4>{message}</h4></div>
    </div>
  );
}

export default App;
