import { ref } from 'vue'

export const displayedText = ref('')

export const typeText = (text: string) => {
  return new Promise<void>((resolve) => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        displayedText.value += text[currentIndex]
        currentIndex++
      } else {
        clearInterval(interval)
        resolve()
      }
    }, 100)
  })
}

export const deleteText = () => {
  return new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (displayedText.value.length > 0) {
        displayedText.value = displayedText.value.slice(0, -1)
      } else {
        clearInterval(interval)
        resolve()
      }
    }, 100)
  })
}

export const startTyping = async (texts: string[]) => {
  const status = ref(true)
  while (status) {
    for (let i = 0; i < texts.length; i++) {
      await typeText(texts[i])
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Delay before deleting text
      await deleteText()
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Delay before typing next text
    }
  }
}

export const useTyping = (texts: string[]) => {
  startTyping(texts)
}
