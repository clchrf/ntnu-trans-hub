// 內容資料來源：
// [1] 第11屆轉學生聯會 - 新生包最初版.pdf（NTNU Trans 社團自製新生包）
// [2] 國立臺灣師範大學 115學年度第1學期學士班註冊須知.pdf（教務處官方文件）
// [3] 轉聯會幹部 Notion 筆記（社員實際踩點與使用經驗）
// [4] 師大教務處官網 aa.ntnu.edu.tw（部分細節未能於官網公開頁面查得，已標示「待確認」）
// 凡標示「待確認」者，代表目前查無公開官方依據，請以教務處 / 系辦最新公告為準。

export const club = {
  name: '轉學生聯會',
  englishName: 'NTNU Transfer Student Association',
  shortName: 'NTNU Trans',
  edition: '第 11 屆',
  tagline: '免會費・只為了讓每一位轉學生、轉系生都能好好落地師大',
  description:
    '轉聯會主要由師大轉學生、轉系生組成之聯誼性社團，成立至今即將邁入第十一屆。我們不收會費，主要僅辦理迎新與選課說明會等活動，單純是一群學長姐想把「當初沒人跟我說」的事情整理起來，交棒給下一屆的你。',
  missions: [
    '協助轉學生入學、抵免學分、選課、住宿等相關事宜',
    '帶領轉學生認識師大的大小事、熟悉新環境',
    '透過聚會、外校聯誼等活動，增進轉學生之間的交流',
    '將轉學生互助合作的精神傳承下去',
  ],
  officers: [
    { role: '會長', dept: '電機系117', name: '李欣妍' },
    { role: '副會長', dept: '衛教系117', name: '潘貞臻' },
  ],
  contact: {
    email: 'ntnutrans2016@gmail.com',
    instagram: {
      handle: '@ntnu_trans',
      url: 'https://www.instagram.com/ntnu_trans',
      dmUrl: 'https://ig.me/m/ntnu_trans',
    },
    facebook: { label: 'NTNU Trans 轉學生聯會', url: 'https://www.facebook.com/share/1EMQtQu4ts/?mibextid=wwXIfr' },
  },
  events: [
    { date: '08/02', label: '選課說明會' },
    { date: '09/09', label: '開學相見歡' },
    { date: '敬請期待…', label: '更多活動陸續公布', tbd: true },
  ],
}

