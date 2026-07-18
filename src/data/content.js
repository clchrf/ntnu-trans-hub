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
  welcomeMessage:
    '大家好，歡迎來到師大！經歷重重考驗來到這裡，你們已經證明了自己的優秀。轉學生活的初期或許會感到忙碌與挑戰，請記得放慢腳步，保持信心，師大是個充滿活力的地方，希望各位可以好好享受校園生活。若在適應上有任何疑難雜症，請務必聯繫轉聯會，我們會竭盡所能，陪伴大家走過適應期，讓我們一起創造精彩的師大生活吧！',
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
    { date: '08/02', label: '選課說明會', url: 'https://forms.gle/3jd6ig2f6EBAm29v6' },
    { date: '09/04', label: '轉學生座談會' },
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
    detail:
      '師大專屬迎新營隊，提前認識同系夥伴、走訪校園熟悉選課與行政流程、認識社團。報名／聯絡：林小姐 (02)7749-1060　lnc1060@ntnu.edu.tw；曾先生 (02)7749-1062　tkc1993123@ntnu.edu.tw',
  },
  {
    start: '2026-09-04',
    end: '2026-09-04',
    date: '09/04',
    title: '公告新生階段選課結果',
    category: '選課',
  },
  {
    start: '2026-09-04',
    end: '2026-09-04',
    date: '09/04',
    title: '轉學生座談會',
    category: '迎新',
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
  generalWindowNote:
    '一般規則：學分抵免作業於各學期開學前兩週與開學第一週皆可進行，逾期不受理（實際仍以每學期教務處公告的正式期限為準）。',
  documentsNeeded: ['抵免申請表（依開課單位數量，可能需要數張）', '原校歷年成績單正本（數張）', '欲抵免的原校課程之課程大綱'],
  procedure: [
    '登入校務行政入口網／教務資訊系統（學生版）／成績相關／一般科目抵免申請系統，線上新增一般科目抵免',
    '將相關文件繳至開課系所／單位進行審核',
    '審核完成後，將抵免申請表繳至教務處課務組辦理抵免',
    '送件約 5 個工作天後，可於「校務行政入口→教務資訊系統→成績相關→成績查詢→採計與抵免成績」查詢結果',
  ],
  splitFormTip: {
    title: '抵免流程小提醒：什麼是「拆單」',
    detail:
      '同一次抵免申請常會遇到不同開課單位審核的課，例如專業必修（歸各系審）、通識課（歸通識教育中心審）、體育課（歸體育室審）。如果全部填在同一張申請單上印出來，這張紙本就得跑很長的公文旅行。建議在系統線上申請時「依開課單位分開新增」，印出來就不會被整合在同一張，跑得比較快（例如：共同英文的開課單位是共教會外文組，就獨立成一張）。',
  },
  selfCheckTip: {
    title: '抵免還沒申請完，要怎麼選課？',
    detail:
      '用一份「抵免自我確認清單」記錄每一門課的抵免狀況：先把確定沒修過的必修、系上選修，或是師大特有的通識課排進課表；優先選你確定不會被抵掉的課。遇到被擋修的課，先寫信跟老師說明自己是轉學生、目前抵免還在跑流程；若老師沒回信，開學第一週直接到課堂當面告知老師是轉學生，向老師索取授權碼加選。',
  },
  englishChineseMakeup: {
    title: '共同英文、國文沒抵免到，怎麼加選？',
    detail: '英文：08/31–09/18 下午 5 點前完成線上表單申請，學校會協助加選；國文：直接在全校加退選階段加選即可。',
  },
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
  handbookLink: {
    label: '教務處｜新生手冊（含學分抵免期限說明）',
    url: 'https://www.aa.ntnu.edu.tw/uploads/asset/data/64180622843f751ab2f36ec2/20220426%E6%96%B0%E7%94%9F%E6%89%8B%E5%86%8A_%E5%AE%9A%E7%A8%BF_.pdf',
  },
}

