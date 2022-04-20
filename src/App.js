import React, { useState } from "react";
import Card from "./Card";
import Questions from "./Questions";

const App = () => {
  const [question, setQuestion] = useState({
    q: "Start",
    a: "Der Start",
    tag: 0
  });
  const [category, setCategory] = useState("js_tasks");
  const [flip, setFlip] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [prevQ, setPrevQ] = useState({});
  const [checked, setChecked] = useState(false);

  const clr = () => {
    let newSamp = Questions[category];
    newSamp.map((val) => (val.tag = 0));
    setQuestion({ q: "Start", a: "Yes it is", tag: 0 });
    setFlip(false);
  };

  const categ = (e) => {
    setCategory(e.target.value);
    clr();
  };

  const next = () => {
    setChecked(false);
    let newSamp = Questions[category];
    newSamp = newSamp.filter((val) => val.tag === 0);
    if (newSamp.length === 0) {
      setQuestion({ q: "End", a: "Finish", tag: 0 });
    } else {
      if (repeat === true) {
        prevQ.tag = 0;
      }
      setFlip(false);
      let n = Math.floor(Math.random() * newSamp.length);
      setQuestion(newSamp[n]);
      newSamp[n].tag = 1;
      setPrevQ(newSamp[n]);
    }
    setRepeat(false);
  };

  return (
    <div>
      <form className="category">
        <select name="category" id="category" onChange={categ}>
          <option value="js_tasks">js_tasks</option>
          <option value="js_theory">js_theory</option>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="react">react</option>
        </select>
        <div className="repeat">
          <label htmlFor="repeat">R</label>
          <input
            type="checkbox"
            name="repeat"
            checked={checked}
            onClick={() => setChecked(!checked)}
            onChange={(e) => setRepeat(e.target.checked)}
          ></input>
        </div>
      </form>
      <div className="main">
        <div className="card_wrapper">
          <Card flip={flip} onFlipChange={setFlip} question={question} />
        </div>
        <button className="next" onClick={next}>
          <p>Next</p>
        </button>
      </div>
      <div className="clear_wrapper">
        <button className="clr" onClick={clr}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default App;
