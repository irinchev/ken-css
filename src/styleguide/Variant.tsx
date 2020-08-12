import * as React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as c from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as RDS from 'react-dom/server';

type VariantProps = {
	caption: string;
	children: React.ReactElement
};

type VariantState = {
	quantities: { [key: string]: number };
};

export class Variant extends React.Component<VariantProps, VariantState> {

	// state: Readonly<VariantState> = {
	// 	quantities: this.props.products.reduce((acc, product) => {
	// 		acc[product] = 1;
	// 		return acc;
	// 	}, {})
	// };

	render() {

		const {caption, children} = this.props;
		//const { quantities } = this.state;

		return (
			<section className="my-4">
				<fieldset className="border-t border-gray-500 py-10 px-4">
					<legend className="ml-10">
						<span className="uppercase text-indigo-600 font-black px-2">
							{caption}
						</span>
					</legend>
					<div className="py-4">
						<div className="text-gray-600 font-medium uppercase mb-2">Markup</div>
							<SyntaxHighlighter
								className="rounded w-4/5"
								showLineNumbers={true}
								language="html"
								style={c.tomorrowNightBlue}>
								{RDS.renderToStaticMarkup(children)}
							</SyntaxHighlighter>
					</div>
					<div className="py-4">
						<div className="text-gray-600 font-medium uppercase mb-2">Preview</div>
						<div>
							{children}
						</div>
					</div>
				</fieldset>
			</section>
		)
	}
}
