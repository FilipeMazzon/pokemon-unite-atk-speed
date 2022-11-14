export const getBonusSpeedRedEmblems = (level: number) => {
  switch (level) {
    case 3:
      return 2;
    case 5:
      return 4;
    case 7:
      return 8;
    default:
      return 0;
  }
};
