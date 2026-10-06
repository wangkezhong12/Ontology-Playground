import type { en } from './en';

/**
 * Chinese dictionary. Static keys are Partial — a missing key falls back to
 * the en value at runtime (that is the fallback story; do not add keys you
 * cannot translate yet). Data-driven keys (quest.*, template.*) carry no en
 * counterpart here: their English text lives in the src/data files and is
 * passed as the mandatory `fallback` argument of t().
 */
const staticZh: Partial<Record<keyof typeof en, string>> = {
  'common.close': '关闭',
  'common.save': '保存',
  'common.cancel': '取消',
  'common.delete': '删除',
  'common.add': '添加',
  'common.edit': '编辑',
  'common.search': '搜索',
  'common.loading': '加载中…',
  'common.copy': '复制',
  'common.copied': '已复制！',
  'common.download': '下载',
  'common.import': '导入',
  'common.export': '导出',
  'common.back': '返回',
  'common.next': '下一步',
  'common.done': '完成',
  'common.none': '无',
  'common.entities': '实体',
  'common.relationships': '关系',
  'common.properties': '属性',

  'quest.panelTitle': '任务',
  'quest.abandon': '放弃',
  'quest.earnedBadges': '已获得徽章（{count}）',
  'quest.points': '+{count} 分',
  'quest.totalPoints': '总计：{count} 分',
  'quest.difficulty.beginner': '初级',
  'quest.difficulty.intermediate': '中级',
  'quest.difficulty.advanced': '高级',

  // NOTE: 'test.enOnlyFixture' intentionally absent — fallback test relies on it.
};

// Data-driven keys (quests, designer templates). Empty until Chunk 4.
const dataZh: Record<string, string> = {};

export const zhCN: Record<string, string> = { ...staticZh, ...dataZh };
