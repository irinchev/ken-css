import * as React from "react";
import * as ReactDOM from 'react-dom';
import * as cn from "classnames";
import "./index.css";
import {Button} from "./components/button";

function App() {
	return (
		<div className="k-full flex">
			<div className="p-4 h-full w-1/5">
				<StyleItem title="Materials"/>
				<StyleItem title="Buttons" selected/>
			</div>
			<div className="flex flex-1 p-4">
				<Button/>
			</div>
		</div>
	);
}

function StyleItem(props: { title: string, selected?: boolean }) {
	return (
		<div className={cn("p-2", {"bg-indigo-100": props.selected})}>
			{props.title}
		</div>
	);
}

ReactDOM.render(
	<App/>, document.getElementById('app')
);
