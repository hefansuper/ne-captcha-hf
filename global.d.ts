export {};

declare global {
  interface Window {
    initNECaptcha: Function;
    captchaIns: Object;
  }
}
