import React, {
  useRef,
  useEffect,
  forwardRef,
  ReactNode,
  MutableRefObject,
} from "react";

type ClosableProps = {
  children: ReactNode;
  onOutsideClick: () => void;
};

// Utility function to handle both ref types
function setRef<T>(
  ref: MutableRefObject<T> | ((instance: T) => void) | null,
  value: T
) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const Closable = forwardRef<HTMLDivElement, ClosableProps>(
  ({ children, onOutsideClick }, forwardedRef) => {
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          innerRef.current &&
          !innerRef.current.contains(event.target as Node)
        ) {
          onOutsideClick();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onOutsideClick]);

    useEffect(() => {
      if (forwardedRef) {
        setRef(forwardedRef, innerRef.current);
      }
    }, [forwardedRef]);

    return <div ref={innerRef}>{children}</div>;
  }
);

export default Closable;
