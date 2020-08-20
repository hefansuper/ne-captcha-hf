// 开始校验
function startVerify() {
  (window as any).captchaIns && (window as any).captchaIns.verify();
}

export { startVerify };
