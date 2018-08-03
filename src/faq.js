import React from 'react';

function Q(props) {
	return <div><b>Q: {props.children}</b></div>;
}

function A(props) {
	return <div>A: {props.children}<br /><br /></div>;
}

export default function FAQ(props) {
	return <div className='faq'>
		<h1>Kulinda's Mount Adoption Helper</h1>
		<h2>FAQ</h2>
		<Q>What does this tool do?</Q>
		<A>It attempts to calculate the best strategy to purchase your favourite mount skins from a mount adoption pack. Select a mount adaption pack (at the top of the screen) and get started!</A>

		<Q>How do the formulas work?</Q>
		<A>For the original mount adoption pack, I've explained the math in a <a href="https://www.reddit.com/r/Guildwars2/comments/7cfbcr/mounts_and_math_how_much_for_the_skins_you_want/" target="_blank" rel="noopener noreferrer">reddit post</a>. The math changed somewhat with the introduction of the Mount Select Licenses in the second pack.<br />
		This tool uses <a href="https://en.wikipedia.org/wiki/Dynamic_programming" target="_blank" rel="noopener noreferrer">dynamic programming</a> to brute-force the best strategy at any point in time. See the source code on github, <a href="https://github.com/kulinda/mounts/blob/master/src/calculate.js" target="_blank" rel="noopener noreferrer">calculate.js</a>.</A>

		<Q>My desires are more complicated than purchasing a set of skins. For example, I just need one skimmer skin, no matter which.</Q>
		<A>That gets complicated real quick, and this tool is not intended to answer all those questions. You can find some math and values in the reddit thread linked in the previous question, and it's useful to know about the <a href="https://en.wikipedia.org/wiki/Hypergeometric_distribution" target="_blank" rel="noopener noreferrer">Hypergeometric distribution</a>.</A>

		<Q>What are the individual drop chances for each skin?</Q>
		<A>This tool assumes that all skins in each pack have the same drop chance. There is no significant evidence for any bias.</A>

		<Q>What dyes should I use on my mount?</Q>
		<A>Funny you should ask, because I made a <a href="https://kulinda.github.io/dyes/" target="_blank" rel="noopener noreferrer">GW2 Dye Browser</a>. Check it out.</A>

		<Q>I had bad luck and spent way more gems than the tool predicted!</Q>
		<A>Tough. No refunds.</A>

		<Q>I had good luck and now I have all these gems left over!</Q>
		<A>Tough. No refunds.</A>

		<Q>Some icons are missing, or gem prices are outdated!</Q>
		<A>Tough. No refunds. Icons are pulled directly from the wiki. Edit the wiki to fix them. You can adjust gem prices yourself; I will not patch this tool for every gem store update.</A>

		<Q>There's a a different bug in this tool!</Q>
		<A>Tough. No refunds. Send me a <a href="https://github.com/kulinda/mounts" target="_blank" rel="noopener noreferrer">pull request</a> with fixes if you like.</A>

		<Q>This tool has helped me a lot. How can I thank you?</Q>
		<A>Be excellent to each other. Avoid toxicity and negativity. Help new players. Organize events. Tag up at metas and provide explanations. Listen to your commanders.<br />
		It's in every player's power to make the game a better place for everyone. I'm doing my part with research and programming. You go do yours.</A>

		<h2>Copyright, legal notices and contact</h2>
		See <a href="https://kulinda.github.io/" target="_blank" rel="noopener noreferrer">kulinda.github.io</a>.
		<br />
		<br />
	</div>;
}
