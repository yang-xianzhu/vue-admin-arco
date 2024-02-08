import localeMessageBox from '@/components/message-box/locale/en-US'
import localeLogin from '@/views/login/locale/en-US'

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US'
/** simple */
import localeMonitor from '@/views/dashboard/monitor/locale/en-US'

import localeCardList from '@/views/list/card/locale/en-US'
import localeSearchTable from '@/views/list/search-table/locale/en-US'

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/en-US'
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/en-US'

import locale403 from '@/views/exception/403/locale/en-US'
import locale404 from '@/views/exception/404/locale/en-US'
import locale500 from '@/views/exception/500/locale/en-US'

/** simple end */
import localeSettings from './en-US/settings'

export default {
  'menu.dashboard': 'Dashboard',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
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
