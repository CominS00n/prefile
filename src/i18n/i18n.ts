import { createI18n } from 'vue-i18n'

import English from './language/en.json' // Importing the English language file
import Thai from './language/th.json' // Importing the Thai language file

const messages = {
    English,
    Thai
}

export default createI18n({
    locale: 'English',
    fallbackLocale: 'English',
    messages,
    legacy: false
})