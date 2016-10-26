<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------


namespace Addons\DevTeam;
use Common\Controller\Addon;

/**
 * 首页联系信息插件
 * @author by zjw
 */

    class DevTeamAddon extends Addon{

        public $info = array(
            'name'=>'DevTeam',
            'title'=>'联系我们',
            'description'=>'联系我们信息',
            'status'=>1,
            'author'=>'lechong',
            'version'=>'0.1'
        );

        public function install(){
            return true;
        }

        public function uninstall(){
            return true;
        }

        //实现的AdminIndex钩子方法
        public function AdminIndex($param){
            $config = $this->getConfig();
            $this->assign('addons_config', $config);
            $Model = D('notes');
            if($config['display']) {
                $data = $Model->where('status=0')->order('time desc')->select();
                foreach ($data as $k=>$v){
                    $data[$k]['time'] = date("Y-m-d H:i", $v['time']);
                }
                $this->assign('data', $data);
                $this->display('widget');
            }
        }
    }