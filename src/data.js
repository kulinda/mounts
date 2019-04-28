
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
		'jackal': ['Banded Mystic', 'Crowned Ancient', 'Polished Stone (mount skin)', 'Pyroclast', 'Stardust (mount skin)', 'Twin Sands'],
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
		1: 400,
		5: 1800,
		15: 5100,
		select: 1200
	},
	mounts: {
		'raptor': ['Ntouka Snakescale', 'Starscale'],
		'springer': ['Kourna Jackrabbit', 'Painted Mesa'],
		'skimmer': ['Arid Hammerhead', 'Iceberg'],
		'jackal': ['Dune Mastiff', 'Mirror Masked'],
		'griffon': ['Northern Feather Wing', 'Storm Chaser', 'Tufted Night Eye'],
		'beetle': ['Colossal Ladybird', 'Funerary Scarab', 'Primeval (roller beetle skin)', 'Trailblazer (mount skin)'],
	}
};

const distantlands = {
	name: 'Distant Lands',
	prices: {
		1: 400,
		5: 1800,
		15: 5100,
		select: 1200
	},
	mounts: {
		'raptor': ['Auric Salamander', 'Luminous Prowler'],
		'springer': ['Krytan Lop', 'Starfall', 'Timberland Badged'],
		'skimmer': ['Banded Wave Fin', 'Southsun Torpedo'],
		'jackal': ['Exalted Ley Hunter', 'Liminal Moorhound'],
		'griffon': ['Sand Souled (griffon skin)', 'Snow Stalker', 'Shiverpeaks Pileated'],
		'beetle': ['Alloyed Construct', 'Striped Bahdzan', 'Jagged Kournan'],
	}
};

const exoticbreeds = {
	name: 'Exotic Breeds',
	prices: {
		1: 400,
		5: 1800,
		15: 5100,
		select: 1200
	},
	mounts: {
		'raptor': ['Masked Runner', 'Primordial Raptor', 'Exalted Gate Guardian'],
		'springer': ['Savannah Striperail', 'Brisban Brushtail', 'Alloyed Irontail'],
		'skimmer': ['Spotted Orchid', 'Sand Souled (skimmer skin)'],
		'jackal': ['Vabbi Lightpaw', 'Alloyed Quicksilver'],
		'griffon': ['Kournan Bright-Tail', 'Primeval (griffon skin)', 'Arctic Icewing'],
		'beetle': ['Ntouka Snakeshell', 'Starshell'],
	}
};

export const packs = [
	original,
	istani,
	racer,
	distantlands,
	exoticbreeds,
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
	'Stardust_(mount_skin)': 'images/9/98/Stardust_%28mount_skin%29.png',
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
	'Ntouka_Snakescale': 'images/6/64/Ntouka_Snakescale.png',
	'Starscale': 'images/0/03/Starscale.png',
	'Kourna_Jackrabbit': 'images/8/8f/Kourna_Jackrabbit.png',
	'Painted_Mesa': 'images/8/8f/Painted_Mesa.png',
	'Arid_Hammerhead': 'images/4/46/Arid_Hammerhead.png',
	'Iceberg': 'images/2/2a/Iceberg.png',
	'Dune_Mastiff': 'images/d/d3/Dune_Mastiff.png',
	'Mirror_Masked': 'images/9/94/Mirror_Masked.png',
	'Northern_Feather_Wing': 'images/9/9c/Northern_Feather_Wing.png',
	'Storm_Chaser': 'images/1/1f/Storm_Chaser.png',
	'Tufted_Night_Eye': 'images/1/1d/Tufted_Night_Eye.png',
	'Colossal_Ladybird': 'images/b/b7/Colossal_Ladybird.png',
	'Funerary_Scarab': 'images/e/e7/Funerary_Scarab.png',
	'Primeval_(roller_beetle_skin)': 'images/d/d1/Primeval_%28roller_beetle_skin%29.png',
	'Trailblazer_(mount_skin)': 'images/a/a2/Trailblazer_%28mount_skin%29.png',
	'Auric_Salamander': 'images/a/a6/Auric_Salamander.png',
	'Luminous_Prowler': 'images/3/37/Luminous_Prowler.png',
	'Krytan_Lop': 'images/2/2f/Krytan_Lop.png',
	'Starfall': 'images/a/a6/Starfall.png',
	'Timberland_Badged': 'images/3/38/Timberland_Badged.png',
	'Banded_Wave_Fin': 'images/f/f3/Banded_Wave_Fin.png',
	'Southsun_Torpedo': 'images/2/2c/Southsun_Torpedo.png',
	'Exalted_Ley_Hunter': 'images/f/f6/Exalted_Ley_Hunter.png',
	'Liminal_Moorhound': 'images/f/f9/Liminal_Moorhound.png',
	'Sand_Souled_(griffon_skin)': 'images/d/da/Sand_Souled_(griffon_skin).png',
	'Snow_Stalker': 'images/f/fa/Snow_Stalker.png',
	'Shiverpeaks_Pileated': 'images/8/80/Shiverpeaks_Pileated.png',
	'Alloyed_Construct': 'images/6/68/Alloyed_Construct.png',
	'Striped_Bahdzan': 'images/f/fd/Striped_Bahdzan.png',
	'Jagged_Kournan': 'images/9/9a/Jagged_Kournan.png',
	'Masked_Runner': 'images/8/8b/Masked_Runner.png',
	'Primordial_Raptor': 'images/2/25/Primordial_Raptor.png',
	'Exalted_Gate_Guardian': 'images/b/b3/Exalted_Gate_Guardian.png',
	'Savannah_Striperail': 'images/a/a9/Savannah_Striperail.png',
	'Brisban_Brushtail': 'images/7/78/Brisban_Brushtail.png',
	'Alloyed_Irontail': 'images/9/97/Alloyed_Irontail.png',
	'Spotted_Orchid': 'images/e/eb/Spotted_Orchid.png',
	'Sand_Souled_(skimmer_skin)': 'images/a/a0/Sand_Souled_%28skimmer_skin%29.png',
	'Vabbi_Lightpaw': 'images/e/ef/Vabbi_Lightpaw.png',
	'Alloyed_Quicksilver': 'images/7/7a/Alloyed_Quicksilver.png',
	'Kournan_Bright-Tail': 'images/a/ad/Kournan_Bright-Tail.png',
	'Primeval_(griffon_skin)': 'images/0/03/Primeval_%28griffon_skin%29.png',
	'Arctic_Icewing': 'images/6/6b/Arctic_Icewing.png',
	'Ntouka_Snakeshell': 'images/7/76/Ntouka_Snakeshell.png',
	'Starshell': 'images/d/d6/Starshell.png',
};
