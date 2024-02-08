import Mock from 'mockjs'

import './message-box'
import './user'

import '@/views/dashboard/workplace/mock'
/** simple */
import '@/views/dashboard/monitor/mock'

import '@/views/list/card/mock'
import '@/views/list/search-table/mock'

import '@/views/visualization/data-analysis/mock'
import '@/views/visualization/multi-dimension-data-analysis/mock'

/** simple end */

Mock.setup({
  timeout: '600-1000',
})
