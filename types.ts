
interface OptionsProps {
    element?: string;
    captchaId: string;
    mode?: string; // 仅智能无感知验证码时，mode 才能设置为 bind
    width?: string;
    enableClose?: boolean; // 由业务方控制验证码弹框关闭
    feedbackEnable?: boolean; // 业务方关闭反馈入口
    // 用户验证码验证成功后，进行实际的提交行为，data里面有validate参数。
    // eslint-disable-next-line
    onVerify: (err: any, data: any) => void;
}

interface NECaptchaProps {
    // 用户验证码验证成功后，进行实际的提交行为
    options: OptionsProps;
    onError?: (err: any) => void;
}