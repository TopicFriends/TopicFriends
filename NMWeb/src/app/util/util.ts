
export function initFromObject<T>(objectToInit: T, initFrom: T) {
  Object.assign(objectToInit, initFrom);
}
