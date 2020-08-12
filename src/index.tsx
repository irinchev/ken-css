import * as React from "react";
import * as ReactDOM from 'react-dom';
import * as cn from "classnames";
import "./index.css";
import {Button} from "./components/button";
import {useState} from "react";
import {Table} from "./components/table";

function App() {
	const [menuKey, setMenuKey] = useState("tbl");
	let page = undefined;
	switch (menuKey) {
		case "btn":
			page = <Button/>;
			break;
		case "tbl":
			page = <Table/>
			break;
	}
	return (
		<div className="k-full flex">
			<div className="p-4 h-full w-1/5 flex-shrink-0">
				<StyleItem menuKey="mat" currentKey={menuKey} hnd={k => setMenuKey(k)} title="Materials"/>
				<StyleItem menuKey="btn" currentKey={menuKey} hnd={k => setMenuKey(k)} title="Buttons"/>
				<StyleItem menuKey="tbl" currentKey={menuKey} hnd={k => setMenuKey(k)} title="Tables"/>
			</div>
			<div className="flex flex-1 p-4">
				{page}
			</div>
		</div>
	);
}

function StyleItem(props: { title: string, menuKey: string, currentKey: string, hnd: (mKey: string) => void }) {
	let selected = props.menuKey === props.currentKey;
	return (
		<div className={cn("p-2 cursor-pointer", {"bg-indigo-100": selected})}
				 onClick={e => props.hnd(props.menuKey)}>
			{props.title}
		</div>
	);
}

ReactDOM.render(
	<App/>, document.getElementById('app')
);