// ---------------------------------------------------------------------------
// 115 學年度重要時程（依官方註冊須知 [2] 與轉聯會新生包 [1] 整理）
// start / end 為機器可讀日期，供月曆呈現使用；date 為顯示用文字
// ---------------------------------------------------------------------------
export const timeline = [
  {
    start: '2026-08-01',
    end: '2026-08-31',
    date: '08/01 – 08/31',
    title: '學生兵役申請',
    category: '行政',
    detail: '登入校務行政入口網／學生兵役申請系統辦理緩徵或儘後召集申請。',
  },
  {
    start: '2026-08-01',
    end: '2026-09-07',
    date: '08/01 – 09/07',
    title: '學雜費減免／弱勢助學金／就學貸款 申請',
    category: '行政',
    detail: '需要助學措施者請把握這段時間送件，減免與弱勢助學金僅能擇一申請。',
  },
  {
    start: '2026-08-03',
    end: '2026-08-19',
    date: '08/03 – 08/19',
    title: '住宿線上申請',
    category: '住宿',
    detail: '每日上午 10 點前送出申請，宿舍以電腦亂數抽籤序號分配。',
  },
  {
    start: '2026-08-04',
    end: '2026-08-07',
    date: '08/04 – 08/07',
    title: '第一階段網路選課',
    category: '選課',
    detail: '一般科目登記分發、通識／體育／教程志願分發。分發結果 08/14 公告。',
    highlight: true,
  },
  {
    start: '2026-08-14',
    end: '2026-08-14',
    date: '08/14',
    title: '公告第一階段選課結果',
    category: '選課',
  },
  {
    start: '2026-08-14',
    end: '2026-09-07',
    date: '08/14 – 09/07',
    title: '註冊繳費期間',
    category: '行政',
    detail: '逾期未完成註冊繳費者，將依規定辦理退學，請務必留意截止日。',
    highlight: true,
  },
  {
    start: '2026-08-17',
    end: '2026-08-19',
    date: '08/17 – 08/19',
    title: '第二階段網路選課',
    category: '選課',
    detail: '所有課程登記分發，08/26 公告分發結果。',
    highlight: true,
  },
  {
    start: '2026-08-20',
    end: '2026-08-20',
    date: '08/20',
    title: '住宿抽籤結果公布',
    category: '住宿',
  },
  {
    start: '2026-08-21',
    end: '2026-08-31',
    date: '08/21 – 08/31',
    title: '住宿費繳費',
    category: '住宿',
    detail: '逾期未繳費視同放棄本學年住宿權，並降低下學年住宿申請順位。',
  },
  {
    start: '2026-08-24',
    end: '2026-08-24',
    date: '08/24',
    title: '住宿未繳費名單公告',
    category: '住宿',
  },
  {
    start: '2026-08-24',
    end: '2026-09-11',
    date: '08/24 – 09/11',
    title: '學分抵免申請',
    category: '學分抵免',
    detail: '逾期不受理，須待次學期再辦理，是轉學生最容易錯過的死線之一。',
    highlight: true,
  },
  {
    start: '2026-08-26',
    end: '2026-08-26',
    date: '08/26',
    title: '公告第二階段選課結果',
    category: '選課',
  },
  {
    start: '2026-08-28',
    end: '2026-08-31',
    date: '08/28 – 08/31',
    title: '新生階段網路選課',
    category: '選課',
    detail: '入學後尚無在學紀錄者（含當學期申請休學／保留入學）適用此階段，09/04 公告結果。',
    highlight: true,
  },
  {
    start: '2026-08-29',
    end: '2026-08-29',
    date: '08/29 起',
    title: '住宿床位分配公告',
    category: '住宿',
  },
  {
    start: '2026-08-31',
    end: '2026-08-31',
    date: '08/31',
    title: '學生輔導系統資料填寫截止',
    category: '行政',
  },
  {
    start: '2026-09-01',
    end: '2026-09-04',
    date: '09/01 – 09/04',
    title: '伯樂大學堂',
    category: '迎新',
  },
  {
    start: '2026-09-04',
    end: '2026-09-04',
    date: '09/04',
    title: '公告新生階段選課結果',
    category: '選課',
  },
  {
    start: '2026-09-07',
    end: '2026-09-07',
    date: '09/07',
    title: '開學日',
    category: '行政',
    highlight: true,
  },
  {
    start: '2026-09-07',
    end: '2026-09-21',
    date: '09/07 – 09/21',
    title: '全校加退選',
    category: '選課',
    detail: '線上即時加退選；09/20 為退選截止日，09/21 僅開放加選。',
    highlight: true,
  },
  {
    start: '2026-09-08',
    end: '2026-09-08',
    date: '09/08',
    title: '住宿第一次遞補名單公告',
    category: '住宿',
  },
  {
    start: '2026-09-09',
    end: '2026-09-09',
    date: '09/09',
    title: '開始入住 ／ 開學相見歡',
    category: '迎新',
  },
  {
    start: '2026-09-13',
    end: '2026-09-13',
    date: '09/13',
    title: '新生（復學生）健康檢查',
    category: '行政',
  },
]

export const timelineCategories = {
  選課: { dot: 'bg-navy-950', badge: 'bg-navy-950 text-white' },
  學分抵免: { dot: 'bg-rose-500', badge: 'bg-rose-500 text-white' },
  住宿: { dot: 'bg-sky-500', badge: 'bg-sky-100 text-sky-700' },
  行政: { dot: 'bg-slate-400', badge: 'bg-slate-100 text-slate-600' },
  迎新: { dot: 'bg-emerald-500', badge: 'bg-emerald-100 text-emerald-700' },
}

export const timelineSource =
  '資料來源：國立臺灣師範大學 115學年度第1學期學士班註冊須知；轉聯會新生包。實際日期請務必以教務處最新行事曆公告為準。'

export const officialCalendarLink = {
  label: '教務處｜學校行事曆（官方公告版本）',
  url: 'https://www.aa.ntnu.edu.tw/zh_tw/Calender',
}

