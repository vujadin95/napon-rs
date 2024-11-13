import { useEventListener } from "./useEventListener";

const useClickOutside = (modalRef, callback) => {
  useEventListener("click", (e) => {
    if (!modalRef == null || !modalRef.current.contains(e.target))
      return callback();
  });
};

export { useClickOutside };
