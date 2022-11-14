export const CalculateFramePerAtk = (value) => {
  if (value > 272.5) {
    return 16;
  }
  if (value > 202.4) {
    return 20;
  }
  if (value > 151.81) {
    return 24;
  }
  if (value > 115.99) {
    return 28;
  }
  if (value > 89.04) {
    return 32;
  }
  if (value > 68.05) {
    return 36;
  }
  if (value > 51.29) {
    return 40;
  }
  if (value > 37.56) {
    return 44;
  }
  if (value > 26.11) {
    return 48;
  }
  if (value > 16.42) {
    return 52;
  }
  if (value > 8.1) {
    return 56;
  }
  if (value > 0) {
    return 60;
  }
};