// ---------------------------------------------------------------------------
// 學分抵免
// ---------------------------------------------------------------------------
export const creditTransfer = {
  eligibility: [
    '轉學生、重考或重新申請入學之學生',
    '依法令規定須先修讀學分，或符合本校學士班學生基礎課程免修規定者',
    '具修習教育學程資格者（限教育專業課程抵免）',
  ],
  window: '115 年 8 月 24 日至 9 月 11 日止，逾期不受理，須待次學期再辦理。',
  procedure: [
    '登入校務行政資訊入口網／教務資訊系統／一般科目抵免申請系統，線上提出申請',
    '列印申請表，並檢附原就讀學校成績單正本',
    '交由開課系（所）審核，再送教務處註冊組辦理',
    '送件約 3 個工作天後，可於「教務資訊系統／成績相關／抵免申請紀錄查詢」查詢結果',
  ],
  rules: [
    '僅限「入學前」取得之學分，且以入學學年度前 10 年內修習及格者為限（其他法令另有規定者除外）',
    '學士班學生抵免學分總數不得超過 50 學分',
    '入學當學期辦理抵免學分總數達 40 學分以上者，最多可提高編級一年',
    '本校已修習及格之科目不得再申請抵免',
    '抵免學分「以多抵少」者登記為少者；「以少抵多」者由相關學系／學位學程認定並加註專業意見',
    '推廣教育學分抵免不得超過畢業應修學分之 1/2（依教育部通則）',
  ],
  contact: '教務處註冊組　(02) 7749-1077',
  officialLink: {
    label: '教務處｜學分抵免專頁',
    url: 'https://www.aa.ntnu.edu.tw/zh_tw/Registry/CreditTransfer/CreditTransfer01',
  },
}

// ---------------------------------------------------------------------------
// 選課
// ---------------------------------------------------------------------------
export const courseSelection = {
  phases: [
    { name: '第一階段網路選課', date: '08/04 – 08/07', note: '一般科目登記分發、通識／體育／教程志願分發' },
    { name: '第二階段網路選課', date: '08/17 – 08/19', note: '所有課程登記分發' },
    { name: '新生階段選課', date: '08/28 – 08/31', note: '僅限入學後尚無在學紀錄者' },
    { name: '全校加退選', date: '09/07 – 09/21', note: '線上即時加退選；09/20 退選截止、09/21 僅可加選' },
  ],
  notes: [
    '每學期至少 16 學分，至多 27 學分；超過需申請「超修」，不足需申請「低修」',
    '可以先在選課系統確認好想選的課、記下課程代碼，選課當下直接輸入代碼比逐一搜尋快很多',
    '選課前建議先查課程評價，或直接問系上同學、學長姐，比較不會踩雷',
    '被擋修的科目可跟授課教師反應，請老師開放「授權碼」加簽即可加選',
    '使用授權碼加選的課程不可退選，但可申請期中停修',
    '選課系統每日開放時間為 9:00–24:00',
    '轉學生在每一個選課階段都可以參與選課，別漏掉任一階段',
  ],
  officialLink: {
    label: '教務處｜選課日程表',
    url: 'https://www.aa.ntnu.edu.tw/zh_tw/selectives/Dayschool/Courseselection',
  },
  generalEducation: {
    summary: '通識課程總計至少 16 學分（含共同必修）',
    structure: [
      { area: '中文閱讀與思辨、中文寫作與表達', credits: '必修 4 學分' },
      { area: '英文（一）（二）（三）', credits: '必修 6 學分' },
      { area: '體育', credits: '至少必修 4 學分' },
      { area: '博雅課程｜人文藝術領域', credits: '至少 2 學分' },
      { area: '博雅課程｜社會科學領域', credits: '至少 2 學分' },
      { area: '博雅課程｜自然科學領域', credits: '至少 2 學分' },
      { area: '博雅課程｜邏輯運算領域', credits: '至少 2 學分' },
      {
        area: '跨域專業探索課程（大學入門／專題探究／MOOCs／跨域探索／自主學習）',
        credits: '至少 4 學分，選修至多 4 學分',
      },
    ],
    caveat:
      '109 學年度（含）以後入學者適用「博雅課程」架構（各領域至多 8 學分、跨域探索課程相加至多 10 學分）；108 學年度（含）以前入學者各領域上限為 6 學分。轉學生實際適用年級與抵免後的通識架構，請務必向通識教育中心或註冊組確認（待確認）。',
    officialLink: { label: '通識教育中心 官網', url: 'https://www.cge.ntnu.edu.tw/' },
  },
  intercollegiate: {
    summary:
      '師大與臺大、臺灣科大同屬「臺灣大學系統」，日間學制學生可跨校選課，選課時間與本校選課期程相同，統一於本校選課系統選課。',
    rules: [
      '臺大／臺科大課程：同本校選課期程，於本校選課系統選課即可',
      '臺大／臺科大以外之學校：需依行事曆上校際選課期程至教務系統登錄後，另以紙本申請',
      '校際選課學分總數（含臺大、臺科大以外之學校）不得超過所屬系所規定最低畢業學分數的 1/3',
      '師大 A–D 節上課時間與臺大、臺科大不同，安排跑堂動線時務必先換算節次對照表，抓寬通勤／換教室時間',
    ],
    tool: {
      label: '師大好排課（衝堂警告、學長姐真實評分）',
      url: 'https://ntnu-scheduler-pro.pages.dev/',
    },
    officialLink: {
      label: '教務處｜校際選課（臺灣大學系統）',
      url: 'https://www.aa.ntnu.edu.tw/zh_tw/selectives/Dayschool/Intercollegiate',
    },
  },
  crossProgram: {
    title: '雙主修、輔系、學分學程、轉系申請',
    notice:
      '申請資格、名額與截止日期依各學系年度公告而異，官方統整規定請見教務處 FAQ；細節仍在蒐集中（待確認）。',
    link: {
      label: '教務處 FAQ：轉系、雙主修、輔系、學分學程、逕讀博士學位、碩士先修',
      url: 'https://www.aa.ntnu.edu.tw/zh_tw/FAQ/Registry&Graduate/MajorChange',
    },
  },
}

