
const original = {
	name: 'Original Set',
	prices: {
		1: 400,
		10: 3400,
		30: 9600
	},
	mounts: {
		'raptor': ['Canyon Spiketail', 'Coastal Spiketail', 'Flamelander', 'Savannah Monitor', 'Storm Ridge', 'Striped Tri-horn'],
		'springer': ['Arctic Jerboa', 'Desert Lop', 'Elonian Jackalope', 'Primal Hare', 'Tawny Hare', 'Windy Spot'],
		'skimmer': ['Bright Ringfin', 'Dajkah Lantern', 'River Moth Wing', 'Oasis Skate', 'Oceanic Ray', 'Spined Longtail'],
		'jackal': ['Banded Mystic', 'Crowned Ancient', 'Polished Stone (mount skin)', 'Pyroclast', 'Stardust', 'Twin Sands'],
		'griffon': ['Badlands Stalker', 'Clouded Corvus', 'Fire Pinion', 'Highlands Harrier', 'Spotted Sylph', 'Starbound'],
	}
};

const istani = {
	name: 'Istani Isles',
	prices: {
		1: 400,
		5: 1800,
		select: 1200
	},
	mounts: {
		'raptor': ['Dzalana Ice Scale', 'Lahtenda Bog Hunter', 'Striped Jarin'],
		'springer': ['Issnur Long Hair', 'Primeval (springer skin)', 'Sargol Thunderer'],
		'skimmer': ['Oceanic Broadtail', 'Primus Beta', 'Stardrift'],
		'jackal': ['Ceylon Cut', 'Iceflow', 'Primeval (jackal skin)'],
		'griffon': ['Exalted Sky Sentry', 'Istani Bald', 'Sky Bandit'],
	}
};

const racer = {
	name: 'Desert Racer',
	prices: {
		1: 400, // TODO: this is just guesswork
		5: 1800,
		select: 1200
	},
	mounts: {
		'raptor': ['Ntouka Snakescale', 'Starscale'],
		'springer': ['Kourna Jackrabbit', 'Painted Mesa'],
		'skimmer': ['Arid Hammerhead', 'Iceberg'],
		'jackal': ['Dune Mastiff', 'Mirror Masked'],
		'griffon': ['Northern Feather Wing', 'Storm Chaser', 'Tufted Night Eye'],
		'beetle': ['Colossal Ladybird', 'Funerary Scarab', 'Primeval (roller beetle skin)', 'Trailblazer (roller beetle skin)'],
	}
};

export const packs = [
	original,
	istani,
	racer,
];

export const iconurls = {
	'Canyon_Spiketail': 'images/0/04/Canyon_Spiketail.png',
	'Coastal_Spiketail': 'images/a/ad/Coastal_Spiketail.png',
	'Flamelander': 'images/c/c0/Flamelander.png',
	'Savannah_Monitor': 'images/e/ec/Savannah_Monitor.png',
	'Storm_Ridge': 'images/5/5a/Storm_Ridge.png',
	'Striped_Tri-horn': 'images/f/f7/Striped_Tri-horn.png',
	'Arctic_Jerboa': 'images/7/77/Arctic_Jerboa.png',
	'Desert_Lop': 'images/6/6c/Desert_Lop.png',
	'Elonian_Jackalope': 'images/0/0b/Elonian_Jackalope.png',
	'Primal_Hare': 'images/8/80/Primal_Hare.png',
	'Tawny_Hare': 'images/2/22/Tawny_Hare.png',
	'Windy_Spot': 'images/1/10/Windy_Spot.png',
	'Bright_Ringfin': 'images/e/ec/Bright_Ringfin.png',
	'Dajkah_Lantern': 'images/8/8b/Dajkah_Lantern.png',
	'River_Moth_Wing': 'images/1/1e/River_Moth_Wing.png',
	'Oasis_Skate': 'images/8/86/Oasis_Skate.png',
	'Oceanic_Ray': 'images/f/f0/Oceanic_Ray.png',
	'Spined_Longtail': 'images/5/52/Spined_Longtail.png',
	'Banded_Mystic': 'images/c/c4/Banded_Mystic.png',
	'Crowned_Ancient': 'images/3/3b/Crowned_Ancient.png',
	'Polished_Stone_(mount_skin)': 'images/2/2f/Polished_Stone_%28mount_skin%29.png',
	'Pyroclast': 'images/9/96/Pyroclast.png',
	'Stardust': 'images/6/65/Stardust.png',
	'Twin_Sands': 'images/b/bc/Twin_Sands.png',
	'Badlands_Stalker': 'images/c/c5/Badlands_Stalker.png',
	'Clouded_Corvus': 'images/0/0e/Clouded_Corvus.png',
	'Fire_Pinion': 'images/6/6d/Fire_Pinion.png',
	'Highlands_Harrier': 'images/a/a2/Highlands_Harrier.png',
	'Spotted_Sylph': 'images/c/ca/Spotted_Sylph.png',
	'Starbound': 'images/a/a9/Starbound.png',
	'Dzalana_Ice_Scale': 'images/b/bd/Dzalana_Ice_Scale.png',
	'Lahtenda_Bog_Hunter': 'images/7/7a/Lahtenda_Bog_Hunter.png',
	'Striped_Jarin': 'images/1/18/Striped_Jarin.png',
	'Issnur_Long_Hair': 'images/5/5a/Issnur_Long_Hair.png',
	'Primeval_(springer_skin)': 'images/a/a0/Primeval_%28springer_skin%29.png',
	'Sargol_Thunderer': 'images/a/a1/Sargol_Thunderer.png',
	'Oceanic_Broadtail': 'images/9/9a/Oceanic_Broadtail.png',
	'Primus_Beta': 'images/1/1c/Primus_Beta.png',
	'Stardrift': 'images/4/49/Stardrift.png',
	'Ceylon_Cut': 'images/4/49/Ceylon_Cut.png',
	'Iceflow': 'images/4/48/Iceflow.png',
	'Primeval_(jackal_skin)': 'images/0/00/Primeval_%28jackal_skin%29.png',
	'Exalted_Sky_Sentry': 'images/b/b5/Exalted_Sky_Sentry.png',
	'Istani_Bald': 'images/f/f3/Istani_Bald.png',
	'Sky_Bandit': 'images/0/04/Sky_Bandit.png',
};
