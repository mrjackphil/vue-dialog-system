import {objName, objId} from './functions';

interface WithID { id: number; }

export const fst = (arr: any[]) => arr.length > 0 ? arr[0] : null;

export const isNameInArray = (arr: Array<{}>, n: string) =>
    arr.filter( (e) => objName(e) === n ).length > 0;

export const findById = (arr: WithID[], id: number) =>
    arr.filter( (e) => e.id === id );

export const getIds = (arr: WithID[]) => arr.map( (e) => objId(e) );

export const objInArr = (f: (e: {}) => boolean, arr: Array<{}>) =>
    arr.filter( (e) => f(e) );

export const arrMax = (arr: number[]) => {
    const m = Math.max.apply(Math, arr);
    return isFinite(m) ? m : 0; };

export const arrsMax = (...arr: number[][] ) =>
    arrMax( arr.map( (a) => arrMax(a) ) );
