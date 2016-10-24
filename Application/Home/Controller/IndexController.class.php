<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Home\Controller;
use OT\DataDictionary;

/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class IndexController extends HomeController {

	//系统首页
    public function index(){

        $category = D('Category')->getTree();
        $lists    = D('Document')->lists(null);

        $this->assign('category',$category);//栏目
        $this->assign('lists',$lists);//列表
        $this->assign('page',D('Document')->page);//分页

                 
        $this->display();
    }

    /*首页 联系我们 by zjw*/
    public function contact(){
        $post  = I('post.');
        if(empty($post['name']) ){
            echo "信息不完整";die;
        }
        if(empty($post['phone']) ){
            echo '信息不完整';die;
        }
        if(empty($post['email']) ){

            echo '信息不完整';die;
        }
        if(empty($post['notes']) ){
            echo '信息不完整';die;
        }
        $post['time'] = time();
        $Model = D('notes');
        if($Model->add($post)) {
            $data['code']='succes';
            $data['msg']='提交成功';
            echo '提交成功';die;
        }else{
            $data['code']='error';
            $data['msg']='提交失败';
            echo '提交失败';die;
        }


    }

}