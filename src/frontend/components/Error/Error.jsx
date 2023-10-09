import React from "react";
import {Link} from "react-router-dom"

export default function Error({ errorText }) {
  return (
    <div>
      <h3>{errorText}</h3>
      <div className="div"></div>
      <Link></Link>
    </div>
  );
}
