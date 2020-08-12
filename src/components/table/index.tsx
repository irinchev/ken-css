import * as React from "react";
import {Page} from "../../styleguide/Page";
import {Variant} from "../../styleguide/Variant";

export function Table() {
	return (
		<Page title="Tables">

			<Variant caption="Simple">
				<div>
<span role="checkbox" tabIndex={0} aria-checked="false"
			className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
	<span aria-hidden="true"
				className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
</span>
				</div>
			</Variant>

		</Page>
	)
}
