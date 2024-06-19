import { defineConfig, MarkdownOptions } from "vitepress";
import { LanguageRegistration } from "shiki";
import sqfgrammar from "./sqf.json"
import extgrammar from "./ext.json"

const sqflang: LanguageRegistration = {
  ...sqfgrammar
};
const extlang: LanguageRegistration = {
  ...extgrammar
};

// TODO: Reuse telegram icon
const telegramSvg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    languages: [sqflang,extlang]
  },
  locales: {
    root: {
      label: "Русский",
      lang: "ru",
      title: "ArmaWiki",
      titleTemplate: ":title • ArmaWiki",
      description:
        "Вики по языку SQF",
      themeConfig: {
        search: {
          options: {
            translations: {
              button: {
                buttonText: "Искать",
                buttonAriaLabel: "Искать",
              },
              modal: {
                displayDetails: "Показать детали",
                resetButtonTitle: "Сброс",
                backButtonTitle: "Назад",
                noResultsText: "Ничего не найдено по запросу",
                footer: {
                  selectText: "Открыть",
                  selectKeyAriaLabel: "Открыть",
                  navigateText: "Навигация",
                  navigateUpKeyAriaLabel: "Выше",
                  navigateDownKeyAriaLabel: "Ниже",
                  closeText: "Закрыть",
                  closeKeyAriaLabel: "Закрыть",
                },
              },
            },
          },
        },
        lastUpdated: {
          text: "Обновлено",
        },
        outline: {
          label: "На этой странице",
        },
        docFooter: {
          prev: "Предыдущая страница",
          next: "Следующая страница",
        },
        darkModeSwitchLabel: "Тема",
        lightModeSwitchTitle: "Переключиться на светлую тему",
        darkModeSwitchTitle: "Переключиться на тёмную тему",
        sidebarMenuLabel: "Меню",
        returnToTopLabel: "Наверх",
        langMenuLabel: "Сменить язык",
        nav: [
//          { text: "Как использовать", link: "/reasons" },
//          { text: "Поддержать", link: "/support" },
//          { text: "Авторы", link: "/authors" },
        ],
        sidebar: [
          {
            text: "О проекте",
            items: [
              { text: "Зачем", link: "/reasons" },
            ],
          },
          {
            text: "Структура миссии",
            collapsed: false,
            items: [
              { text: "Где расположен код", link: "/structure/where-code" },
              { text: "Скрипты по событиям", link: "/structure/event-scripts" },
              { text: "Description.ext", link: "/structure/description" },
            ],
          },
          {
            text: "Основы",
            collapsed: false,
            items: [
              { text: "Типы переменных", link: "/basics/vars" },
              { text: "Сетевые переменные", link: "/basics/network-vars" },
            ],
          },
          {
            text: "Запаковка миссии",
            collapsed: false,
            items: [
              { text: "Подготовка", link: "/mission-package/prepare" },
            ],
          },
        ],
      },
    }
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#1d63ed" },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#1d63ed" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  srcDir: "./src",
  outDir: "./dist",
  appearance: "dark",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "ArmaWiki",
    search: {
      provider: "local",
      detailedView: true,
    },
    logo: {
      light: "",
      dark: "",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/gru2007/kotwiki" },
//      { icon: { svg: telegramSvg }, link: "https://t.me/hueckerio" },
    ],
  },
});
