import { useEffect } from "react";

export function useActiveClass(
  classNames: string[] = [],
  activeClassName: typeof classNames[keyof typeof classNames],
  element: HTMLElement = document.body
): void {
  useEffect(() => {
    classNames.forEach((name) => {
      element.classList[name === activeClassName ? "add" : "remove"](name);
    });
    return () => {
      classNames.forEach((name) => element.classList.remove(name));
    };
  }, [element, classNames, activeClassName]);
}
