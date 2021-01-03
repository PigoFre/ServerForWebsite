import { saveSettings } from './lib/helpers/storage';
import { isMobile, isFirefox } from 'mobile-device-detect';
import { setScale } from './gui/main';
import { IFormatedText } from './gui/parts/formtextblock';

export const gameVersion = '0.2.0-beta.14';

export const gameProtocol = 3;

export const heartbeatServer = 'pb4.eu:9001';

export const defaultSettings: IGameSettings = {
	version: '0.0.0',
	nickname: `Player${Math.round(Math.random() * 100000)}`,
	autostep: isMobile,
	gamepad: false,
	singleplayer: false,
	allowcustom: false,
	mouse: isMobile ? 50 : 15,
	viewDistance: isMobile ? 3 : isFirefox ? 2 : 5,
	hotbarsize: 9,
	scale: 3,
	fov: 70,
	fpslimit: 0,
	debugInfo: false,
	controls: {
		forward: 'W',
		left: 'A',
		backward: 'S',
		right: 'D',
		fire: '<mouse 1>',
		'mid-fire': '<mouse 2>',
		'alt-fire': '<mouse 3>',
		jump: '<space>',
		inventory: 'E',
		muteMusic: 'O',
		thirdprsn: 'M',
		chatenter: '<enter>',
		chat: 'T',
		cmd: '/',
		tab: '`',
		menu: '<escape>',
		screenshot: 'P',
		hide: 'O',
		zoom: 'Z',
	},
};

export let gameSettings: IGameSettings = { ...defaultSettings, version: gameVersion };

export interface IGameSettings {
	version: string;
	nickname: string;
	autostep: boolean;
	gamepad: boolean;
	singleplayer: boolean;
	allowcustom: boolean;
	mouse: number;
	viewDistance: number;
	hotbarsize: number;
	scale: number;
	fov: number;
	fpslimit: number;
	debugInfo: boolean;
	controls: { [i: string]: string };
}

export function updateSettings(data: Object) {
	gameSettings = { ...defaultSettings, ...data };
	setScale(gameSettings.scale);
	saveSettings(gameSettings);
}

export const defaultServerSettings = {
	cheats: false,
	control: false,
	ingame: false,
};

export let serverSettings = { ...defaultServerSettings };

export function updateServerSettings(data: Object) {
	serverSettings = { ...serverSettings, ...data };
}

export const defaultValues = {
	fogMode: 0,
	fogStart: 20,
	fogEnd: 60,
	fogDensity: 0.1,
	fogColor: [0, 0, 0],
	blockTestDistance: 7,
	clearColor: [0.8, 0.9, 1],
	backgroundColor: '#00000077',
	menuColor: '#11111177',
};

export function noaOpts() {
	return {
		debug: true,
		showFPS: true,
		inverseY: false,
		inverseX: false,
		sensitivityX: gameSettings.mouse,
		sensitivityY: gameSettings.mouse,
		chunkSize: 32, // Don't touch this
		chunkAddDistance: gameSettings.viewDistance,
		chunkRemoveDistance: gameSettings.viewDistance,
		blockTestDistance: defaultValues.blockTestDistance,
		tickRate: 20,
		texturePath: '',
		playerStart: [0, 100, 0],
		playerHeight: 1.85,
		playerWidth: 0.6,
		playerAutoStep: gameSettings.autostep ? 1 : 0,
		clearColor: defaultValues.clearColor,
		ambientColor: [1, 1, 1],
		lightDiffuse: [1, 1, 1],
		lightSpecular: [1, 1, 1],
		groundLightColor: [1, 1, 1],
		useAO: true,
		AOmultipliers: [0.93, 0.8, 0.5],
		reverseAOmultiplier: 1.0,
		preserveDrawingBuffer: true,
		stickyPointerLock: false,
		adaptToDeviceRatio: false,
		gravity: [0, -14, 0],
		bindings: {}, // Bindings are now stored in settings
		tickInUnloadedChunks: true,
		ignorePointerLock: false,
		manuallyControlChunkLoading: true,
	};
}

