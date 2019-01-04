export function isNameInArray(arr: Array<{}>, n: string) {
    return arr.filter( (e: {name?: string} ) => e.name === n ).length > 0; }

export function maxInArray(arr: number[]) {
    const m = Math.max.apply(Math, arr);
    return isFinite(m) ? m : 0; }

export function objId(o: {id?: number}) {
    return o.id ? o.id : 0; }

export function add(n: number, y: number) {
    return n + y; }

export function add1(n: number) {
    return add(n, 1); }
