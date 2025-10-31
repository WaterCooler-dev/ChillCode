import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ko-KR',
  title: "ChillCode",
  description: "코딩을 이해하기 쉽게 가르쳐주는 블로그",
  srcDir: '../content',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: { dark: '/img/ChillCode.svg', light:'/img/ChillCode_Light.svg' ,alt: '칠코드 로고' },

    nav: [
      { text: '홈', link: '/' },
      { text: '시작하기 / 모든 강의', link: '/start'},
      { text: '어바웃', link: '/about' }
    ],

    sidebar: [
      { 
        text: 'ChillCode',
        items: [
          { text: '시작하기', link: '/start' },
          { text: '어바웃', link: '/about' }
        ]
      },
      { 
        text: '타입스크립트',
        items: [
          { text: '시작하기', link: '/typescript/intro'},
          { text: '타입스크립트란?', link: '/typescript/what-is-typescript' },
          { text: '타입스크립트 설치하기', link: '/typescript/install-typescript' },
          { text: '타입스크립트 자바스크립트로 변환하기', link: '/typescript/compile-typescript' },
          { text: '타입스크립트의 타입들', link: '/typescript/typescripts-types' },
          { text: '함수와 변수에 타입 지정하기', link: '/typescript/how-to-setting-types' },
          { text: '유니온 타입이란?', link: '/typescript/union-types' },
          { text: '타입 별칭과 인터페이스', link: '/typescript/type-aliases-and-interfaces' },
          { text: '리터럴 타입이란?', link: '/typescript/literal-types' },
          { text: '타입스크립트의 클래스', link: '/typescript/typescripts-class' },
          { text: '타입스크립트의 클래스 - 접근 지시자', link: '/typescript/typescripts-class-access-identifier' },
          { text: '타입스크립트의 클래스 - 추상 클래스', link: '/typescript/typescripts-class-abstract' }
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WaterCooler-dev' }
    ],

    footer: {
      copyright: '© 2025 WaterCooler'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '검색',
            buttonAriaLabel: '검색'
          },
          modal: {
            noResultsText: '많고 많은 Ctrl + F 에도 찾을 수 없었습니다.',
            resetButtonTitle: '검색 초기화 하기',
            footer: {
              selectText: ' 해서 선택',
              navigateText: ' 해서 이동',
              closeText: ' 해서 닫기'
            }
          }
        }
      }
    },

    // 테마의 한국어화
    outline: { label: '목차' },
    darkModeSwitchLabel: '라이트모드 / 다크모드',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로 돌아가기',
    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지'
    }
  }
})