export const defaultFonts = [
	'silkscreen',
	'Lato',
	'Lato-Italic',
	'Lato-Black',
	'Lato-BlackItalic',
	'Lato-Bold',
	'Lato-BoldItalic',
	'Lato-Light',
	'Lato-LightItalic',
	'Lato-Thin',
	'Lato-ThinItalic',
	'PixelOperator-Bold',
	'PixelOperator',
	'PixelOperator8-Bold',
	'PixelOperator8',
	'PixelOperatorHB',
	'PixelOperatorHB8',
	'PixelOperatorHBSC',
	'PixelOperatorMono-Bold',
	'PixelOperatorMono',
	'PixelOperatorMono8-Bold',
	'PixelOperatorMono8',
	'PixelOperatorMonoHB',
	'PixelOperatorMonoHB8',
	'PixelOperatorSC-Bold',
	'PixelOperatorSC',
];

export let noa = null;
export function setNoa(x) {
	noa = x;
}

let tempHost = '???';
export const hostname = window.location.hostname;
export const parms = new URLSearchParams(window.location.search);

if (hostname == '0.0.0.0' || hostname == 'localhost') tempHost = 'Localhost/DEV';
else if (hostname == 'voxelsrv-master.pb4.eu') tempHost = 'Development';
else if (hostname == 'voxelsrv.pb4.eu') tempHost = '';
else if (hostname == 'pb4.eu') tempHost = '';
else if (window['electron'] != undefined) tempHost = '';
else tempHost = 'Unofficial/Undefined rehost!';

export let hostedOn = tempHost;

const splashes: IFormatedText[][] = [
	[{ text: `It's not Minecraft clone... or is it?` }],
	[{ text: `Written in Typescript` }],
	[{ text: `Powered by Noa Engine` }],
	[{ text: `Open Source` }],
	[{ text: `Multiplayer supported!` }],
	[{ text: `You can fork it!` }],
	[{ text: `Available on github` }],
	[{ text: `Bottom text` }],
	[{ text: `Pixelated`, font: 'PixelOperator-Bold' }],
	[{ text: `In development` }],
	[{ text: `404: File not found` }],
	[{ text: `:concern:` }],
	[{ text: `[🥔]` }],
	[{ text: `Works in browser` }],
	[{ text: `youtu.be/dQw4w9WgXcQ` }],
	[{ text: `Do not do it` }],
	[{ text: `discord.gg/K9PdsDh` }],
	[{ text: `Not for sale` }],
	[{ text: `Includes bugs` }],
	[{ text: `Checkout on github!` }],
	[{ text: `+ 5 new DLC characters` }],
	[{ text: `TODO: Add accounts` }],
	[{ text: `Does anyone read these?` }],
	[{ text: `Created by Patbox` }],
	[{ text: `Classical gameplay` }],
	[{ text: `Hello World` }],
	[{ text: `Works on mobile` }],
	[{ text: gameVersion }],
	[{ text: `PixelPerfection!` }],
];

export function getSplash() {
	let x = Math.floor(Math.random() * splashes.length);
	return splashes[x];
}

export const aboutText = [
	{ text: 'Created by: ' },
	{ text: 'Patbox', url: 'https://github.com/Patbox', color: 'lightblue' },
	{ text: '\nBuild on top of ' },
	{ text: 'Noa Engine by Andy Hall', color: 'lightblue', url: 'https://github.com/andyhall/noa' },
	{ text: '\nUsed textures: ' },
	{ text: 'PixelPerfection', color: 'lightblue', url: 'https://github.com/Athemis/PixelPerfectionCE' },
	{ text: ' by XSSheep and others' },
	{ text: '\n\n\n' },
	{ text: 'MC Classic support is based on work by ' },
	{ text: 'rom1504 and mhsjlw', color: 'lightblue', url: 'https://github.com/mhsjlw/minecraft-classic-protocol' },
	{ text: '\nClassic server list is provided by ' },
	{ text: "MineOnline", color: 'lightblue', url: 'https://mineonline.codie.gg/servers' },
];