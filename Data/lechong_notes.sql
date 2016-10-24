/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50542
 Source Host           : localhost
 Source Database       : LCGW

 Target Server Type    : MySQL
 Target Server Version : 50542
 File Encoding         : utf-8

 Date: 10/24/2016 09:19:56 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `lechong_notes`
-- ----------------------------
DROP TABLE IF EXISTS `lechong_notes`;
CREATE TABLE `lechong_notes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` char(30) DEFAULT '' COMMENT '行为唯一标识',
  `phone` int(30) NOT NULL COMMENT '行为说明',
  `email` varchar(140) DEFAULT '' COMMENT '行为描述',
  `notes` longtext COMMENT '行为规则',
  `status` int(11) unsigned DEFAULT '0' COMMENT '状态',
  `time` int(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='系统行为表';

SET FOREIGN_KEY_CHECKS = 1;
