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

  // header
  'header.preview': '（预览）',
  'header.untitled': '未命名本体',
  'header.points': '分',
  'header.badges': '徽章',
  'header.share': '分享',
  'header.copied': '已复制！',
  'header.downloadedRdf': '已下载 RDF',
  'header.encoding': '编码中…',
  'header.shareTitleLink': '复制此本体的分享链接',
  'header.shareTitleDownload': '通过链接分享此本体',
  'header.summary': '摘要',
  'header.summaryTitle': '查看本体摘要',
  'header.aiBuilder': 'AI 构建器',
  'header.catalogue': '目录',
  'header.designer': '设计器',
  'header.school': '本体学院',
  'header.importExport': '导入 / 导出',
  'header.help': '帮助',
  'header.about': '关于',
  'header.dataSources': '数据源',
  'header.theme': '主题',
  'header.menu': '菜单',
  'header.theme.dark': '深色',
  'header.theme.light': '浅色',
  'header.theme.aurora': '极光',
  'header.theme.crimson': '绯红',
};

// Data-driven keys (quests, designer templates). Empty until Chunk 4.
const dataZh: Record<string, string> = {};

// dataZh wins over staticZh on key collision — load-bearing in Chunk 4,
// where quest.<id>.* data keys must resolve from dataZh (static quests)
// while generated quests bypass the dictionary entirely.
export const zhCN: Record<string, string> = { ...staticZh, ...dataZh };
