/// <reference types="node" />
import { IAudioItem, Iplaylist } from './interfaces';
import { EventEmitter } from 'events';
import cplayerView, { ICplayerViewOption } from './view';
export interface ICplayerOption {
    playlist?: Iplaylist;
}
export default class cplayer extends EventEmitter {
    private __paused;
    view: cplayerView;
    audioElement: HTMLAudioElement;
    private playmode;
    private playmodeName;
    mode: string;
    readonly playlist: IAudioItem[];
    readonly nowplay: IAudioItem;
    readonly played: boolean;
    readonly paused: boolean;
    constructor(options: ICplayerOption & ICplayerViewOption);
    private initializeEventEmitter();
    private eventHandlers;
    openAudio(audio?: IAudioItem): void;
    play(): void;
    toggleMode(): void;
    setMode(playmode: string): void;
    getMode(): string;
    pause(): void;
    to(id: number): void;
    next(): void;
    prev(): void;
    togglePlayState(): void;
    setVolume(volume: number): void;
}