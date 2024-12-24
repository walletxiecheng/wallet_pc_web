import React from 'react'
import style from './index.module.less'
import Card from './Card'
import defaultAvatar from '@/assets/image/avatar.png'
import { useTranslation } from 'react-i18next'
const evaluationList = [
  {
    id: 1,
    avatar: defaultAvatar,
    title: 'Jane Cooper',
    content:
      'Jane Cooper The Token 17 wallet app greatly simplifies my financial management, allowing me to easily track and manage my assets.'
  },
  {
    id: 2,
    avatar: defaultAvatar,
    title: 'Kristin Watson',
    content:
      'Darlene Robertson The security of Token 17 has left a deep impression on me. It adopts the most advanced encryption technology to ensure the security of my personal financial information.'
  },
  {
    id: 3,
    avatar: defaultAvatar,
    title: 'Brooklyn Simmons',
    content:
      'Guy Hawkins The user interface design of Token 17 is simple and intuitive, allowing me to quickly find the desired features and complete complex operations with just a few clicks. For me, Token 17 is not only a tool, but also a symbol of trust. It provides me with a secure and efficient financial management platform, allowing me to focus on my life and future planning.'
  },
  {
    id: 4,
    avatar: defaultAvatar,
    title: 'Wade Warren',
    content:
      'The excellence of Token 17 lies in its ability to not only meet basic billing management and asset tracking functions, but also provide users with a new financial management experience through its intelligent algorithms and data analysis. With Token 17, I can easily create budgets and monitor my expenses in real-time, and its reminder function also helps me not miss important financial events again.'
  },
  {
    id: 5,
    avatar: defaultAvatar,
    title: 'Darlene Robertson',
    content:
      'Wade Warren The account synchronization function of Token 17 is very reliable, ensuring that all my financial information can be updated and synchronized to my phone in a timely manner.'
  },
  {
    id: 6,
    avatar: defaultAvatar,
    title: 'Jacob Jones',
    content:
      'Wade Warren The account synchronization function of Token 17 is very reliable, ensuring that all my financial information can be updated and synchronized to my phone in a timely manner.'
  },
  {
    id: 7,
    avatar: defaultAvatar,
    title: 'Kristin Watson',
    content:
      'Wade Warren The account synchronization function of Token 17 is very reliable, ensuring that all my financial information can be updated and synchronized to my phone in a timely manner.'
  },
  {
    id: 8,
    avatar: defaultAvatar,
    title: 'Floyd Miles',
    content:
      'The excellence of Token 17 lies in its ability to not only meet basic billing management and asset tracking functions, but also provide users with a new financial management experience through its intelligent algorithms and data analysis. With Token 17, I can easily create budgets and monitor my expenses in real-time, and its reminder function also helps me not miss important financial events again.'
  },
  {
    id: 9,
    avatar: defaultAvatar,
    title: 'Theresa Webb',
    content:
      'Jane Cooper The Token 17 wallet app greatly simplifies my financial management, allowing me to easily track and manage my assets.'
  },
  {
    id: 10,
    avatar: defaultAvatar,
    title: 'Jane Cooper',
    content:
      'Jane Cooper The Token 17 wallet app greatly simplifies my financial management, allowing me to easily track and manage my assets.'
  },
  {
    id: 11,
    avatar: defaultAvatar,
    title: 'Jane Cooper',
    content:
      'Jane Cooper The Token 17 wallet app greatly simplifies my financial management, allowing me to easily track and manage my assets.'
  }
]
// 用户称赞组件
export default function Evaluation() {
  const { t } = useTranslation()
  return (
    <div className={style.evalContainer}>
      <h1>{t('evaluation.title')}</h1>
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
