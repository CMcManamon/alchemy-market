import React from "react";
import { Servers } from "../data/servers.js";

const ServerList = (props) => {
  const { name, id, defaultServer } = props;

  let serversList = [];
  Servers.forEach((server) => {
    let serverOption = (
      <option key={server.slug + "-" + server.region} value={server.slug}>
        {server.name}
      </option>
    );
    serversList.push(serverOption);
  });

  return (
    <select name={name} id={id} defaultValue={defaultServer}>
      {serversList}
    </select>
  );
};
export default ServerList;
