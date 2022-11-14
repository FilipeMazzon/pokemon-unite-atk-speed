export const castArrayToMap = <ArrayType = any>(
  map: ArrayType[],
): Map<string, ArrayType> => {
  const newMap: Map<string, ArrayType> = new Map<string, ArrayType>();
  if (map && map.length) {
    map.forEach((value: ArrayType) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newMap.set(value.name, value);
    });
  }
  return newMap;
};
