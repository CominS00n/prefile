import { createI18n } from 'vue-i18n'

import English from './language/en.json' // Importing the English language file
import Thai from './language/th.json' // Importing the Thai language file

const messages = {
  en: English,
  th: Thai
}

export default createI18n({
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false
})
