import { useEffect, useRef } from "react";

const useEventListener = (eventType, handler) => {
  const handlerRef = useRef(handler);

  // Update the handler reference whenever it changes
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const internalHandler = (e) => {
      handlerRef.current(e);
    };

    // Attach the event listener to the document
    document.addEventListener(eventType, internalHandler);

    // Cleanup the event listener on unmount or when eventType changes
    return () => {
      document.removeEventListener(eventType, internalHandler);
    };
  }, [eventType]);
};

export { useEventListener };
