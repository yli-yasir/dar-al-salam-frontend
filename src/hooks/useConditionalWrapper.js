import { Fragment } from "react";

export default function useConditionalWrapper({
  condition,
  wrapper,
  wrapperProps,
}) {
  //Consider using state here.

  if (condition) {
    return [wrapper, wrapperProps];
  }
  return [Fragment, {}];
}
