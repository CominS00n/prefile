import { ref } from "vue"

export default function configweb() {
    const isSettings = ref(false)
    const navBar = ref(true)

    const toggleNavBar = () => {
        navBar.value = !navBar.value
    }

    const toggleSettings = () => {
        isSettings.value = !isSettings.value
    }

    return {
        navBar,
        toggleNavBar,
        isSettings,
        toggleSettings
    }

}