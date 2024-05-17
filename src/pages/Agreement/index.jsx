import React from 'react'
import style from './index.module.less'
import union from "../../icon/union.png";
import Recommend from '../../components/Recommend'
export default function Agreement() {
  return (
    <div className={style.agreeContainer}>
        <div className={style.privacyTop}>
            <img className={style.headerIcon} src={union} alt="" />
      </div>
       <header>
              <h2> User Agreement</h2>
              <div className={style.updateDate}>Update date: May 18, 2024</div>
        </header>
        <main>
          <section>
            <h4>Welcome to Token 13</h4>
            <p> Before you use the services of this platform, please read the following terms carefully. If you object to any terms of this agreement, you can voluntarily stop using the services provided by Token 13. The user's use of Token 13 services and data directly or indirectly through various methods (such as off-site API references, etc.) is deemed to have understood and fully agreed to the contents of this Service Agreement, including Token 13's changes to the Service Agreement at any time. any modifications.</p>
          </section>

          <section>
            <h4>Usage rules</h4>
            <p>1. After the user successfully registers, Token 13 will provide each user with a user account. The user should keep the Token 13 account and password properly.
              <br/>2. During the use of Token 13 services, users shall bear full legal responsibility for any consequences arising from all activities and events conducted under their user accounts.
              <br/>3. Users need to provide Token 13 with true, legal and valid registration information. Token 13 will not be responsible for any related problems caused by untrue registration information or untimely updates. Users are not allowed to impersonate others, are not allowed to register maliciously, and are not allowed to buy, sell or transfer Token 13 accounts. Otherwise, Token 13 has the right to immediately stop providing services, withdraw their accounts and the users shall bear all legal responsibilities arising therefrom.
              <br/> 4. Without the written permission of Token 13, no organization or individual may use any service or content of this platform for commercial purposes.
              <br/> 5. The user's use of Token 13 services and data directly or indirectly through various methods (such as API calls, etc.) will be deemed to have unconditionally accepted the entire content of this agreement. If the user has objections to any terms of this agreement, please stop Use all services provided by Token 13.</p>
          </section>

          <section>
            <h4>Service content</h4>
            <p>1. The specific service content of Token 13 is provided by Token 13, including but not limited to information search, data query, data analysis, currency prices, data charts, news information, API plug-ins, etc. Token 13 has the right to provide services or Product form upgrades or other adjustments.
              <br/>2. Some of the network services provided by Token 13 are paid network services. Users need to pay a certain fee to Token 13 before using paid network services. For paid network services, Token 13 will give users clear prompts before using them. Only Only after the user confirms his willingness to pay the relevant fees according to the prompts can he use the charged network service. If the user refuses to pay the relevant fees, Token 13 has the right not to provide such paid network services to the user.</p>
          </section>

          <section>
            <h4>Service changes, interruptions or terminations</h4>
            <p>
              1. In view of the particularity of network services (including but not limited to server stability issues, malicious network attacks and other circumstances beyond Token 13’s control), users agree that Token 13 has the right to change, interrupt or terminate part or all of the service at any time network services (including paid network services), if such a situation occurs, Token 13 does not bear any responsibility to any user or any third party.
              <br/>2. Token 13 needs to regularly or irregularly inspect or maintain the Token 13 website or related equipment. If the service is interrupted within a reasonable time due to such circumstances, Token 13 does not need to bear any responsibility to any user or any third party. .
              <br/> 3. If the user provides untrue personal information, or the user violates laws, regulations, national policies or the usage rules stipulated in this agreement, or the user fails to pay relevant service fees as required when using paid services, or Token 13 has other reasonable reasons to believe that If it is necessary to interrupt or terminate the provision of services to users, Token 13 has the right to interrupt or terminate the provision of services (including paid services and free services) to users under this agreement at any time without assuming any liability to users or any third party. The losses shall be borne independently by the user.
            </p>
          </section>

          <section>
            <h4> Copyright notice</h4>
            <p>Token 13 is the owner and intellectual property owner of all services, content and products on the Token 13 platform. All services, content and products of the Token 13 platform include but are not limited to: program codes, data materials, page designs, accounts, pictures, charts, text, advertisements, trademarks, software, programs, audio, videos, etc. Without the written authorization or consent of Token 13 or the relevant rights holder, no media, website or individual may directly or indirectly publish, reproduce or otherwise use the above content. If authorized or agreed, it should be used within the scope of authorization or consent, and Indicate the source of data or services as Token 13.cc.</p>
          </section>

          <section>
            <h4>Disclaimer</h4>
            <p>1. Token 13 is not responsible for the authenticity, timeliness, accuracy, completeness or reliability of the content it provides, and does not guarantee the accuracy and completeness of external links set up to provide convenience to users. Token 13 does not assume any responsibility to the user or any third party for any loss caused by the direct or indirect use of the content of this website, and the resulting loss shall be borne independently by the user.
               <br/> 2. Token 13 does not assume any responsibility for service interruptions or other defects caused by force majeure or other reasons beyond Token 13’s control.
                <br/> 3. Users should abide by national laws, regulations and policies when using Token 13 services, and bear the consequences of their actions arising from their use of Token 13 services.</p>
          </section>

          <section>
            <h4>Agreement modification</h4>
            <p>Token 13 has the right to modify any terms of this agreement at any time. Once the content of this agreement changes, Token 13 will publish the revised agreement content on the website and make an announcement. If the user does not agree with the modifications made by Token 13 to the relevant terms of this agreement, the user may choose to stop using the services provided by Token 13. If the user continues to use the services provided by Token 13, the user will be deemed to have accepted the modifications made by Token 13 to the relevant terms of this agreement.</p>
          </section>

          <section>
            <h4>Modifications to Privacy Policy</h4>
            <p>In order to provide you with better services, we will modify and update the content of this policy from time to time. We will notify you through website announcements or other appropriate means before the updated version takes effect. If you do not agree to the changes, you can stop using Token 13's products and services. If you continue to use our products and services, you agree to be bound by them. Revised Privacy Policy.</p>
          </section>

          <section>
            <h4>Contact US</h4>
            <p>If you have any questions, comments or suggestions about this policy, you can contact us through the contact information provided on the Token 13 official website, or send an email tosupport@Token 13.com, we will process your request promptly.</p>
          </section>
        </main>
    </div>
  )
}
