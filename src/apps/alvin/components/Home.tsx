import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'intersection-observer'; // This is a Polifill
import '../css/app.css';
import { Divider } from 'material-ui';

type Props<T> = {};

export class Home extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<section id="feature-automate">
				<div className="container ">
					<div className="row">
						<div className="col-lg-8  text-center m-auto  ">
							<h4 className="display-4">
								MiniCssExtractPlugin CSS Order Problem
							</h4>
							<p className="lead">
								<br />
								<br />
								<b>Dev Build ('npm run start')</b>
								<br />
								The text above appears black (style-loader)
								<br />
								<br />
								<b>Dev Build ('npm run build', open dist/index.html )</b>
								<br />
								The text above appears white (MiniCssExtractPlugin.loader)
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
