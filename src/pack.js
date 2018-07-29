import React from 'react';

import getSolution from './calculate.js';
import MountList from './mountlist.js';

class Prices extends React.Component {
	render() {
		let {prices, onChangePrice} = this.props;

		return <div>
			<table><tbody>
				<tr><td>Purchase</td><td>Price</td></tr>
				{Object.entries(prices).map(p =>
					<tr key={p[0]}><td>{p[0] === 'select' ? 'Select License' : (p[0]+'-Pack')}</td><td>
						<input type="text" value={p[1]} size='5' onChange={e => onChangePrice(p[0], e.target.value)} />
						<img src="https://wiki.guildwars2.com/images/a/aa/Gem.png" alt="Gems" />
					</td></tr>)}
			</tbody></table>
		</div>;
	}
};

class Result extends React.Component {
	render() {
		let {mounts, selections, prices} = this.props;

		// Count the mounts
		let counts = {
			total: 0,
			want: 0,
			ignore: 0,
			have: 0
		};

		for (let m in mounts) {
			for (let name of mounts[m]) {
				let s = selections[name] || 'ignore';
				counts.total++;
				counts[s]++;
			}
		}

		if (counts.want + counts.ignore + counts.have !== counts.total) {
			return <div>Error</div>;
		}

		let want = counts.want;
		let remaining = counts.ignore + counts.want;
		if (remaining < 1)
			return <div>You have all the mounts!</div>;
		if (want < 1 && counts.have > 0)
			return <div>You got all the mounts you want!</div>;
		if (want < 1)
			return <div>Mark some skins that you want on the left!</div>;

		let strategies = getSolution(counts.total, remaining, want, prices).strategy;
		let all_price = getSolution(counts.total, remaining, remaining, prices).price;

		let strats = Object.entries(strategies);
		let value = {'all': 999, 'select': 1};
		strats.push(['all', all_price]);
		strats.sort((a, b) => {
			if (a[1] !== b[1])
				return a[1] - b[1];
			return (value[b[0]] || b[0]) - (value[a[0]] || a[0]);
		});

		if (strats.length < 1)
			return <div>Error</div>;

		return <div>
			You want {want} of {remaining} mounts.<br />
			<br />
			<small>Expected total costs for all your wanted mount skins, depending on your next purchase:</small><br />
			<table><tbody>
			<tr><td>Purchase</td><td>Expected total costs</td></tr>
			{strats.map((s, i) => <tr key={s[0]} className={i === 0 || s[1] === strats[0][1] ? 'best' : ''}>
				<td>{s[0] === 'select' ? 'Select License' : (s[0] === 'all' ? 'Buy all' : (s[0]+'-Pack'))}</td>
				<td>{Math.ceil(s[1])} <img src="https://wiki.guildwars2.com/images/a/aa/Gem.png" alt="Gems" /></td>
				</tr>)}
			</tbody>
			</table>
			<small>Do one purchase, update which skins you got on the left, then you'll see an updated prediction.</small><br />
			<br />
			<small>Note: The "expected value" is an average, not a guarantee. If you use this tool without understanding stochastic, you have only yourself to blame.</small>
		</div>;
	}
};


export default class Pack extends React.Component {
	render() {
		let {pack, prices, selections, onChange, onChangePrice} = this.props;
		if (!pack)
			return null;
		return <div>
			<div className='leftcol'>
				<fieldset>
					<legend>Skins</legend>
					<small style={{float: 'right'}}>You can click the icons to see the wiki article.</small>
					Select all the skins that you <i>want</i> or you <i>have</i>.<br />
					<MountList mounts={pack.mounts} selections={selections} onChange={onChange} />
				</fieldset>
			</div>
			<div className='rightcol'>
				<fieldset>
					<legend>Prices</legend>
					<small>Adjust gemstore prices if needed.</small><br />
					<Prices prices={prices} onChangePrice={onChangePrice} />
				</fieldset>
				<fieldset>
					<legend>Results</legend>
					<Result mounts={pack.mounts} selections={selections} prices={prices} />
				</fieldset>
			</div>
		</div>;
	}
};