// ---------------------------------------------------------------------------
// 選課
// ---------------------------------------------------------------------------
export const courseSelection = {
  phases: [
    {
      name: '第一階段網路選課',
      date: '08/04 – 08/07',
      note: '普通體育／通識／教育學程採填寫志願後分發；其他課程登記後分發',
    },
    {
      name: '第二階段網路選課',
      date: '08/17 – 08/19',
      note: '所有課程登記後分發，選課時間先後不影響電腦分發結果',
    },
    {
      name: '新生階段選課',
      date: '08/28 – 08/31',
      note: '僅限入學後尚無在學紀錄者；體育最多填 10 個志願、至多分發 1 門，通識最多填 30 個志願、至多分發 3 門',
    },
    {
      name: '全校加退選',
      date: '09/07 – 09/21',
      note: '線上即時加退選（含授權碼選課）；名額、衝堂、學分上限、限修、擋修、先修等條件即時判斷；09/20 退選截止、09/21 僅可加選',
    },
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
      '臺大／臺科大課程：直接在師大選課系統中查詢並登記即可，無須另外跨校註冊',
      '臺大、臺科大每門課會釋出特定保留名額給外校生；登記人數超過開放名額時，一律由電腦系統抽籤分發',
      '修畢及格後，學分會自動匯入師大成績單；該課程是否能承認為本系專業選修，須由所屬系辦公室認定，若不予承認通常列入畢業自由學分',
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
    rules: [
      '轉學生可以申請雙主修、輔系、預修生資格，但不能申請轉系──不限年級，這是轉學生身份本身的限制（依教務處官方問答集 Q5）',
      '雙主修、輔系、預修生資格修習期間以「1 個」為限，修畢後可再以認證方式取得額外的雙主修／輔系',
      '大學部雙主修、輔系規定已大幅鬆綁：只要修畢該領域規定的「第一門課」，即可申請登記修讀雙主修及輔系（預修生登記制）',
      '採甄選制的學系（如美術系、設計系、體育系、心輔系〔112 學年度起〕等）不適用前述預修生登記制度，仍須另外參加該系甄選',
    ],
    notice: '各系實際名額、截止日期仍逐年公告而異，正式規定請以教務處與各系所公告為準。',
    changeMajorWorkaround: {
      title: '「A 系進 B 系出」：用雙主修變更畢業學系',
      detail:
        '轉學生受限於轉系規定，但可透過完成雙主修條件，實質變更畢業學系：需先申請並取得 B 系（欲畢業學系）之雙主修資格，於修業年限內修畢 B 系全部專業必修學分，同時取得並符合原 A 系之輔系資格；達成後可於畢業當學期向教務處提出專案審查，申請改以 B 系作為主修學系畢業。',
      notice: '此機制的具體審查條件與流程，查無教務處公開頁面可獨立驗證，來源為轉聯會新生包整理，正式規定請務必向教務處或欲加修學系辦公室確認（待確認）。',
    },
    link: {
      label: '教務處 FAQ：轉系、雙主修、輔系、學分學程、逕讀博士學位、碩士先修',
      url: 'https://www.aa.ntnu.edu.tw/zh_tw/FAQ/Registry&Graduate/MajorChange',
    },
    doubleMajorLink: {
      label: '教務處｜雙主修甄選制學系清單',
      url: 'https://www.aa.ntnu.edu.tw/zh_tw/Registry/RequestTransfer/Doublemajor',
    },
    transferRuleLink: {
      label: '教務處｜轉系與轉學生相關規定',
      url: 'https://www.aa.ntnu.edu.tw/zh_tw/Registry/RequestTransfer',
    },
    qaLink: {
      label: '教務處｜學士班轉系、雙主修、輔系常見問答集（PDF）',
      url: 'https://www.csie.ntnu.edu.tw/wp-content/uploads/2025/03/%E8%BD%89%E7%B3%BB%E3%80%81%E9%9B%99%E4%B8%BB%E4%BF%AE%E3%80%81%E8%BC%94%E7%B3%BB%E3%80%81%E9%A0%90%E4%BF%AE%E7%94%9F%E5%B8%B8%E8%A6%8B%E5%95%8F%E7%AD%94%E9%9B%86-1.pdf',
    },
  },
  teachingProgram: {
    title: '教育學程（教程）',
    withPriorStatus: {
      title: '原校已具備師資生資格者：資格移轉',
      detail:
        '須於入學開學第一週內，備妥「原校核定之師資生資格證明」及「歷年成績單」，主動向本校師資培育學院提出資格移轉申請。移轉具時效性，逾期視同放棄，未來若欲取得資格，須重新參加師資生甄選。',
    },
    creditTransferRule: {
      title: '教育專業課程學分抵免',
      detail:
        '限已取得師資生資格者申請；抵免科目成績須達 B-（70 分）以上，且為 10 年內修習、課程內容須與本校相符；學分數不得以少抵多或與系上畢業學分重複計算，教材教法與教學實習課程不得相互抵免。',
    },
    withoutPriorStatus: {
      title: '不具原校資格者：參與師資生甄選',
      detail:
        '轉學生若欲取得師培資格，須參與本校每學期辦理之師資生甄選，考核項目涵蓋書面審查、筆試與面試；首學期學業成績（GPA）為書面審查重要依據。錄取後每學期學業總平均低於 2.44（即未達 70 分），將被擋修教育專業課程。',
    },
    officialLink: {
      label: '師資培育學院｜教育學分抵免說明',
      url: 'https://tecs.otecs.ntnu.edu.tw/page.aspx?t=qna&g=0',
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
    officialLink: {
      label: '台北市公車動態｜復興幹線即時班次',
      url: 'https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0161000800',
    },
  },
  allianceShuttle: {
    title: '三校聯盟交通車（師大／臺大／臺科大）',
    detail: '師大、臺大、臺科大教職員工生皆可免費搭乘，上下車主動出示學生證即可，是跨校選課、跑堂的第三種選擇。',
    eligibility: '師大、臺大、臺科大之教職員工生，上下車主動出示學生證即可免費搭乘',
    schedule: '僅於學期中的平日（週一至週五）行駛；遇國定假日、校際活動停課日、寒暑假皆全面停駛',
    stops: [
      { campus: '師大校本部', location: '圖書館校區（和平東路一段側）' },
      { campus: '臺大校本部', location: '傅鐘／行政大樓附近' },
      { campus: '臺科大校本部', location: '靠近正門或指定候車區' },
      { campus: '師大公館校區', location: '靠近理學院綜合大樓' },
    ],
  },
  metro: {
    detail: '搭捷運可於古亭站（步行約 10 分鐘）步行至和平校區；公館站步行約 15 分鐘可達公館校區。',
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
        { label: '轉聯會新生群組', url: 'https://line.me/ti/g/ceZp4kbCQC' },
        { label: '118 級群組', url: 'https://line.me/ti/g2/l1mYb8PdomJJmGGqSGkn16GDD9rGp_XA1MA_5g' },
        {
          label: '119 級群組',
          url: 'https://line.me/ti/g2/OR0rlRmS4dgoWOJKwG8mYwpnYfxTpFpdA2V6Hg',
        },
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
        label: '適合讀書、放空、吃東西的地方（校本部）',
        detail:
          '自習室 24 小時開放、可以吃東西；本部地餐、文薈廳可以吃東西聊天討論；圖書館 B1 可以喝飲料或吃簡單輕食；圖書館其餘樓層內部全面禁食。',
        subLinks: [
          { label: '自習室', url: 'https://www.lib.ntnu.edu.tw/service/facility_11.jsp' },
          { label: '本部地餐', url: 'https://maps.app.goo.gl/UEEz3fsy6LPnULi98' },
          { label: '文薈廳', url: 'https://maps.app.goo.gl/7Fn8id82pxPQSWVt5' },
          { label: '圖書館 B1（輕食區）', url: 'https://maps.app.goo.gl/CVz3BwVuUtuTcquq8' },
        ],
      },
      {
        label: '適合讀書的地方（公館校區）',
        detail: '圖書館公館分館，內部全面禁食。',
        subLinks: [{ label: '圖書館公館分館', url: 'https://maps.app.goo.gl/Z1X9ws7JQbFdEgfTA' }],
      },
      {
        label: '學生輔導中心',
        detail: '轉學適應期如果感覺有點累、有點迷茫，別忘了學校有完善的輔導資源。',
        url: 'https://counseling.sa.ntnu.edu.tw/',
      },
    ],
    tbd: [],
  },
  dormRules: {
    title: '宿舍電費與垃圾丟棄規定',
    items: [
      '電費採浮動費率，依各校區當期繳交台灣電力公司的電費計算，並非固定費率（並非每度 5.5 元這種固定標準）',
      '學七舍寢室需另外自行負擔熱泵電費與熱泵水費',
      '寢室垃圾須自行分類，一般垃圾需於規定時間丟棄至清潔車，不得任意棄置',
      '違反宿舍規定依「學生宿舍管理要點」扣點：學年累計達 10 點，降低下學年住校順序 1 順位；累計達 20 點，勒令退宿',
    ],
    links: [
      {
        label: '學生宿舍住宿費一覽表（電費計價說明）',
        url: 'https://www.scribd.com/document/665627574/%E5%AD%B8%E7%94%9F%E5%AE%BF%E8%88%8D%E4%BD%8F%E5%AE%BF%E8%B2%BB%E4%B8%80%E8%A6%BD%E8%A1%A8-1040914%E6%9B%B4%E6%96%B0',
      },
      { label: '學生宿舍管理要點（垃圾處理規範）', url: 'http://web.mtc.ntnu.edu.tw/upload_files/Dorm_Regulations.pdf' },
      {
        label: '學生宿舍管理要點修訂草案對照表（扣點退宿機制）',
        url: 'https://sw.ntnu.edu.tw/File/News/71-DE-B8-39-57-FD-E7-4F-47-B0-B3-DC-FB-E0-3B-E0.pdf',
      },
    ],
  },
  dormAddresses: {
    title: '宿舍與主要建築物地址',
    items: [
      { name: '誠樓', campus: '和平校區（校本部）', address: '臺北市大安區和平東路一段 162 號' },
      { name: '學七舍、男二舍、女二舍', campus: '公館校區', address: '臺北市文山區汀州路四段 88 號' },
      { name: '女一舍', campus: '和平校區', address: '臺北市大安區師大路 11 號' },
    ],
    officialLink: {
      label: '學生住宿服務中心｜各宿舍位置圖與地址',
      url: 'https://dorm.sa.ntnu.edu.tw/officelocation/',
    },
    videoLink: {
      label: '宿舍介紹影片',
      url: 'https://youtu.be/l4-qnUWhfgs?si=SGmX1IzDt6ne-YZT',
    },
    communityLinks: [
      { label: '師大組寢換宿版', url: 'https://www.facebook.com/groups/ntnudorm' },
      { label: '出清社團（台大、師大、台科大面交）', url: 'https://www.facebook.com/groups/1017189488302135' },
      { label: '出清社團（台大面交）', url: 'https://www.facebook.com/groups/closeout/' },
      { label: '校內住宿優惠', url: 'https://assistance.sa.ntnu.edu.tw/ministry-edu-4/' },
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
    q: '轉學生會很難交朋友嗎？',
    a: '一開始真的會不太容易，但師大社團非常多，推薦大家可以參加有興趣的社團，也非常歡迎來轉聯會認識一樣是轉學、轉系的朋友！',
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

// 第 11 屆轉聯會資訊懶人包（完整 PDF，內容涵蓋本站各區塊主題）
// 檔案位於 public/files/，路徑需搭配 import.meta.env.BASE_URL 組合使用
export const infoPackPdf = {
  label: '第 11 屆轉學生資訊懶人包（完整 PDF）',
  filename: 'ntnu-trans-info-pack.pdf',
}

// 提問／回饋管道：直接導向 IG 私訊，不使用另外的 Google 表單
export const questionIgDmUrl = club.contact.instagram.dmUrl

// 轉聯 AI 小助理：24 小時線上，適合先釐清問題、不知道該找哪個處室時先問它
export const aiAssistant = {
  label: '轉聯 AI 小助理',
  url: 'https://gemini.google.com/gem/1mnqxpN8sr8JobZFa2xaNJMkH7OBAtLeR?usp=sharing',
  tips: [
    '不知道問題該找哪個處室、不知道怎麼寫信或打電話，都可以先問它',
    '打電話給承辦人前，先用它釐清自己真正要問的問題',
    '暑假期間承辦人可能請假，記得多預留幾天，並主動告知對方自己是轉學生',
  ],
  disclaimer: 'AI 回答僅供參考，可能有錯誤或過時資訊，正式規定請以官方公告或本站標註「官方」的連結為準。',
}

// 許願池（學期回饋）表單：以 Web3Forms 靜態表單直接寄送到社團信箱，無需自建後端
// access key 綁定 ntnutrans2016@gmail.com，若要更換收件信箱請至 web3forms.com 重新產生
export const feedbackForm = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '3e4b887f-7cfd-4996-9b44-2d92b38d84e7',
  subject: 'NTNU Trans Hub 許願池投稿',
}

// ---------------------------------------------------------------------------
// 校園地圖
// ---------------------------------------------------------------------------
export const mapCategories = {
  校區: { color: '#161457', dotClass: 'bg-navy-950' },
  交通: { color: '#0284c7', dotClass: 'bg-sky-600' },
  美食: { color: '#e11d48', dotClass: 'bg-rose-600' },
  宿舍: { color: '#d97706', dotClass: 'bg-amber-600' },
}

// 座標來源：校區座標取自 OpenStreetMap（Photon 地理編碼）；接駁車／公車站牌座標取自轉聯會新生包內
// Google 街景連結解析出的實際經緯度；美食地點座標為所在巷弄的街廓層級定位（非精確門牌釘選）。
// 誠樓、學七舍／男二舍／女二舍座標採用其所在校區的官方地址定位（非個別建物精確釘選）。
// 女一舍（師大路11號）尚未取得可靠座標來源，故未列入地圖，待確認後再補上。
export const mapLocations = [
  { id: 'campus-heping', name: '師大和平校區（校本部）', category: '校區', lat: 25.0257576, lng: 121.5266168 },
  { id: 'campus-gongguan', name: '師大公館校區', category: '校區', lat: 25.0082321, lng: 121.5357715 },
  {
    id: 'shuttle-heping',
    name: '免費接駁車站｜和平校區（II 教育大樓前）',
    category: '交通',
    lat: 25.0274537,
    lng: 121.5293901,
  },
  {
    id: 'shuttle-gongguan',
    name: '免費接駁車站｜公館校區（綜合館前）',
    category: '交通',
    lat: 25.0077687,
    lng: 121.5368098,
  },
  {
    id: 'bus-heping',
    name: '復興幹線公車站｜和平校區（師大公車站牌）',
    category: '交通',
    lat: 25.0267353,
    lng: 121.527884,
  },
  {
    id: 'bus-gongguan',
    name: '復興幹線公車站｜公館校區（師大分部站牌）',
    category: '交通',
    lat: 25.0076571,
    lng: 121.5383942,
  },
  { id: 'food-kaojin', name: '靠近', category: '美食', lat: 25.0229861, lng: 121.5275969 },
  { id: 'food-startcurry', name: 'Start Curry', category: '美食', lat: 25.023962, lng: 121.528862 },
  { id: 'food-chicken', name: '師大雞肉飯專門店', category: '美食', lat: 25.024162, lng: 121.529162 },
  { id: 'food-porridge', name: '食粥致神仙', category: '美食', lat: 25.0244322, lng: 121.5294163 },
  { id: 'food-burger', name: '13_Burger', category: '美食', lat: 25.0242752, lng: 121.5289903 },
  { id: 'food-katsu', name: '咔滋日式豬排專賣店', category: '美食', lat: 25.0241, lng: 121.5288 },
  { id: 'dorm-cheng', name: '誠樓（和平校區）', category: '宿舍', lat: 25.0259, lng: 121.5263 },
  {
    id: 'dorm-gongguan',
    name: '學七舍／男二舍／女二舍（公館校區）',
    category: '宿舍',
    lat: 25.0084,
    lng: 121.5354,
  },
]

export const mapNote =
  '地圖標記為街廓／巷弄層級的概略位置，非精確門牌釘選，實際地點請以美食清單中的 Google Maps 連結為準；宿舍標記為所在校區的官方地址位置，非個別建物精確釘選。女一舍（師大路11號）座標尚未取得可靠來源，待確認後補上。'

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
  { label: '學雜費減免', url: 'https://assistance.sa.ntnu.edu.tw/exemption/' },
  { label: '課程查詢／選課系統', url: 'https://www.aa.ntnu.edu.tw/zh_tw/selectives/Dayschool/CourseInquiry' },
  { label: '學雜費專區', url: 'https://www.aa.ntnu.edu.tw/Tuition' },
  { label: '學生住宿服務中心', url: 'https://dorm.sa.ntnu.edu.tw/' },
  { label: '通識教育中心', url: 'https://www.cge.ntnu.edu.tw/' },
  { label: '師大課程地圖系統', url: 'http://coursemap.itc.ntnu.edu.tw/course_map_all/class.php?code=GU' },
  { label: '轉聯 AI 小助理', url: aiAssistant.url },
  { label: '選課說明會報名表單', url: 'https://forms.gle/3jd6ig2f6EBAm29v6' },
  { label: '各處室聯絡電話', url: 'https://www.ntnu.edu.tw/static.php?id=contactus' },
  { label: '專責導師室', url: 'https://counselor.sa.ntnu.edu.tw/ourteam/' },
]

// 學生緊急聯絡專線（校安中心）
export const emergencyPhone = '(02) 7749-3132'

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
  { item: '學生緊急聯絡專線', office: '校安中心', phone: '(02) 7749-3132' },
]