// ---------------------------------------------------------------------------
// 各系畢業門檻與語言檢定（查無單一公開總表，需各系認定，明確標示待確認）
// ---------------------------------------------------------------------------
export const graduationRequirements = {
  notice:
    '各系所畢業應修學分數、第二外語／英語畢業門檻、系訂語言檢定標準，皆由各系所自行訂定且逐年調整，目前查無跨校統一公開總表。以下僅列出查詢管道，實際規定請以你的「開課系所辦公室」或「系網公告」為準，轉聯會會持續蒐集更新（待確認）。',
  channels: [
    '各系所官網「修業規定」或「畢業學分表」專頁',
    '教務處課務組／各系所辦公室（可攜學生證現場詢問）',
    '入學時發放的系級「課程地圖」或「模組化課程規劃表」',
  ],
  officialLink: {
    label: '教務處｜師大課程地圖系統（查各系修業地圖）',
    url: 'http://coursemap.itc.ntnu.edu.tw/course_map_all/class.php?code=GU',
  },
}

// ---------------------------------------------------------------------------
// 跨區交通
// ---------------------------------------------------------------------------
export const transportation = {
  shuttle: {
    title: '校本部（和平校區）↔ 公館校區　免費校內接駁車',
    detail: '守護荷包的通勤選擇：和平校區與公館校區間往返完全不用花錢。',
    stops: [
      { campus: '和平校區', location: 'II 教育大樓前' },
      { campus: '公館校區', location: '綜合館前' },
    ],
  },
  bus: {
    title: '復興幹線公車',
    detail: '班次密集，05:50–23:00 都有車，是接駁車以外最方便的替代方案。',
    stops: [
      { campus: '和平校區', location: '師大公車站牌' },
      { campus: '公館校區', location: '師大分部站牌' },
    ],
  },
  metro: {
    detail: '搭捷運可於古亭站（步行約 10 分鐘）或台電大樓站（步行約 8 分鐘）步行至和平校區；公館站步行約 15 分鐘可達公館校區。',
  },
  campusChoice: [
    '理學院各系所、運動競技學系：主要於公館校區上課',
    '其他學院各系所：主要於校本部（和平校區）上課',
    '公館校區至校本部：搭公車＋步行，約需 15 分鐘，安排課表時建議預留緩衝時間',
  ],
  housingOfficialLink: {
    label: '學生住宿服務中心｜宿舍介紹與申請',
    url: 'https://dorm.sa.ntnu.edu.tw/',
  },
  runningClass: {
    title: '跨校跑堂（臺大、臺科大）建議',
    tips: [
      '師大 A–D 節上課時間與臺大、臺科大不同，選課前務必對照三校節次時間表，避免銜接不上',
      '第一堂／最後一堂盡量安排在同一校區，減少單日往返次數',
      '中間有跨校銜接課程時，建議至少預留 20–30 分鐘通勤緩衝（尖峰時段公車易誤點）',
      '善用「師大好排課」等排課工具先模擬課表，確認是否衝堂或跑堂過於緊湊',
    ],
  },
  campusMap: {
    label: '校內地圖／教室代碼查詢',
    detail: '課表上的教室代碼看不懂？用校內地圖對照建築物名稱，開學第一週就不會迷路。',
    url: 'https://www.ga.ntnu.edu.tw/ntnu_map/',
  },
}

