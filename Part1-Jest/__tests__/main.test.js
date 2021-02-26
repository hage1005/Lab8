const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume', () => {
  test('0', () => {
    expect(formatVolumeIconPath(0)).toMatch("./assets/media/icons/volume-level-0.svg");
  });

  test('1', () => {
    expect(formatVolumeIconPath(1)).toContain("1");
  });

  test('34', () => {
    expect(formatVolumeIconPath(34)).toMatch("./assets/media/icons/volume-level-2.svg");
  });

  test('67', () => {
    expect(formatVolumeIconPath(67)).toMatch("./assets/media/icons/volume-level-3.svg");
  });
});
