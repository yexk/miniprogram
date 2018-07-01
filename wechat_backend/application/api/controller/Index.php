<?php
namespace app\api\controller;
use think\Request;

class Index
{
    public function index(Request $requset)
    {
        $arr = ['code'=> 200, 'data' => 'get', 'msg' => 'success'];
        return json($arr);
    }
}
