<?php
namespace app\wechat\controller;
use think\Controller;
use Config;
use EasyWeChat\Factory;

class Index extends Controller
{
    private $config = null;
    /**
     * 微信配置读取构造函数
     */
    public function __construct() {
        $this->config = Config::pull('wechat');
    }
    /**
     * 小程序
     *
     * @return void
     */
    public function server()
    {
        $app = Factory::officialAccount($this->config);
        $response = $app->server->serve();

        $app->server->push(
            function ($message) {
                return "您好！欢迎使用 Yexk!". $message;
            }
        );

        // 将响应输出
        $response->send();
    }
}
