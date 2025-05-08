export interface ILang {
  lang: string
  translations: {
    [lang: string]: {
      [keyword: string]: {
        [key: string]: string
      }
    }
  }
}
