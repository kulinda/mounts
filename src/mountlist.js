import React from 'react';

import {iconurls} from './data.js';

import './mountlist.css';

function getWikiInfo(name) {
	let wikiname = name.replace(/ /g, '_');
	let url = 'https://wiki.guildwars2.com/wiki/' + wikiname;
	let img;
	if (iconurls[wikiname])
		img = 'https://wiki.guildwars2.com/' + iconurls[wikiname];
	else
		img = 'https://wiki.guildwars2.com/wiki/Special:Redirect/file/' + wikiname + '.png?width=64';
	return {
		url: url,
		img: img
	};
}

export default class MountList extends React.Component {
	render() {
		let {mounts, selections, onChange} = this.props;

		let rows = [];
		for (let mname in mounts) {
			let ucmname = mname.substr(0, 1).toUpperCase() + mname.substr(1);
			rows.push(<small key={'hr-'+mname} className='hr'>{ucmname}</small>);
			for (let m of mounts[mname]) {
				let v = selections[m] || 'ignore';
				let {url, img} = getWikiInfo(m);
				let rawname = m.replace(/ \(.*\)/, '');

				rows.push(<div key={m} className='mountrow'>
					<a href={url} target='_blank' rel="noopener noreferrer" className='img'><img width="64" height="64" src={img} alt={rawname} title={rawname} /></a>
					<div className='desc'>
						<span title={rawname}>{rawname}</span>
					</div><br />
					<div className={v === 'want' ? 'button active' : 'button'} onClick={e => onChange(m, 'want')}>I want this</div>
					<div className={v === 'have' ? 'button active' : 'button'} onClick={e => onChange(m, 'have')}>I have this</div>
				</div>);
			}
		}

		return <div className='mountrows'>{rows}</div>;
	}
}
