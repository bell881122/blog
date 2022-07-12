/* eslint-disable @next/next/no-img-element */
export default function Resume() {
  return (
    <div className="bg-gray-600">
      <div className="bg-gray-50 p-6 mx-auto max-w-4xl">
        <div className="flex-none md:flex">
          <div>
            <h1 className="text-[40px]">Yu-hsin Chang</h1>
            <h2 className="text-[20px] font-bold">Yu-hsin Chang</h2>
            <p className="mt-4">Front-end Developer</p>
          </div>
          <div className="md:ml-auto md:mt-auto">
            <p>Taipei Taiwan.</p>
            <p>bell881122@gmail.com</p>
            <p>LinkedIn</p>
            <p>Github</p>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="text-[30px] font-bold">PROJECT</h2>
        <div className="flex-none sm:flex my-6 leading-7">
          <div className="w-36 my-auto">
            <h3>MetaWall</h3>
            <small>Side project</small>
          </div>
          <div className="w-[calc(100%-theme(space.36))]">
            <img
              src="https://images.unsplash.com/photo-1624398891401-1362e7a0d062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              alt="MetaWall" />
            <p>較對地皮班、鄉年難下員國能市經拉自李考自或未間公：人嗎兒人，到來病為引教次自難設視這公雨時利寫師……成只式出正是：住小須事己金！德他且可。</p>
            <p>到了土日寫開統治生有我時時界南親決！</p>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="text-[30px] font-bold">WORK EXPERIENCE</h2>
        <div className="flex-none sm:flex my-6 leading-7">
          <div className="w-full sm:w-36">
            <h3>立亨</h3>
            <small>2021.09 - present</small>
          </div>
          <div className="w-full sm:w-[calc(100%-theme(space.36))]">
            <p>地是民力國這：斷還速：工是得海笑有多工國久於質原體讀應力，亮不費能當全前這臉然安！商我印什樂過信興去全男少的了表分……考風個理，是老例輪界明好球或力新兒，見語事蘭這球公請意，現河同般具多，集世景人通營中自不告一原不在元意我想生會會可面但再在坐有術、巴預劇把立他可持低我書能賣生識又科，玩口於馬進洲底花心這、落與形想師內居造識戲是意落方日中電收沒愛一識，行人壓光提民細車人利得實並造物。要樣大她前來以我女慢領全轉冷標定果不集證人據受我當故覺印候麼新三。</p>
          </div>
        </div>
        <div className="flex my-6">
          <div className="w-36">
            <h3>安鈦</h3>
            <small>2019.08 - 2021.07</small>
          </div>
          <div className="w-[calc(100%-theme(space.36))]">
            <p>{`
          人們不要放他看又總許太老組是創強相傳廣從爸寫美朋室研。

          童再的期熱位麼我定風回達年車格說可動近正特，天轉不別持，傳下們，人關年四者變斯知性文是我；的然意能比，究我爭議致，定接客事最轉金，可上導造在票的。都大葉開格出生裡，及身好為下。
          
          味國向得切房，下於質理得模眾房改，歷動生統持任，金這功山興樣上：票直卻高一些魚那的東子機人時選感格孩子故我輪為員化中。
          
          由一展如百然小的是之理苦院們外而長施導量是間業輪所朋法兩什，向一語。
          
          次問的法男路和友實有英飛了新花玩本合，資效正校土關。
          `}</p>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="text-[30px] font-bold">EDUCATION</h2>
        <div className="flex-none sm:flex my-6 leading-7">
          <div className="w-36">
            <h3>國立臺灣科技大學</h3>
            <small>Taipei, taiwan.</small>
          </div>
          <div className="w-[calc(100%-theme(space.36))]">
            <p>較對地皮班、鄉年難下員國能市經拉自李考自或未間公：人嗎兒人，到來病為引教次自難設視這公雨時利寫師……成只式出正是：住小須事己金！德他且可。</p>
            <p>到了土日寫開統治生有我時時界南親決！</p>
          </div>
        </div>

      </div>
    </div>
  )
}
