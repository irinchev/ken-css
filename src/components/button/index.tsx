import * as React from "react";
import {Page} from "../../styleguide/Page";
import {Variant} from "../../styleguide/Variant";

export function Button() {
	return (
		<Page title="Buttons">
			<Variant caption="Button">
				<button className="btn">
					Button
				</button>
			</Variant>
			<Variant caption="Button Small">
				<button className="btn btn-sm">
					Button Small
				</button>
			</Variant>
			<Variant caption="Button Large">
				<button className="btn btn-lg">
					Button Large
				</button>
			</Variant>
			<Variant caption="Primary Button">
				<button className="btn btn-primary">
					Primary button
				</button>
			</Variant>
			<Variant caption="Button Disabled">
				<button className="btn disabled">
					Button Disabled
				</button>
			</Variant>
			<Variant caption="Primary Button Disabled">
				<button className="btn btn-primary disabled">
					Primary Button Disabled
				</button>
			</Variant>
			<Variant caption="Link Button">
				<button className="btn btn-link">
					Link button
				</button>
			</Variant>
		</Page>
	)
}
