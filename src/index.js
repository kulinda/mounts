import React from 'react';
import ReactDOM from 'react-dom';

import {packs} from './data.js';

import Pack from './pack.js';
import FAQ from './faq.js';

import './index.css';
import './kulinda.css';


export default class MountHelper extends React.Component {
	constructor(props) {
		super(props);
		let prices = [];
		for (let p = 0; p < packs.length; p++) {
			prices[p] = Object.assign({}, packs[p].prices);
		}
		this.state = {
			packidx: -1,
			selections: {},
			prices: prices
		};
		this.changeSelection = this.changeSelection.bind(this);
	}

	changePack(idx) {
		this.setState({
			packidx: idx
		});
	}

	changeSelection(mount, value) {
		this.setState((state) => {
			let s = Object.assign({}, state.selections);
			s[mount] = (s[mount] === value ? 'ignore' : value);
			return {
				selections: s
			};
		});
	}

	changePrices(pack, key, value) {
		let v = Number(value);
		if (Number.isNaN(v) || v < 0)
			return;
		this.setState((state) => {
			let p = state.prices.slice(0);
			let pr = Object.assign({}, p[pack]);
			p[pack] = pr;
			pr[key] = v;
			return {
				prices: p
			};
		});
	}

	render() {
		let {packidx, prices, selections} = this.state;

		return <div>
			<div className={'kulinda_header' + (packidx < 0 ? ' open' : '')}>
				<div className='inner'>
					<a href="https://kulinda.github.io/">Kulinda's GW2 Tools</a><span className='toolname'> > Mount Adoption Helper</span>
					<div className='links'>
						<div className={'link' + (packidx===-1 ? ' active' : '')} onClick={e => this.changePack(-1)}>FAQ</div>
						{packs.map((p, i) => <div className={'link' + (packidx===i ? ' active' : '')} key={i} onClick={e => this.changePack(i)}>
							{p.name}
						</div>)}
					</div>
				</div>
			</div>
			<div className='inner'>
				{packidx >= 0 ?
					<Pack pack={packs[packidx]}
						prices={prices[packidx]} onChangePrice={this.changePrices.bind(this, packidx)}
						selections={selections} onChange={this.changeSelection}
					/> :
					<FAQ />
				}
			</div>
		</div>;
	}
}


ReactDOM.render(<MountHelper />, document.getElementById('root'));
