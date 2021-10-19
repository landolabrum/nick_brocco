import { useState, useEffect } from "react";

export default function ({ data, update }) {
  const [newData, setState] = useState({
      health: "",
      wealth: "",
      love: "",
      happiness: ""
    });

  const handleChange = e => {
    const { name, value } = e.target;

    if (value == "") {
      setState(prevState => ({
        ...prevState,
        [name]: true
      }));
    } else if (value == true) {
      setState(prevState => ({
        ...prevState,
        [name]: false
      }));
    }
    else if (value == false) {
      setState(prevState => ({
        ...prevState,
        [name]: true
      }));
    }
    else {
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    // console.log(e.target)
    e.preventDefault();
    e.target.classList.toggle("red");
  };

  function Validataion(props) {
    let result = false;
    for (let k in props) {
      if(props[k] !== ""){
        result = true
        break;
      }
    }
    return result
  }

  function Li(props) {
    
    return (
      <div key={props.n} className="col s6">
      <label
        className="center box">
        <div className="box-content ">
          <input
            className="event"
            type="checkbox"
            name={props.n}
            onChange={handleChange}
            value={props.v}
          />
          
          <p 
          style={{fontSize: "1.5rem", padding: "7px", maxWidth: "100%"}}
          className={props.v==""?"":"white-text"}>{props.l}</p>
        </div>
      </label>
    </div>
    );
  }

  return (
    <div>

      <div className="row ">
        <h4>Which aspects of your life, do you wish to improve?</h4>
        <Li
          n="health"
          v={newData.health}
          l="health"
        />
        <Li
          n="wealth"
          v={newData.wealth}
          l="wealth"
        />
        <Li
          n="love"
          v={newData.love}
          l="love"
        />
        <Li
          n="happiness"
          v={newData.happiness}
          l="happiness"
        />
      </div>
      {/* <div className="break" /> */}

      {/* {JSON.stringify(newData)} */}
      <footer >
      {Validataion(newData) ?
        <button className="btn btn-block prim" onClick={() => update("desire", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
      
   </footer>
    </div>
  );
}