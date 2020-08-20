// TODO 为啥没有作用？？？？

export {};

declare global {
  interface Window {
    // TODO 类型更详细
    initNECaptcha: Function;
    // TODO 类型更详细
    captchaIns: Object;
  }
}
