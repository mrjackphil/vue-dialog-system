export interface Dialogue {
  id: number;
  name?: string;
  elements?: DialogueEl[];
}

export interface DialogueEl {
  id: number;
  name?: string;
  content?: string;
  linked?: DialogueEl[];
}

export interface Objects {
  id: number;
  type: string;
  name?: string;
}

export interface IState {
  objects: Objects[];
  dialogues: Dialogue[];
  activeDialog: number;
}
