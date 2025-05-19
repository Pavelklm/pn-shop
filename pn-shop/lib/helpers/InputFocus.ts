export const handleInputFocus = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
) => {
  if (!e.target.value) {
    e.target.classList.remove('placeholder')
  }
}

export const handleInputBlur = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
) => {
  if (e.target.value) {
    e.target.classList.remove('placeholder')
  }
  if (!e.target.value) {
    e.target.classList.add('placeholder')
  }
}
