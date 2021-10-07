import { useState } from "react";

export default function ({ data, update }) {
  const [newData, setState] = useState({
      s1: "",
      s2: "",
      s3: "",
      s4: ""
    });

  const handleChange = e => {
    const { name, value } = e.target;

    if (value == "") {
      setState(prevState => ({
        ...prevState,
        [name]: "true"
      }));
    } else if (value == "true") {
      setState(prevState => ({
        ...prevState,
        [name]: "false"
      }));
    }
    else if (value == "false") {
      setState(prevState => ({
        ...prevState,
        [name]: "true"
      }));
    }
    else {
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    console.log(e.target)
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
      <div key={props.n} className="col s12 m6 l4">
      <label
        className="center box">
        <div className="flow-text box-content ">
          <input
            className="event"
            type="checkbox"
            name={props.n}
            onChange={handleChange}
            value={props.v}
          />
          
          <p style={{lineHeight: "28px", fontSize: "13px", padding: "7px"}}
          className={props.v==""?"":"white-text"}>{props.l}</p>
        </div>
      </label>
    </div>
    );
  }

  return (
    <div>

      <div className="row ">
        <h3>Select all that describe you</h3>
        <Li
          n="s1"
          v={newData.s1}
          l="I am Unsatisfied with my life and I believe nobody can help me"
        />
        <Li
          n="s2"
          v={newData.s2}
          l="I am unsatisfied with my life and I need guidance,community, & encouragement"
        />
        <Li
          n="s3"
          v={newData.s3}
          l="I am partly satisfied with my life and want to join a community of like-minded people"
        />
        <Li
          n="s4"
          v={newData.s4}
          l="I am completely satisfied with my life and believe there are no improvements to be made"
        />
      </div>
      {/* <div className="break" /> */}

      {/* {JSON.stringify(newData)} */}
      <footer >
      {Validataion(newData) ?
        <button className="btn btn-block prim" onClick={() => update("q2", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
      
   </footer>
    </div>
  );
}