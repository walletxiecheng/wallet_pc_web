import React from 'react'
import style from './index.module.less'
// import union from '../../icon/union.png'
import { useTranslation } from 'react-i18next'
import NavBar from '@/components/NavBar'

export default function Privacy() {
  const { t } = useTranslation()
  return (
    <div className={style.privacyBox}>
      <NavBar />
      <div className={style.privacyContainer}>
        <div className={style.privacyTop}>
          {/* <img className={style.headerIcon} src={union} alt="" /> */}
        </div>
        <header>
          <h2>{t('Privacy Policy')}</h2>
          <div className={style.updateDate}>
            {t('Update date: May 17, 2024')}
          </div>
        </header>
        <main>
          <section>
            <p>
              {t(
                'If you use the services of the token B platform, it means that you agree with what we have stated in this policy. token B will inform you in this policy how we collect, process and protect your personal information. Please read carefully and accept the contents of this policy before using token B services. After we update our privacy policy, we will promptly remind you of the new situation. If you continue to use our products or services, it means that you agree to the contents of our privacy policy (including the updated version).'
              )}
            </p>
          </section>

          <section>
            <h4>{t('How we collect your personal information')}</h4>
            <p>
              {t(
                '1. When you create and use a token B account, you will be asked to provide personal information, including but not limited to password, mobile phone number, email address, etc. Some network services provided by token B may require you to perform identity authentication. We may collect your name, gender, age, ID number, occupation and other information. If you do not provide this information, we will not be able to provide related services.'
              )}
            </p>
            <p>
              {t(
                '2. We may obtain your personal information from a third party or other indirect means. At this time, you can choose to authorize token B to read the information you registered, published, and recorded on the third-party platform in compliance with relevant laws and regulations. Public information (including but not limited to nickname, avatar, etc.).'
              )}
            </p>
          </section>

          <section>
            <h4>{t('How we use your personal information')}</h4>
            <p>
              {t(
                'We will use the personal information you provide for the following purposes'
              )}
            </p>
            <p>
              {t(
                '1. Used for identity verification, fraud checking, fraud monitoring, customer service, archiving and backup when providing services to ensure the security of the services and products token B provides you.'
              )}
            </p>
            <p>
              {t('2. Provide you with personalized service and experience.')}
            </p>
            <p>
              {t(
                '3. Send you products, services, advertisements, and user surveys that may be of interest to you based on your personal information.'
              )}
            </p>
            <p>
              {t(
                '4. Improve our products and services and conduct internal audits, data analysis and research.'
              )}
            </p>
            <p>
              {t(
                '5. When we want to use the information for other purposes not specified in this privacy policy or for other purposes, we will ask for your consent in advance.'
              )}
            </p>
          </section>

          <section>
            <h4>{t('How we use cookies and similar technologies')}</h4>
            <p>
              {t(
                'When you use our services, we will store small data files called Cookies on your computer or mobile device. Cookies usually contain an identifier, the site name, and some numbers and characters. We use this information to determine whether registered users have logged in, provide you with more thoughtful personalized services, and optimize user experience. If you do not want your personal information to be stored in cookies, you can disable or delete cookies in your browser. Disabling the cookie function may affect your access to token B or be unable to fully obtain the services provided by token B.'
              )}
            </p>
          </section>

          <section>
            <h4>
              {t(
                'How we will share, transfer and publicly disclose your personal information'
              )}
            </h4>
            <h5>{t('1. Share')}</h5>
            <p>
              {t(
                "token B will not provide your personal information to third parties without your consent or authorization. After obtaining your explicit consent, we may share your personal information with other parties or token B's partners. We will sign strict confidentiality Privacys with companies, organizations and individuals with whom we share personal information, requiring them to handle personal information in accordance with our instructions, this Privacy Policy and any other relevant confidentiality and security measures. We may share your personal information externally in accordance with laws and regulations, litigation and dispute resolution needs, or as required by administrative and judicial authorities in accordance with the law."
              )}
            </p>
            <h5>{t('2. Transfer')}</h5>
            <p>
              {t(
                'We will not transfer your personal information to any company, organization or individual, except in the following circumstances:Obtain your express authorization or consent;Based on laws, regulations, legal procedures, litigation or mandatory requirements of government authorities;When a merger, spin-off, acquisition or liquidation is involved, if the transfer of personal information is involved, we will require the new company or organization that holds your personal information to continue to be bound by this privacy policy, otherwise we will require the company or organization to re-sign You seek authorized consent.'
              )}
            </p>
            <h5>{t('3. Public disclosure')}</h5>
            <p>
              {t(
                'We will only publicly disclose your personal information under the following circumstances:Obtain your express authorization or consent;Based on laws, regulations, legal procedures, litigation or mandatory requirements of government authorities.'
              )}
            </p>
          </section>

          <section>
            <h4>{t('How we store and manage your personal information')}</h4>
            <p>
              {t(
                '1. We attach great importance to users’ personal information. We will collect, use, store and transmit user information in accordance with mature security standards and specifications in the industry, and will do everything possible to adopt appropriate technical means to protect your personal data. However, due to technical limitations and various possible malicious means, the Internet is not an absolutely safe environment. We cannot always guarantee 100% security of information. Problems may arise due to factors beyond our control. Please also pay attention to protection. Security of personal information to prevent leakage of personal information.'
              )}
            </p>
            <p>
              {' '}
              {t(
                '2. If there is a security issue with your personal information, we will promptly notify you in accordance with the requirements of laws and regulations, take corresponding disposal measures, and issue announcements in an effective manner.'
              )}
            </p>
          </section>

          <section>
            <h4>{t('How we process personal information of minors')}</h4>
            <p>
              {t(
                "token B attaches great importance to the protection of minors’ personal information. If you are a minor, you must obtain the consent of your guardian before using token B's services. If you apply to register an account on token B, token B will default to the fact that you have obtained the aforementioned consent. If the guardian finds that we have collected the personal information of minors without the guardian's consent, please contact us through the contact information on the token B official website and we will delete the relevant data as soon as possible."
              )}
            </p>
          </section>

          <section>
            <h4>{t('Modifications to Privacy Policy')}</h4>
            <p>
              {t(
                "In order to provide you with better services, we will modify and update the content of this policy from time to time. We will notify you through website announcements or other appropriate means before the updated version takes effect. If you do not agree to the changes, you can stop using token B's products and services. If you continue to use our products and services, you agree to be bound by them. Revised Privacy Policy."
              )}
            </p>
          </section>

          <section>
            <h4>{t('Contact US')}</h4>
            <p>
              {t(
                'If you have any questions, comments or suggestions about this policy, you can contact us through the contact information provided on the token B official website, or send an email tosupport@token B.com, we will process your request promptly.'
              )}
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
