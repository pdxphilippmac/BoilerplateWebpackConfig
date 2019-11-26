import * as React from "react";
import * as ReactDOM from "react-dom";
import { FC } from "react"
const Hello: FC<any> = () => <div></div>



ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("App")
);