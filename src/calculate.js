
function choose(n, k) {
	// n! / (k!(n-k)!)
	if (k > n || n < 0 || k < 0)
		throw new Error(`choose(${n}, ${k}) not defined`);

	// https://en.wikipedia.org/wiki/Binomial_coefficient#Multiplicative_formula
	k = Math.min(k, n - k);
	let res = 1;
	for (let i = n-k+1; i <= n; i++)
		res *= i;
	for (let i = 1; i <= k; i++)
		res /= i;
	return res;
}

// Returns the purchase options as an array, e.g. [30, 10, 1, 'select']
function getSortedPriceKeys(prices) {
	let keys = [];
	for (let p in prices) {
		let v = Number(p);
		if (v > 0)
			keys.push(v);
		else if (p === 'select')
			; // ignore for now
		else
			throw new Error('Non-numeric price found ' + p + '/' + typeof(p));
	}
	keys.sort().reverse();
	if (prices.select)
		keys.push('select');
	return keys;
}


function solve(total, prices) {
	let keys = getSortedPriceKeys(prices);

	// Use dynamic programming here
	// best[remaining][want] = {..}
	// We iterate over 'want'
	let best = [];
	// if we want 0 mounts, our price is 0
	for (let r = 0; r <= total; r++) {
		best[r] = [];
		best[r][0] = {
			strategy: {},
			choice: null,
			price: 0
		};
	}

	// now let's see what happens if we want more mounts
	for (let want = 1; want <= total; want++) {
		for (let r = want; r <= total; r++) {
			let strategies = [];
			for (let key of keys) {
				let price = prices[key];
				if (key === 'select') {
					let prev = best[r - 1][want - 1];
					strategies.push([prev.price + price, key]);
				}
				else if (key >= r) {
					strategies.push([price, key]);
				}
				else {
					let avg_price = 0;
					let combinations = choose(r, key);
					// We don't know how many of our wanted mounts we get, so we need to sum the possibilities.
					for (let i = 0; i <= key && i <= want; i++) {
						// Chance to hit exactly 'i' of the wanted mounts with 'key' licenses
						// See: https://en.wikipedia.org/wiki/Hypergeometric_distribution
						let N = r;
						let K = want;
						let n = key;
						let k = i;
						if (n-k > N-K)
							continue;
						//let chance = choose(K, k) * choose(N-K, n-k) / choose(N, n);
						let chance = choose(K, k) * choose(N-K, n-k) / combinations;

						let prev = best[r - key][want - i];
						avg_price += chance * prev.price;
					}
					strategies.push([avg_price + price, key]);
				}
			}
			let b = {
				strategy: {},
				choice: null,
				price: Infinity
			};
			if (strategies.length > 0) {
				strategies.sort((a, b) => a[0] - b[0]);
				let beststrat = strategies[0];

				b.price = beststrat[0];
				b.choice = beststrat[1];
				for (let strat of strategies) {
					b.strategy[ strat[1] ] = strat[0];
				}
			}
			best[r][want] = b;
		}
	}

	return best;
};

// The purchase strategies only depend on the purchase options/prices,
// so we shall only compute them once.
function getPriceHash(total, prices) {
	let keys = getSortedPriceKeys(prices);
	let hash = [];
	for (let k of keys) {
		hash.push(k + '#' + prices[k]);
	}
	return total + ':' + hash.join('|');
}

let solutions = {};
export default function getSolution(total, remaining, want, prices) {
	let hash = getPriceHash(total, prices);
	if (!solutions[hash])
		solutions[hash] = solve(total, prices);

	let s = solutions[hash];
	return s[remaining][want];
}
