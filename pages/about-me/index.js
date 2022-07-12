/* eslint-disable @next/next/no-img-element */
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdMail, } from "react-icons/md";
import Card from "components/Card";
import SectionTitle from "components/SectionTitle";
import Divider from "components/Divider";

export default function Resume() {
  return (
    <div className="bg-gray-600">
      <div className="bg-gray-50 p-6 mx-auto max-w-4xl">
        <div className="flex-none md:flex">
          <div className="flex-none sm:flex">
            <div className='h-36 w-36 mr-4'>
              <img className='h-full w-full object-center' src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80" alt="avatar" />
            </div>
            <div>
              <h1 className="text-[40px]">Yu-hsin Chang</h1>
              <h2 className="text-[20px] font-bold">Yu-hsin Chang</h2>
              <p className="mt-5">Front-end Developer</p>
            </div>
          </div>
          <div className="md:ml-auto md:mt-auto">
            <div className='flex my-1'>
              <p className='my-auto mr-2'><FaMapMarkerAlt /></p>
              <p>Taipei, Taiwan.</p>
            </div>
            <div className='flex my-1'>
              <p className='my-auto mr-2'><MdMail /></p>
              <p>bell881122@gmail.com</p>
            </div>
            <div className='flex my-1'>
              <p className='my-auto mr-2'><BsLinkedin /></p>
              <a href="https://www.linkedin.com/in/emi-chang/" target='_blank' rel="noreferrer">
                <span className='underline decoration-1'>LinkedIn</span>
              </a>
            </div>
            <div className='flex my-1'>
              <p className='my-auto mr-2'><BsGithub /></p>
              <a href="https://github.com/bell881122" target='_blank' rel="noreferrer">
                <p className='underline decoration-1'>GitHub</p>
              </a>
            </div>
          </div>
        </div>

        <Divider />

        <SectionTitle title="PROJECT" />
        <Card
          title="MetaWall"
          subTitle="Side project"
          imgUrl="https://images.unsplash.com/photo-1624398891401-1362e7a0d062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          content={<>
            <p>較對地皮班、鄉年難下員國能市經拉自李考自或未間公：人嗎兒人，到來病為引教次自難設視這公雨時利寫師……成只式出正是：住小須事己金！德他且可。</p>
            <p>到了土日寫開統治生有我時時界南親決！</p>
          </>}
        />

        <Card
          title="RLC 紅獅集團"
          subTitle="香港紅獅集團有限公司"
          imgUrl="https://images.unsplash.com/photo-1600562718259-5cae2c9d2235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          content={<>
            <p>到了土日寫開統治生有我時時界南親決！</p>
          </>}
          reverse
        />
        <Card
          title="Simple Life"
          subTitle="Side project"
          imgUrl="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          content={<>
            <p>到了土日寫開統治生有我時時界南親決！</p>
          </>}
        />

        <Divider />

        <SectionTitle title="WORK EXPERIENCE" />
        <Card
          title="立亨網絡"
          subTitle="2021.09 - present"
          contentTitle="Front-end Dev"
          content={<>
            <p>地是民力國這：斷還速：工是得海笑有多工國久於質原體讀應力，亮不費能當全前這臉然安！商我印什樂過信興去全男少的了表分……考風個理，是老例輪界明好球或力新兒，見語事蘭這球公請意，現河同般具多，集世景人通營中自不告一原不在元意我想生會會可面但再在坐有術、巴預劇把立他可持低我書能賣生識又科，玩口於馬進洲底花心這、落與形想師內居造識戲是意落方日中電收沒愛一識，行人壓光提民細車人利得實並造物。要樣大她前來以我女慢領全轉冷標定果不集證人據受我當故覺印候麼新三。</p>
          </>}
        />
        <Card
          title="安鈦科技"
          subTitle="2019.08 - 2021.07"
          contentTitle="Full-stack Dev"
          content={<>
            <p>{
              `人們不要放他看又總許太老組是創強相傳廣從爸寫美朋室研。
              童再的期熱位麼我定風回達年車格說可動近正特，天轉不別持，傳下們，人關年四者變斯知性文是我；的然意能比，究我爭議致，定接客事最轉金，可上導造在票的。都大葉開格出生裡，及身好為下。
              味國向得切房，下於質理得模眾房改，歷動生統持任，金這功山興樣上：票直卻高一些魚那的東子機人時選感格孩子故我輪為員化中。`
            }</p>
          </>}
        />

        <Divider />

        <SectionTitle title="EDUCATION" />
        <Card
          title="國立臺灣科技大學"
          subTitle="Taipei, taiwan."
          content={<>
            <p>較對地皮班、鄉年難下員國能市經拉自李考自或未間公：人嗎兒人，到來病為引教次自難設視這公雨時利寫師……成只式出正是：住小須事己金！德他且可。</p>
            <p>到了土日寫開統治生有我時時界南親決！</p>
          </>}
        />

      </div>
    </div>
  )
}
