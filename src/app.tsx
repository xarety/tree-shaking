import * as React from "react";

import { Foo } from "./components";
import { foo } from "./utils";

export const App: React.FC = () => {
  foo();
  return <Foo>App</Foo>;
};
