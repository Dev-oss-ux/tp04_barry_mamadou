import { Mushroom } from "./mushroom";

export class AddMushroom {
  static readonly type = '[Mushroom] Add';

  constructor(public payload: Mushroom) {}
}

export class DelMushroom {
  static readonly type = '[Mushroom] Del';

  constructor(public payload: Mushroom) {}
}
