const RESIZE_URL = 'https://am-a.akamaihd.net/image?resize=';

export function resizeImgSrc(size, imgSrc) {
  return `${RESIZE_URL}${size}:&f=${imgSrc}`;
}