import React, { useEffect } from "react";
import dayjs from "dayjs";

function NECaptcha({
  options: {
    element,
    captchaId,
    mode,
    width,
    enableClose,
    feedbackEnable,
    onVerify,
  },
  onError,
}: NECaptchaProps) {
  useEffect(() => {
    let _scriptDom = document.createElement("script");
    const currentTime = dayjs().format("YYYYMMDDHHmm");

    console.log(currentTime, "currentTime");

    _scriptDom.charset = "UTF-8";
    _scriptDom.type = "text/javascript";
    _scriptDom.src = `https://cstaticdun.126.net/load.min.js?t=${currentTime}`;
  }, []);

  useEffect(() => {
    window.initNECaptcha(
      {
        element: element || "#captcha",
        captchaId,
        mode: mode || "bind", // 仅智能无感知验证码时，mode 才能设置为 bind
        width: width || "320px",
        enableClose: enableClose || true, // 由业务方控制验证码弹框关闭
        feedbackEnable: feedbackEnable || false, // 业务方关闭反馈入口
        // 用户验证码验证成功后，进行实际的提交行为
        onVerify,
      },
      function (instance: { refresh: () => void }) {
        // 初始化成功后得到验证实例instance，可以调用实例的方法
        // 禁止在初始化后立即调用instance.verify，详情参见常见问题-前端接入问题
        window.captchaIns = instance;
      },
      // eslint-disable-next-line
      onError
    );

    return () => {
      window.captchaIns && window.captchaIns.destroy();
    };
  }, []);

  return <div id="captcha"></div>;
}

export default React.memo(NECaptcha);
