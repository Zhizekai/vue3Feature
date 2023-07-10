import { defineStore } from 'pinia'
import request from '@/request'

const stmsgStore = defineStore('short-msg', {
  state: () => ({
    shortmsgs: [] as ShortMsgType[],
    groups: [] as GroupType[],
    meta: {
      page: 1,
      per_page: 10,
      total: 0,
    },
  }),
  actions: {
    // 沸点列表
    async getShortmsgs(
      params: Record<string, string> = {},
      fun?: (data: any) => void
    ) {
      try {
        if (params.group == 'all') {
          params.group = null
        }
        let res: any = await request.get('/stmsgs/lists', { params })
        if (res && !fun) {
          this.shortmsgs = res.data
          this.meta = res.meta
        }
        if (fun) fun(res)
      } catch (error) {
        console.log(error)
      }
    },
    // 沸点分组
    async getGroups() {
      try {
        let res: any = await request.get('/stmsgs/group')
        this.groups = res
      } catch (error) {
        console.log(error)
      }
    },
    // 操作点赞
    async togglePraise(data: any, fun: (bool: boolean) => void) {
      try {
        data.type = 1
        data.target_type = 2
        let res: any = await request.post('/praises/toggle', data)
        fun(res.action == 'create' ? true : false)
      } catch (error) {
        console.log(error)
      }
    },
    getGpLabel(key: string) {
      let one = this.groups.find(row => row.key == key)
      return one ? one.label : null
    },
    // 创建沸点
    async createMsg(data: Partial<ShortMsgType>, fun: (data: any) => void) {
      try {
        let res: any = await request.post('/stmsgs/create', data)
        fun(res)
      } catch (error) {
        fun(false)
        console.log(error)
      }
    },
    // 删除沸点
    async removeMsg(id: string, fun: () => void) {
      try {
        await request.delete('/stmsgs/remove/' + id)
        fun()
      } catch (error) {
        console.log(error)
      }
    },
  },
})

export default stmsgStore