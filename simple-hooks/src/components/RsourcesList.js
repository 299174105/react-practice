import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import marked from "marked";

const ResourcesList = props => {
  const [style, setStyle] = useState("");
  const [resources, setResources] = useState([]);
  const [textA, setTextA] = useState("* hello");

  const myRef = useRef(null);

  function refHandler() {
    console.log(myRef.current.value);
  }

  useEffect(() => {
    async function fetchResources() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${props.type}`
      );
      setResources(response.data);
    }

    fetchResources();
  }, props.type);

  function renderMarkdown() {
    console.log(textA);
    return { __html: marked(textA) };
  }

  return (
    <div>
      <i
        className={`icon ${style} thumbs up outline`}
        onClick={() => setStyle(style === "" ? "red" : "")}
      />
      <input className="ui input" ref={myRef} type="text" />
      <button className="ui button" onClick={refHandler}>
        click me
      </button>
      <div className="ui list relaxed divided">
        {resources.map(resource => {
          return (
            <div className="item" key={resource.id}>
              {resource.title}
            </div>
          );
        })}
      </div>
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column" onChange={e => setTextA(e.target.value)}>
            <textarea
              style={{ height: 400, width: "100%" }}
              defaultValue={textA}
            />
          </div>

          <div className="column" dangerouslySetInnerHTML={renderMarkdown()} />
        </div>
        <div className=" ui vertical divider">and</div>
      </div>
    </div>
  );
};

export default ResourcesList;
