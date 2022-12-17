import React from "react";
import { useState } from "react";
import { Servers } from "../data/servers.js";

const ServerList = (props) => {
  const { name, id } = props;
  const [defaultServer, setDefaultServer] = useState(() => {
    // get stored server value
    const savedServer = JSON.parse(localStorage.getItem("server"));
    return savedServer || "benediction"; // default
  });

  let serversList = [];
  Servers.forEach((server) => {
    let serverOption = (
      <option key={server.slug + "-" + server.region} value={server.slug}>
        {server.name}
      </option>
    );
    serversList.push(serverOption);
  });

  const onServerChange = (event) => {
    localStorage.setItem("server", JSON.stringify(event.target.value));
    setDefaultServer(event.target.value);
  };

  return (
    <div>
      <label htmlFor={name}>Server: </label>
      <select
        name={name}
        id={id}
        defaultValue={defaultServer}
        onChange={onServerChange}
      >
        {serversList}
      </select>
    </div>
  );
};
export default ServerList;
