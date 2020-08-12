import * as React from "react";

type PageProps = {
	title: string;
};

type PageState = {
	quantities: { [key: string]: number };
};

export class Page extends React.Component<PageProps, PageState> {

	static defaultProps: PageProps = {
		title: "New Page"
	};

	// state: Readonly<PageState> = {
	// 	quantities: this.props.products.reduce((acc, product) => {
	// 		acc[product] = 1;
	// 		return acc;
	// 	}, {})
	// };

	render() {

		const { title, children } = this.props;
		//const { quantities } = this.state;

		return (
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl uppercase font-black text-gray-500 border-b border-green-300 shadow-lg">
					{title}
				</h1>
				<div className="my-4 px-4 flex-1 h-full overflow-y-auto">
					{children}
				</div>
			</div>
		)
	}
}
