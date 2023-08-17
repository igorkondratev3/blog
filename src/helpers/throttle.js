export const throttle = (func, ms) => {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper(...arg) {
    if (isThrottled) {
      savedArgs = arg;
      savedThis = this;
      return;
    }

    func.apply(this, arg);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};