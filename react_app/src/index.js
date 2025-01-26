import React from "react";
import ReactDOM from "react-dom/client";

import { FormEmailPasswordYup } from "./forms/formEmailPAsswordYup";
import { FormEmailPassword } from "./forms/formEmailPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<FormEmailPassword></FormEmailPassword>
		<FormEmailPasswordYup></FormEmailPasswordYup>
	</React.StrictMode>,
);
