import React from 'react'
import style from './index.module.less'
import Card from './Card'
import defaultAvatar from '@/assets/image/avatar.png'

const evaluationList = [
  {
    id: 1,
    avatar: defaultAvatar,
    title: 'Jane Cooper',
    content:
      'Token 17 的优秀之处在于它不仅仅满足了基本的账单管理和资产追踪功能，更通过其智能算法和数据分析，为用户提供了一种全新的财务管理体验。使用Token 17，我可以轻松地创建预算并且实时监控我的支出情况，它的提醒功能也帮助我不再错过重要的财务事件。。'
  },
  {
    id: 2,
    avatar: defaultAvatar,
    title: 'Kristin Watson',
    content:
      'Token 17 钱包App极大地简化了我的财务管理，让我能够轻松地追踪和管理我的资产。'
  },
  {
    id: 3,
    avatar: defaultAvatar,
    title: 'Brooklyn Simmons',
    content:
      'Token 17 提供了丰富的数据分析和图表，让我能够深入了解我的消费模式和投资表现。'
  },
  {
    id: 4,
    avatar: defaultAvatar,
    title: 'Wade Warren',
    content:
      'Token 17 的用户界面设计简洁直观，使得我能够快速找到所需的功能，并在几次点击之间完成复杂的操作。对我而言，Token 17 不仅是一个工具，更是一个信任的象征，它为我提供了一个安全和高效的财务管理平台，让我能够专注于我的生活和未来的规划。'
  },
  {
    id: 5,
    avatar: defaultAvatar,
    title: 'Darlene Robertson',
    content:
      'Token 17 钱包App极大地简化了我的财务管理，让我能够轻松地追踪和管理我的资产。'
  },
  {
    id: 6,
    avatar: defaultAvatar,
    title: 'Jacob Jones',
    content:
      'Token 17 的优秀之处在于它不仅仅满足了基本的账单管理和资产追踪功能，更通过其智能算法和数据分析，为用户提供了一种全新的财务管理体验。使用Token 17，我可以轻松地创建预算并且实时监控我的支出情况，它的提醒功能也帮助我不再错过重要的财务事件。'
  },
  {
    id: 7,
    avatar: defaultAvatar,
    title: 'Kristin Watson',
    content: 'Token 17 的优秀之处在于它不仅仅满足。'
  },
  {
    id: 8,
    avatar: defaultAvatar,
    title: 'Floyd Miles',
    content: 'Token 17 的优秀之处在于它不仅仅满足。'
  },
  {
    id: 9,
    avatar: defaultAvatar,
    title: 'Theresa Webb',
    content: 'Token 17 的优秀之处在于它不仅仅满足。'
  },
  {
    id: 10,
    avatar: defaultAvatar,
    title: 'Jane Cooper',
    content: 'Token 17 的优秀之处在于它不仅仅满足。'
  },
  {
    id: 11,
    avatar: defaultAvatar,
    title: 'Jane Cooper',
    content: 'Token 17 的优秀之处在于它不仅仅满足。'
  }
]
// 用户称赞组件
export default function Evaluation() {
  return (
    <div className={style.evalContainer}>
      <h1>对我们的称赞络绎不绝</h1>
      <div className={style.evaluationBox}>
        <div className={style.cardList}>
          {evaluationList.map((item) => (
            <Card
              key={item.id}
              content={item.content}
              title={item.title}
              avatar={item.avatar}
            />
          ))}
        </div>
        <div className={style.cardList}>
          {evaluationList.map((item) => (
            <Card
              key={item.id}
              content={item.content}
              title={item.title}
              avatar={item.avatar}
            />
          ))}
        </div>
        <div className={style.cardList}>
          {evaluationList.map((item) => (
            <Card
              key={item.id}
              content={item.content}
              title={item.title}
              avatar={item.avatar}
            />
          ))}
        </div>
        <div className={style.cardList}>
          {evaluationList.map((item) => (
            <Card
              key={item.id}
              content={item.content}
              title={item.title}
              avatar={item.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