// ---------------------------------------------------------------------------
// 資源與在地生活
// ---------------------------------------------------------------------------
export const resources = {
  archive: {
    title: '歷屆考古題與筆記資源',
    notice:
      '各系考古題／筆記多由系學會或直屬學長姐保管流通，目前尚未有全校統一公開資料庫。以下是目前找到、確認可用的系所資源，其他系所仍在盤點中，歡迎透過下方「許願池」投稿補充（待確認）。',
    subjectLinks: [
      {
        label: '微積分（數學系）統一會考考古題',
        detail: '數學系官方課程網站的考古題專區',
        url: 'https://math2.math.ntnu.edu.tw/course/calculus/exam.php',
      },
      {
        label: '資訊工程學系課程資源',
        detail: '學生維護的考古題／筆記／作業整理，涵蓋程式設計、資結、機率、線代等課程',
        url: 'https://github.com/NTNU-CSIE/course-resource',
      },
    ],
    placeholderLinks: [
      { label: '其他系所資源盤點中', url: '#', tbd: true },
    ],
  },
  campusLife: {
    printShops: {
      title: '影印店',
      items: ['圖書館影印部', '經典影印', '神威影印', '師大照相影印部', '讚德行'],
    },
    dailyGoods: {
      title: '生活用品',
      items: ['金興發生活百貨'],
    },
    postOffice: {
      title: '郵局',
      items: ['校本部樂智樓一樓', '公館校區內郵局'],
    },
  },
  food: {
    title: '師大周邊美食推薦（無業配，純學長姐踩點）',
    spots: [
      { name: '靠近', url: 'https://maps.app.goo.gl/va2gL5qZqh3V2Uwy6?g_st=ic' },
      { name: 'Start Curry', url: 'https://maps.app.goo.gl/7zqaMKvjcR7ZbKYc9?g_st=ic' },
      {
        name: '食粥致神仙',
        url: 'https://maps.app.goo.gl/3TUQQYyddKoKxitz5?g_st=ic',
        note: '身體不舒服的話可以問老闆能不能只買白粥',
      },
      { name: '13_Burger', url: 'https://maps.app.goo.gl/n7geqarJCVLUNrYw7?g_st=ic' },
      { name: '咔滋日式豬排專賣店', url: 'https://maps.app.goo.gl/xYabScV8oCM1wxyaA?g_st=ic' },
      { name: '師大雞肉飯專門店', url: 'https://maps.app.goo.gl/n5HXaXnxujAdHY1j6?g_st=ic' },
    ],
    dormMeal: {
      title: '地餐（男宿地下室餐廳）怎麼走',
      detail: '從男生宿舍入口走進去左手邊，會看到地餐的指標，往下走就到了。',
    },
    monthEndSaver: {
      title: '月底救星',
      items: [
        { label: '媽媽便當（LINE 官方帳號）', url: 'https://line.me/R/ti/p/@173ckppk' },
        { label: '學校各類活動不定期提供免費便當，多留意系上與社團公告', url: null },
      ],
    },
  },
  community: {
    title: '認識朋友與社團資訊',
    intro: '轉學生最快融入新環境的方式，通常是先加入一個社群或社團——這裡是學長姐自己也在用的管道。',
    lineGroups: {
      title: 'Line 社群',
      items: [
        { label: '118 級群組', url: 'https://line.me/ti/g2/l1mYb8PdomJJmGGqSGkn16GDD9rGp_XA1MA_5g' },
        { label: '119 級：可直接在 Line 內搜尋群組', url: null },
      ],
    },
    schoolSocial: {
      title: '學校活動 IG',
      items: [
        { label: '@ntnustu', url: 'https://www.instagram.com/ntnustu' },
        { label: '@ntnu.taiwan', url: 'https://www.instagram.com/ntnu.taiwan' },
      ],
    },
    clubDirectories: {
      title: '社團資訊總覽（師大／臺大／臺科大皆可參加）',
      items: [
        { label: '師大學生社團資訊網', url: 'https://activity.sa.ntnu.edu.tw/cluboverview/' },
        { label: '臺大學生社團資訊網', url: 'https://osa_activity.ntu.edu.tw/club/index' },
        { label: '臺科大學生社團資訊網', url: 'https://clubs.ntust.edu.tw/Introduction/' },
      ],
      note: '身為跨校選課的一員，也很歡迎參加臺大、臺科大的社團！學長姐親身參加過轉聯會、國際青年服務隊、臺大機器人社，都很推薦。',
    },
  },
  campusResources: {
    title: '校內資源懶人包',
    items: [
      {
        label: '工讀機會查詢系統',
        detail: '想在校內打工賺生活費，這裡看目前釋出的工讀職缺。',
        url: 'https://pms.itc.ntnu.edu.tw/HireApp/',
      },
      {
        label: '生活助學金',
        detail: '經濟上有需要，可留意生活助學金申請資格與期程。',
        url: 'https://assistance.sa.ntnu.edu.tw/ministry-edu-2/',
      },
      {
        label: '免費健身房',
        detail: '不用另外付費，刷學生證就能直接進場使用。',
        url: 'https://www.phr.ntnu.edu.tw/zh_tw/rental/place202',
      },
      {
        label: '適合讀書、放空、吃東西的地方',
        detail: '自習室、文薈廳皆可飲食；圖書館內則不可飲食。',
        subLinks: [
          { label: '自習室', url: 'https://www.lib.ntnu.edu.tw/service/facility_11.jsp' },
          { label: '文薈廳', url: 'https://www.lib.ntnu.edu.tw/service/facility_09_01.jsp' },
        ],
      },
      {
        label: '學生輔導中心',
        detail: '轉學適應期如果感覺有點累、有點迷茫，別忘了學校有完善的輔導資源。',
        url: 'https://counseling.sa.ntnu.edu.tw/',
      },
    ],
    tbd: [
      '宿舍電費計算方式、垃圾丟棄地點與時間（各宿舍規定略有不同，待確認）',
    ],
  },
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const faqs = [
  {
    q: '轉聯會需要繳會費嗎？',
    a: '不用！轉聯會不收任何會費，我們主要僅辦理迎新、選課說明會等活動，單純是學長姐想把經驗傳承下去。',
  },
  {
    q: '學分抵免一定要在開學前辦完嗎？',
    a: '抵免申請期間為 8/24–9/11，逾期不受理、須待次學期再辦理，強烈建議在時限內盡早準備原校成績單正本並送出申請，避免影響選課學分規劃。',
  },
  {
    q: '轉學生可以參加哪幾個階段的選課？',
    a: '轉學生在第一階段、第二階段、全校加退選都可以選課；若入學後尚無在學紀錄（例如當學期申請保留入學），則適用「新生階段選課」（08/28–08/31）。',
  },
  {
    q: '住在公館校區的宿舍，但主要在校本部上課怎麼辦？',
    a: '公館到校本部可搭免費校內接駁車或復興幹線公車（05:50–23:00 班次密集），單程約 15–20 分鐘，建議課表安排時預留緩衝時間；選宿舍前也可以先確認自己系所主要上課校區。',
  },
  {
    q: '可以跨校選臺大或臺科大的課嗎？',
    a: '可以，師大與臺大、臺科大同屬臺灣大學系統，選課時間與本校相同、直接在本校選課系統選課即可，但要注意三校上課節次不同，且校際選課學分數不得超過系所最低畢業學分數的 1/3。',
  },
  {
    q: '各系的畢業學分和語言檢定門檻在哪裡查？',
    a: '這部分因系而異，目前查無跨校統一總表，建議直接向開課系所辦公室索取「課程地圖」或畢業學分表，轉聯會也在持續蒐集整理中（待確認）。',
  },
  {
    q: '學校有免費的健身房可以用嗎？',
    a: '有，不需額外付費，刷學生證即可直接進場使用。',
  },
  {
    q: '想在校內打工或申請助學金，去哪裡找資訊？',
    a: '工讀職缺可查「工讀機會查詢系統」，經濟上有需要也可申請生活助學金，兩者都在下方「資源與在地生活」區塊有連結。',
  },
  {
    q: '還有問題想問轉聯會，怎麼聯絡？',
    a: '最快的方式是直接私訊我們的 Instagram，也可以寄信到社團信箱；如果是想給建議或分享經驗，歡迎填最下方的「許願池」表單，學長姐都會盡量回覆！',
  },
]

// 提問／回饋管道：直接導向 IG 私訊，不使用另外的 Google 表單
export const questionIgDmUrl = club.contact.instagram.dmUrl

// 許願池（學期回饋）表單：以 FormSubmit.co 靜態表單直接寄送到社團信箱，無需自建後端
// 注意：該信箱第一次收到投稿時，FormSubmit 會寄一封啟用確認信，需點擊一次才會開始正常轉送後續內容
export const feedbackForm = {
  endpoint: `https://formsubmit.co/ajax/${club.contact.email}`,
  subject: 'NTNU Trans Hub 許願池投稿',
}

// ---------------------------------------------------------------------------
// 常用連結
// ---------------------------------------------------------------------------
export const usefulLinks = [
  { label: '師大官網', url: 'https://www.ntnu.edu.tw/' },
  { label: '師大教務處行事曆', url: 'https://www.aa.ntnu.edu.tw/zh_tw/Calender' },
  { label: '新生手冊', url: 'https://www.aa.ntnu.edu.tw/zh_tw/Freshmen01/Bachelors/FreshmanHandbook' },
  { label: '師大 App 申請及使用說明', url: 'https://www.cla.ntnu.edu.tw/wp-content/uploads/2020/03/「臺灣師範大學」app申請及使用-.pdf' },
  { label: '校內地圖／教室代碼查詢', url: 'https://www.ga.ntnu.edu.tw/ntnu_map/' },
  { label: '師大 IG', url: 'https://www.instagram.com/ntnu.taiwan/' },
  { label: '校務行政入口網', url: 'https://iportal.ntnu.edu.tw/ntnu/' },
  { label: '首次啟用帳號', url: 'https://ap.itc.ntnu.edu.tw/nipinit/' },
  { label: 'Moodle 數位學習平台', url: 'https://moodle3.ntnu.edu.tw/' },
  { label: 'Google Workspace for NTNU 啟用說明', url: 'https://www.itc.ntnu.edu.tw/index.php/gsuite/' },
  { label: '學生輔導中心', url: 'https://counseling.sa.ntnu.edu.tw/' },
  { label: '學生兵役申請', url: 'https://assistance.sa.ntnu.edu.tw/rights-3/' },
  { label: '就學貸款', url: 'https://assistance.sa.ntnu.edu.tw/loan/' },
  { label: '課程查詢／選課系統', url: 'https://www.aa.ntnu.edu.tw/zh_tw/selectives/Dayschool/CourseInquiry' },
  { label: '學雜費專區', url: 'https://www.aa.ntnu.edu.tw/Tuition' },
  { label: '學生住宿服務中心', url: 'https://dorm.sa.ntnu.edu.tw/' },
  { label: '通識教育中心', url: 'https://www.cge.ntnu.edu.tw/' },
  { label: '師大課程地圖系統', url: 'http://coursemap.itc.ntnu.edu.tw/course_map_all/class.php?code=GU' },
]

export const contactPhones = [
  { item: '註冊繳費', office: '出納組', phone: '(02) 7749-1343' },
  { item: '線上選課', office: '課務組', phone: '(02) 7749-1114' },
  { item: '學分抵免', office: '註冊組', phone: '(02) 7749-1077' },
  { item: '住宿申請', office: '學生住宿服務中心', phone: '(02) 7749-3322' },
  { item: '學生兵役', office: '生活輔導組', phone: '(02) 7749-1064' },
  { item: '就學貸款', office: '生活輔導組', phone: '(02) 7749-1058' },
  { item: '獎助學金／學生團體保險', office: '生活輔導組', phone: '(02) 7749-1061' },
  { item: '境外生保險／獎助學金', office: '國際事務處', phone: '(02) 7749-1282' },
  { item: '新生體檢', office: '健康中心', phone: '(02) 7749-3107' },
]
