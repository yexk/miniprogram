<?php
/**
 * wechat config by yexk
 */
return [
    'app_id' => Env::get('wx_appid'),
    'secret' => Env::get('wx_appsecret'),
    'token' => Env::get('wx_token'),
    'aes_key' => Env::get('wx_encodingaeskey'),

    // 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
    'response_type' => 'array',

    'log' => [
        'level' => 'debug',
        'file' => __DIR__.'/wechat.log',
    ],
];