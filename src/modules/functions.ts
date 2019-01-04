export const objName = (o: {name?: string}) => o.name ? o.name : '';

export const empty = (a: any) => emptyOfType( typeOf(a) );

export const emptyOfType = (s: string) => {
    switch (s) {
        case 'string':
            return '';
        case 'number':
            return 0;
        case 'object':
            return {};
        case 'array':
            return [];
    }
};

export const typeOf = (a: any) => {
    if (Array.isArray(a)) { return 'array'; }
    return typeof a;
};

export const objId = (o: {id?: number}) => o.id ? o.id : 0;

export const add = (n: number, y: number) => n + y;

export const add1 = (n: number) => add(n, 1);
