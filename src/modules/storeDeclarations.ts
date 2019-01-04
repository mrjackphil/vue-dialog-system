export interface IObject {
  id: number;
}

export interface Dialogue extends IObject {
  name?: string;
}

export interface Objects extends IObject {
  type: string;
  name?: string;
}
