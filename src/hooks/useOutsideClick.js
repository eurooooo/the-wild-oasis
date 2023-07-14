import { useEffect, useRef } from "react";

export default function useOutsideClick(handle, capture = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handle();
      }
    }
    document.addEventListener("click", handleClick, capture);

    return () => {
      document.removeEventListener("click", handleClick, capture);
    };
  }, [ref, handle, capture]);

  return ref;
}
