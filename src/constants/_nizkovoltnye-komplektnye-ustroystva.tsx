import React from "react"

const nkuOptions: string[] = [
  "Для собственных нужд всех типов электростанций",
  "Комплектование подстанций электрических сетей",
  "Комплектование подстанций перекачивающих станций газопроводов, нефтепроводов",
  "Использование в системах электроснабжения и автоматики промышленных предприятий и коммунальной сферы",
]

const nkuFeatures: { icon: JSX.Element; title: string; subtitle: string }[] = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 md:h-7 md:w-7">
        <g clipPath="url(#clip0_55_3069)">
          <path d="M6.79999 32.8V30.4H10.4V32.8H14V24L2.79999 27.2V32.8H6.79999Z" fill="#93C01F" />
          <path
            d="M25.9474 23.7165C25.9474 23.3923 25.6845 23.1294 25.3603 23.1294C25.0361 23.1294 24.7732 23.3923 24.7732 23.7165V24.7691C24.7732 25.0933 25.0361 25.3562 25.3603 25.3562C25.6845 25.3562 25.9474 25.0933 25.9474 24.7691V23.7165Z"
            fill="#93C01F"
          />
          <path
            d="M28.6624 23.7165C28.6624 23.3923 28.3996 23.1294 28.0753 23.1294C27.7511 23.1294 27.4882 23.3923 27.4882 23.7165V24.7691C27.4882 25.0933 27.7511 25.3562 28.0753 25.3562C28.3995 25.3562 28.6624 25.0933 28.6624 24.7691V23.7165Z"
            fill="#93C01F"
          />
          <path
            d="M30.2032 24.7691C30.2032 25.0933 30.4661 25.3562 30.7903 25.3562C31.1145 25.3562 31.3774 25.0933 31.3774 24.7691V23.7165C31.3774 23.3923 31.1146 23.1294 30.7903 23.1294C30.4661 23.1294 30.2032 23.3923 30.2032 23.7165V24.7691Z"
            fill="#93C01F"
          />
          <path
            d="M32.9182 24.7691C32.9182 25.0933 33.1811 25.3562 33.5053 25.3562C33.8295 25.3562 34.0924 25.0933 34.0924 24.7691V23.7165C34.0924 23.3923 33.8295 23.1294 33.5053 23.1294C33.1811 23.1294 32.9182 23.3923 32.9182 23.7165V24.7691Z"
            fill="#93C01F"
          />
          <path
            d="M17.8021 23.7165C17.8021 23.3923 17.5393 23.1294 17.215 23.1294C16.8908 23.1294 16.6279 23.3923 16.6279 23.7165V24.7691C16.6279 25.0933 16.8908 25.3562 17.215 25.3562C17.5393 25.3562 17.8021 25.0933 17.8021 24.7691V23.7165Z"
            fill="#93C01F"
          />
          <path
            d="M20.5174 23.7165C20.5174 23.3923 20.2545 23.1294 19.9303 23.1294C19.606 23.1294 19.3431 23.3923 19.3431 23.7165V24.7691C19.3431 25.0933 19.606 25.3562 19.9303 25.3562C20.2545 25.3562 20.5174 25.0933 20.5174 24.7691V23.7165Z"
            fill="#93C01F"
          />
          <path
            d="M23.2324 23.7165C23.2324 23.3923 22.9695 23.1294 22.6453 23.1294C22.3211 23.1294 22.0582 23.3923 22.0582 23.7165V24.7691C22.0582 25.0933 22.3211 25.3562 22.6453 25.3562C22.9695 25.3562 23.2324 25.0933 23.2324 24.7691V23.7165Z"
            fill="#93C01F"
          />
          <path
            d="M28.6624 18.9475C28.6624 18.6232 28.3996 18.3604 28.0753 18.3604C27.7511 18.3604 27.4882 18.6232 27.4882 18.9475V20.0001C27.4882 20.3243 27.7511 20.5872 28.0753 20.5872C28.3995 20.5872 28.6624 20.3243 28.6624 20.0001V18.9475Z"
            fill="#93C01F"
          />
          <path
            d="M30.7903 20.5872C31.1145 20.5872 31.3774 20.3243 31.3774 20.0001V18.9475C31.3774 18.6232 31.1146 18.3604 30.7903 18.3604C30.4661 18.3604 30.2032 18.6232 30.2032 18.9475V20.0001C30.2032 20.3244 30.466 20.5872 30.7903 20.5872Z"
            fill="#93C01F"
          />
          <path
            d="M33.5053 20.5872C33.8295 20.5872 34.0924 20.3243 34.0924 20.0001V18.9475C34.0924 18.6232 33.8295 18.3604 33.5053 18.3604C33.1811 18.3604 32.9182 18.6232 32.9182 18.9475V20.0001C32.9182 20.3244 33.1811 20.5872 33.5053 20.5872Z"
            fill="#93C01F"
          />
          <path
            d="M25.3603 27.8984C25.0361 27.8984 24.7732 28.1613 24.7732 28.4855V29.5382C24.7732 29.8624 25.0361 30.1253 25.3603 30.1253C25.6845 30.1253 25.9474 29.8624 25.9474 29.5382V28.4855C25.9473 28.1613 25.6845 27.8984 25.3603 27.8984Z"
            fill="#93C01F"
          />
          <path
            d="M28.0753 27.8984C27.7511 27.8984 27.4882 28.1613 27.4882 28.4855V29.5382C27.4882 29.8624 27.7511 30.1253 28.0753 30.1253C28.3995 30.1253 28.6624 29.8624 28.6624 29.5382V28.4855C28.6624 28.1613 28.3996 27.8984 28.0753 27.8984Z"
            fill="#93C01F"
          />
          <path
            d="M30.2032 29.5382C30.2032 29.8624 30.4661 30.1253 30.7903 30.1253C31.1145 30.1253 31.3774 29.8624 31.3774 29.5382V28.4855C31.3774 28.1613 31.1146 27.8984 30.7903 27.8984C30.4661 27.8984 30.2032 28.1613 30.2032 28.4855V29.5382Z"
            fill="#93C01F"
          />
          <path
            d="M32.9182 29.5382C32.9182 29.8624 33.1811 30.1253 33.5053 30.1253C33.8295 30.1253 34.0924 29.8624 34.0924 29.5382V28.4855C34.0924 28.1613 33.8295 27.8984 33.5053 27.8984C33.1811 27.8984 32.9182 28.1613 32.9182 28.4855V29.5382Z"
            fill="#93C01F"
          />
          <path
            d="M17.2152 27.8984C16.891 27.8984 16.6281 28.1613 16.6281 28.4855V29.5382C16.6281 29.8624 16.891 30.1253 17.2152 30.1253C17.5394 30.1253 17.8023 29.8624 17.8023 29.5382V28.4855C17.8023 28.1613 17.5394 27.8984 17.2152 27.8984Z"
            fill="#93C01F"
          />
          <path
            d="M19.9303 27.8984C19.606 27.8984 19.3431 28.1613 19.3431 28.4855V29.5382C19.3431 29.8624 19.606 30.1253 19.9303 30.1253C20.2545 30.1253 20.5174 29.8624 20.5174 29.5382V28.4855C20.5174 28.1613 20.2545 27.8984 19.9303 27.8984Z"
            fill="#93C01F"
          />
          <path
            d="M22.6453 27.8984C22.3211 27.8984 22.0582 28.1613 22.0582 28.4855V29.5382C22.0582 29.8624 22.3211 30.1253 22.6453 30.1253C22.9695 30.1253 23.2324 29.8624 23.2324 29.5382V28.4855C23.2324 28.1613 22.9695 27.8984 22.6453 27.8984Z"
            fill="#93C01F"
          />
          <path
            d="M38.24 32.429H37.1616V12.9289C37.1676 12.5983 36.8213 12.2592 36.4314 12.3595L33.4009 13.1211L32.7334 4.59252C32.7095 4.28705 32.4545 4.05127 32.148 4.05127H29.8421C29.5356 4.05127 29.2808 4.28705 29.2568 4.59252L28.4926 14.3545L25.2172 15.1775C24.9562 15.2431 24.7732 15.4778 24.7732 15.7469V18.107L22.4041 18.7024L21.738 10.193C21.7141 9.88752 21.4591 9.65174 21.1527 9.65174H18.8467C18.5402 9.65174 18.2854 9.88752 18.2614 10.193L18.002 13.507C17.9767 13.8303 18.2183 14.1128 18.5415 14.1381C18.8645 14.163 19.1473 13.9219 19.1726 13.5987L19.3896 10.8259H20.6096L21.249 18.9926L18.7002 19.6331L18.9892 15.9403C19.0145 15.617 18.773 15.3345 18.4498 15.3092C18.1263 15.284 17.844 15.5254 17.8187 15.8487L17.4987 19.935L14.0029 20.8135C13.7419 20.8791 13.5589 21.1138 13.5589 21.3828V23.7431L11.0834 24.3651L10.4122 15.7901C10.3883 15.4846 10.1334 15.2488 9.82687 15.2488H7.52109C7.21461 15.2488 6.95969 15.4846 6.93578 15.7901L6.16781 25.6003L2.78883 26.4494C2.52781 26.515 2.34477 26.7497 2.34477 27.0188V32.4288H1.76C0.789531 32.429 0 33.2186 0 34.1891C0 35.1595 0.789531 35.9491 1.76 35.9491H9.2493C9.57352 35.9491 9.83641 35.6862 9.83641 35.362C9.83641 35.0378 9.57352 34.7749 9.2493 34.7749H1.76C1.43695 34.7749 1.17414 34.512 1.17414 34.189C1.17414 33.866 1.43695 33.6031 1.76 33.6031H28.4419C28.7661 33.6031 29.029 33.3402 29.029 33.016C29.029 32.6918 28.7662 32.4289 28.4419 32.4289H14.7332V21.8408L25.5034 19.1344C25.7644 19.0688 25.9473 18.8342 25.9473 18.565V16.2049L35.9873 13.6819V32.4291H30.7903C30.4661 32.4291 30.2032 32.692 30.2032 33.0162C30.2032 33.3404 30.4661 33.6033 30.7903 33.6033H38.24C38.563 33.6033 38.8259 33.8662 38.8259 34.1892C38.8259 34.5122 38.563 34.775 38.24 34.775H11.5977C11.2734 34.775 11.0105 35.0379 11.0105 35.3621C11.0105 35.6863 11.2734 35.9492 11.5977 35.9492H38.24C39.2105 35.9492 40 35.1597 40 34.1892C40 33.2186 39.2105 32.429 38.24 32.429ZM8.06398 16.4231H9.28398L9.92844 24.6555L7.36914 25.2986L8.06398 16.4231ZM9.83641 32.429H7.51164V30.7664H9.83633L9.83641 32.429ZM11.0105 32.429V30.1793C11.0105 29.8551 10.7477 29.5922 10.4234 29.5922H6.92453C6.60031 29.5922 6.33742 29.855 6.33742 30.1793V32.429H3.51898V27.4768L13.559 24.9538V32.429H11.0105ZM30.385 5.22541H31.605L32.2458 13.4113L29.6939 14.0526L30.385 5.22541Z"
            fill="#151515"
          />
        </g>
        <defs>
          <clipPath id="clip0_55_3069">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Собственное производство",
    subtitle:
      "Наличие производственных мощностей позволяет решать любые задачи в производстве электрощитового оборудования.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 md:h-7 md:w-7">
        <g clipPath="url(#clip0_55_3099)">
          <ellipse cx="18.6" cy="8.8001" rx="2.76706" ry="3.2" fill="#93C01F" />
          <path
            d="M36.2459 5.54997C35.4497 5.50536 34.7058 6.06841 34.7058 6.91716V12.163H21.9517L21.3864 10.9672C22.695 9.21169 22.1322 6.61872 20.2309 5.56489L20.2711 1.70755C20.2942 -0.519638 16.9038 -0.536201 16.8806 1.67138L16.8405 5.52466C14.9194 6.53692 14.3024 9.12388 15.5725 10.9049L14.9452 12.163H2.16287C1.41791 12.163 0.811768 12.7764 0.811768 13.5302V38.6068C0.811768 39.3606 1.41791 39.974 2.16287 39.974H36.4865C38.6004 39.974 40.3217 38.2429 40.3403 36.1081C40.3405 36.1022 40.3412 36.0965 40.3412 36.0906V9.69411C40.3412 7.40903 38.504 5.54997 36.2459 5.54997ZM35.8639 6.91716C35.8639 6.72325 36.1052 6.69107 36.2459 6.72185C37.8655 6.72185 39.1831 8.05513 39.1831 9.69403V33.3055C38.4872 32.6152 37.5345 32.189 36.4854 32.189C36.3348 32.2123 35.8639 32.2555 35.8639 31.9936V6.91716ZM26.5778 24.6636L25.9729 26.3986L19.3215 12.3297C19.7486 12.2289 20.1474 12.052 20.5021 11.8123L26.5778 24.6636ZM16.4389 11.7688C16.7884 12.0159 17.1832 12.2017 17.6081 12.3115L10.6649 26.2351L10.0964 24.4875L16.4389 11.7688ZM20.4764 17.4879L16.3461 17.4438L18.4556 13.2135L20.4764 17.4879ZM18.0386 1.6838C18.0461 0.967627 19.1202 0.99833 19.113 1.69521L19.0768 5.16427C18.7222 5.10661 18.3584 5.10192 18.0025 5.15099L18.0386 1.6838ZM16.7858 6.9981C17.2462 6.542 17.8841 6.28411 18.5278 6.28966C19.8803 6.30411 20.969 7.42927 20.9548 8.79786C20.9406 10.1576 19.843 11.2539 18.5023 11.2539C18.4936 11.2539 18.4847 11.2538 18.476 11.2537C17.1235 11.2393 16.0349 10.1141 16.0491 8.74552C16.056 8.08255 16.3176 7.46192 16.7858 6.9981ZM36.4865 38.8022H2.16287C2.0564 38.8022 1.96986 38.7145 1.96986 38.6068V13.5303C1.96986 13.4226 2.0564 13.335 2.16287 13.335H14.3606L12.333 17.401L10.377 17.3801C9.63285 17.3666 9.61733 18.5439 10.3648 18.5518L11.7518 18.5667L9.02632 24.0322C8.91028 24.2649 8.89075 24.5294 8.97127 24.7771L9.7109 27.0504C9.97418 27.8596 11.1093 27.9454 11.4885 27.1849L15.7647 18.6096L21.0332 18.6658L25.1292 27.3297C25.4907 28.0946 26.63 28.0356 26.9098 27.2332L27.6964 24.9773C27.7822 24.7314 27.7682 24.4662 27.6569 24.2308L25.0462 18.7086L26.4332 18.7234C27.1773 18.7368 27.1928 17.5596 26.4454 17.5516L24.4893 17.5308L22.5056 13.3349H34.7056V31.9937C34.7056 33.0219 35.6226 33.3933 36.4853 33.3609C37.9699 33.3609 39.1781 34.5808 39.1828 36.0821C39.1782 37.5827 37.9706 38.8022 36.4865 38.8022Z"
            fill="#151515"
          />
          <path
            d="M31.1399 29.1865H5.53508C5.0029 29.1865 4.57001 29.6246 4.57001 30.1631V35.4756C4.57001 36.0141 5.0029 36.4522 5.53508 36.4522H31.14C31.6722 36.4522 32.1051 36.0141 32.1051 35.4756V30.1631C32.105 29.6246 31.6721 29.1865 31.1399 29.1865ZM30.9469 35.2803H5.7281V30.3584H7.22025V31.4074C7.22025 32.1407 8.37834 32.174 8.37834 31.4074V30.3584H9.85483V32.1886C9.85483 32.9219 11.0129 32.9553 11.0129 32.1886V30.3584H12.4893V31.4074C12.4893 32.1407 13.6474 32.174 13.6474 31.4074V30.3584H15.1239V32.1886C15.1239 32.9219 16.282 32.9553 16.282 32.1886V30.3584H17.7585V31.4074C17.7585 32.1407 18.9166 32.174 18.9166 31.4074V30.3584H20.393V32.1886C20.393 32.9219 21.5511 32.9553 21.5511 32.1886V30.3584H23.0276V31.4074C23.0276 32.1407 24.1857 32.174 24.1857 31.4074V30.3584H25.6621V32.1886C25.6621 32.9219 26.8202 32.9553 26.8202 32.1886V30.3584H28.2967V31.4074C28.2967 32.1407 29.4548 32.174 29.4548 31.4074V30.3584H30.9469V35.2803Z"
            fill="#93C01F"
          />
        </g>
        <defs>
          <clipPath id="clip0_55_3099">
            <rect width="39.5294" height="40" fill="white" transform="translate(0.811768)" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Проектирование, разработка и ввод в эксплуатацию",
    subtitle: "Вводно - распределительных устройств 0,4 кВ, различных систем управления, систем АСУ ТП и АСКУЭ",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 md:h-7 md:w-7">
        <g clipPath="url(#clip0_55_3094)">
          <path
            d="M39.6468 17.1185L37.2153 16.0659C37.1185 15.6414 37.0051 15.2173 36.8763 14.7992L38.4554 12.672C38.5946 12.4844 38.6091 12.232 38.4923 12.0298L36.1486 7.97031C36.0317 7.76789 35.806 7.65438 35.5736 7.68125L32.9382 7.98711C32.6418 7.66805 32.332 7.35828 32.013 7.06187L32.3188 4.42648C32.3458 4.1943 32.2322 3.96836 32.0298 3.85148L27.9703 1.50773C27.768 1.39094 27.5157 1.40547 27.3281 1.54469L25.2008 3.12367C24.7826 2.99492 24.3586 2.88141 23.9341 2.78469L22.8815 0.353203C22.7887 0.13875 22.5773 0 22.3438 0H17.6562C17.4227 0 17.2113 0.13875 17.1185 0.353203L16.0659 2.78469C15.6414 2.88148 15.2173 2.99492 14.7992 3.12367L12.672 1.54461C12.4845 1.40531 12.2321 1.39086 12.0298 1.50766L7.97023 3.85141C7.76781 3.96828 7.65422 4.19422 7.68117 4.42641L7.98703 7.0618C7.66805 7.3582 7.35828 7.66797 7.0618 7.98703L4.42641 7.68117C4.19406 7.65422 3.96828 7.76781 3.85141 7.97023L1.50766 12.0297C1.39086 12.232 1.40539 12.4843 1.54461 12.6719L3.12367 14.7991C2.99492 15.2174 2.88141 15.6414 2.78469 16.0658L0.353203 17.1185C0.13875 17.2113 0 17.4227 0 17.6562V22.3438C0 22.5773 0.13875 22.7887 0.353203 22.8815L2.78469 23.9341C2.88148 24.3585 2.99492 24.7826 3.12367 25.2008L1.54461 27.328C1.40539 27.5156 1.39086 27.768 1.50766 27.9702L3.85141 32.0298C3.96828 32.2321 4.1943 32.3459 4.42641 32.3188L7.0618 32.013C7.35828 32.332 7.66805 32.6417 7.98703 32.9382L7.68117 35.5736C7.65422 35.8058 7.76781 36.0317 7.97023 36.1486L12.0298 38.4923C12.2321 38.6092 12.4844 38.5946 12.672 38.4554L14.7992 36.8763C15.2175 37.0051 15.6415 37.1186 16.0659 37.2153L17.1185 39.6468C17.2113 39.8613 17.4227 40 17.6562 40H22.3438C22.5773 40 22.7887 39.8613 22.8815 39.6468L23.9341 37.2153C24.3585 37.1185 24.7826 37.0051 25.2008 36.8763L27.328 38.4554C27.5155 38.5947 27.768 38.6092 27.9702 38.4923L32.0297 36.1486C32.2321 36.0317 32.3457 35.8058 32.3187 35.5736L32.0129 32.9382C32.332 32.6417 32.6417 32.332 32.9381 32.013L35.5735 32.3188C35.8059 32.3458 36.0316 32.2321 36.1485 32.0298L38.4923 27.9702C38.6091 27.768 38.5945 27.5156 38.4553 27.328L36.8763 25.2008C37.005 24.7826 37.1185 24.3586 37.2152 23.9341L39.6467 22.8815C39.8612 22.7887 40 22.5773 40 22.3438V17.6562C40 17.4227 39.8613 17.2113 39.6468 17.1185ZM38.8281 21.9589L36.4744 22.9779C36.2997 23.0535 36.1727 23.2092 36.1337 23.3955C36.012 23.9762 35.8562 24.5588 35.6703 25.1272C35.6112 25.3079 35.6434 25.5059 35.7567 25.6585L37.2851 27.7175L35.3262 31.1103L32.7754 30.8143C32.5864 30.7926 32.3987 30.8635 32.2717 31.005C31.8742 31.448 31.448 31.8741 31.005 32.2717C30.8634 32.3987 30.7924 32.5865 30.8143 32.7754L31.1103 35.3262L27.7175 37.2851L25.6584 35.7567C25.5059 35.6434 25.3078 35.6112 25.1271 35.6703C24.5587 35.8562 23.976 36.0121 23.3955 36.1336C23.2091 36.1726 23.0534 36.2996 22.9778 36.4743L21.9589 38.8281H18.0411L17.0221 36.4743C16.9465 36.2996 16.7908 36.1726 16.6045 36.1336C16.0239 36.012 15.4413 35.8562 14.8728 35.6703C14.6922 35.6112 14.4941 35.6434 14.3415 35.7567L12.2825 37.2851L8.88969 35.3262L9.1857 32.7754C9.20758 32.5866 9.13656 32.3988 8.99508 32.2718C8.55211 31.8742 8.12586 31.448 7.72828 31.005C7.60133 30.8634 7.41359 30.7927 7.22469 30.8144L4.67383 31.1104L2.71484 27.7176L4.2432 25.6586C4.35648 25.506 4.38875 25.3079 4.32961 25.1273C4.14375 24.5588 3.98781 23.9762 3.86633 23.3956C3.82734 23.2093 3.70031 23.0536 3.52562 22.978L1.17188 21.9589V18.0411L3.5257 17.0221C3.70039 16.9465 3.82742 16.7908 3.86641 16.6045C3.98797 16.0239 4.14383 15.4413 4.32969 14.8728C4.38875 14.6921 4.35656 14.4941 4.24328 14.3415L2.71484 12.2824L4.67367 8.88961L7.22453 9.18563C7.41359 9.20719 7.60125 9.13641 7.7282 8.99492C8.12578 8.55195 8.55195 8.1257 8.99492 7.7282C9.13648 7.60125 9.2075 7.41344 9.18563 7.22453L8.88961 4.67367L12.2824 2.71484L14.3414 4.2432C14.494 4.35648 14.692 4.38883 14.8727 4.32961C15.4411 4.14375 16.0238 3.98789 16.6044 3.86625C16.7907 3.82719 16.9464 3.70023 17.022 3.52555L18.0411 1.17188H21.9589L22.9779 3.52562C23.0535 3.70031 23.2092 3.82734 23.3955 3.86633C23.9762 3.98797 24.5588 4.14383 25.1272 4.32969C25.3079 4.38891 25.5059 4.35656 25.6585 4.24328L27.7176 2.71492L31.1104 4.67375L30.8144 7.22461C30.7925 7.41352 30.8636 7.60125 31.0051 7.72828C31.4481 8.12578 31.8743 8.55195 32.2718 8.995C32.3988 9.13648 32.5863 9.2075 32.7755 9.1857L35.3263 8.88969L37.2852 12.2825L35.7568 14.3416C35.6435 14.4941 35.6112 14.6923 35.6704 14.8729C35.8563 15.4412 36.0121 16.0239 36.1338 16.6045C36.1728 16.7909 36.2998 16.9466 36.4745 17.0222L38.8281 18.0411V21.9589Z"
            fill="black"
          />
          <path
            d="M20 4.6875C16.3614 4.6875 12.8344 5.98672 10.0686 8.34578C9.82242 8.55578 9.79305 8.92563 10.003 9.1718C10.213 9.41797 10.5829 9.44734 10.8291 9.23734C13.383 7.05906 16.6399 5.85938 20 5.85938C27.7972 5.85938 34.1406 12.2028 34.1406 20C34.1406 27.7972 27.7972 34.1406 20 34.1406C12.2028 34.1406 5.85938 27.7972 5.85938 20C5.85938 16.6399 7.05906 13.383 9.23734 10.8291C9.44734 10.5829 9.41805 10.213 9.1718 10.003C8.92555 9.79305 8.5557 9.82234 8.34578 10.0686C5.98672 12.8344 4.6875 16.3614 4.6875 20C4.6875 28.4434 11.5566 35.3125 20 35.3125C28.4434 35.3125 35.3125 28.4434 35.3125 20C35.3125 11.5566 28.4434 4.6875 20 4.6875Z"
            fill="black"
          />
          <path
            d="M20 32.9688C27.151 32.9688 32.9688 27.151 32.9688 20C32.9688 12.849 27.151 7.03125 20 7.03125C12.849 7.03125 7.03125 12.849 7.03125 20C7.03125 27.151 12.849 32.9688 20 32.9688ZM19.4141 13.4766C19.4141 13.1534 19.6769 12.8906 20 12.8906C20.3231 12.8906 20.5859 13.1534 20.5859 13.4766C20.5859 13.7997 20.3231 14.0625 20 14.0625C19.6769 14.0625 19.4141 13.7997 19.4141 13.4766ZM20 8.20312C26.5048 8.20312 31.7969 13.4952 31.7969 20C31.7969 25.0632 28.5904 29.3911 24.1016 31.061V27.274L26.2737 25.1019C26.3836 24.992 26.4453 24.843 26.4453 24.6876V21.6571C27.1273 21.4152 27.6172 20.764 27.6172 20.0001C27.6172 19.0308 26.8287 18.2423 25.8594 18.2423C24.8901 18.2423 24.1016 19.0308 24.1016 20.0001C24.1016 20.764 24.5915 21.4152 25.2734 21.6571V24.4449L23.1013 26.617C22.9914 26.7269 22.9297 26.8759 22.9297 27.0313V31.4286C22.1747 31.6223 21.3908 31.7427 20.5859 31.7823V15.1336C21.2679 14.8917 21.7578 14.2405 21.7578 13.4766C21.7578 12.5073 20.9693 11.7188 20 11.7188C19.0307 11.7188 18.2422 12.5073 18.2422 13.4766C18.2422 14.2405 18.7321 14.8917 19.4141 15.1336V31.7823C18.6092 31.7427 17.8253 31.6222 17.0703 31.4285V27.0312C17.0703 26.8759 17.0086 26.7268 16.8987 26.617L14.7266 24.4448V21.657C15.4085 21.4152 15.8984 20.7639 15.8984 20C15.8984 19.0307 15.1099 18.2422 14.1406 18.2422C13.1713 18.2422 12.3828 19.0307 12.3828 20C12.3828 20.7639 12.8727 21.4152 13.5547 21.657V24.6875C13.5547 24.8429 13.6164 24.992 13.7263 25.1018L15.8984 27.2739V31.0609C11.4096 29.3911 8.20312 25.0632 8.20312 20C8.20312 13.4952 13.4952 8.20312 20 8.20312ZM25.2734 20C25.2734 19.6769 25.5362 19.4141 25.8594 19.4141C26.1825 19.4141 26.4453 19.6769 26.4453 20C26.4453 20.3231 26.1825 20.5859 25.8594 20.5859C25.5362 20.5859 25.2734 20.3231 25.2734 20ZM13.5547 20C13.5547 19.6769 13.8175 19.4141 14.1406 19.4141C14.4637 19.4141 14.7266 19.6769 14.7266 20C14.7266 20.3231 14.4637 20.5859 14.1406 20.5859C13.8175 20.5859 13.5547 20.3231 13.5547 20Z"
            fill="#93C01F"
          />
        </g>
        <defs>
          <clipPath id="clip0_55_3094">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Сборка НКУ по типовым схемам и по индивидуальным схемам Заказчика",
    subtitle:
      "Максимально соответствуя требованиям и конфигурации объекта, при этом являясь эталоном надежности и безопасности.",
  },
]

export { nkuFeatures, nkuOptions }