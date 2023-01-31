export const storageKey = 'theme-preference'

export const onClick = () => {
  // flip the current value
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light'
  
  setPreference()
}

export const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

export const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

export const theme = {
  value: getColorPreference(),
}

export const reflectPreference = () => {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)    
}
