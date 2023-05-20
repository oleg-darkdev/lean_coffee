import { writable } from 'svelte/store';

// planning stage
const themeTimeSetting = writable(0),
	allTimeSetting = writable(0),
	shtormingTimeSetting = writable(0),
	groomingTimeSetting = writable(0),
	voitingTimeSetting = writable(0),
	themesCount = writable(0),
  speakingTimeSetting = writable(0);


export {
	themeTimeSetting,
	allTimeSetting,
	shtormingTimeSetting,
	groomingTimeSetting,
	voitingTimeSetting,
	themesCount,
	speakingTimeSetting
};

