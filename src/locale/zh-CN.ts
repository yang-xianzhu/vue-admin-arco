import localeMessageBox from '@/components/message-box/locale/zh-CN'
import localeLogin from '@/views/login/locale/zh-CN'

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN'
/** simple */
import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN'

import localeCardList from '@/views/list/card/locale/zh-CN'
import localeSearchTable from '@/views/list/search-table/locale/zh-CN'

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/zh-CN'
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/zh-CN'

import locale403 from '@/views/exception/403/locale/zh-CN'
import locale404 from '@/views/exception/404/locale/zh-CN'
import locale500 from '@/views/exception/500/locale/zh-CN'

/** simple end */
import localeSettings from './zh-CN/settings'

export default {
  'menu.dashboard': '仪表盘',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  /** simple */
  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,

  ...localeDataAnalysis,
  ...localeMultiDAnalysis,

  ...locale403,
  ...locale404,
  ...locale500,
  /** simple end */
}
