// src/mock/mockData.ts
export interface User {
  id: number
  name: string
  age: number
  email: string
}

export interface Menu {
  id: string
  title: string
  icon: string
  href: string
  child?: Menu[]
}

// 模拟的用户数据
export const mockUserData: User = {
  id: 1,
  name: '张三',
  age: 28,
  email: 'zhangsan@example.com',
}

// 模拟的帖子数据
export const mockMenuData: Menu[] = [
  {
    id: '1',
    title: '聊天机器人',
    icon: '',
    href: '',
    child: [],
  },
  {
    id: '2',
    title: '图像处理',
    icon: '',
    href: '',
    child: [
      {
        id: '2-1',
        title: '图像生成',
        icon: '',
        href: '',
      },
      {
        id: '2-2',
        title: '图像修改',
        icon: '',
        href: '',
      },
      {
        id: '2-3',
        title: '社交名片工具',
        icon: '',
        href: '',
      },
    ],
  },
  {
    id: '3',
    title: '编程开发',
    icon: '',
    href: '',
    child: [
      {
        id: '3-1',
        title: '数据处理',
        icon: '',
        href: '',
      },
      {
        id: '3-2',
        title: 'Ai模型开发平台',
        icon: '',
        href: '',
      },
      {
        id: '3-3',
        title: '程序开发',
        icon: '',
        href: '',
      },
    ],
  },
  {
    id: '4',
    title: '视频音频',
    icon: '',
    href: '',
    child: [
      {
        id: '4-1',
        title: '语音转文字',
        icon: '',
        href: '',
      },
      {
        id: '4-2',
        title: '文字转语音',
        icon: '',
        href: '',
      },
      {
        id: '4-3',
        title: '视频处理',
        icon: '',
        href: '',
      },
      {
        id: '4-4',
        title: '视频生成',
        icon: '',
        href: '',
      },
      {
        id: '4-5',
        title: '自媒体录制',
        icon: '',
        href: '',
      },
      {
        id: '4-6',
        title: '音频处理',
        icon: '',
        href: '',
      },
      {
        id: '4-7',
        title: 'Ai作曲',
        icon: '',
        href: '',
      },
    ],
  },
]
