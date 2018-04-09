import _ from 'lodash'

export const fonts = {
  raleway: { fontFamily: 'Raleway, sans-serif' },
  lora: { fontFamily: 'Lora, serif' }
}

export const colors = {
  white: '#fff',
  black: '#000'
}

export const branding = {
  primary: colors.tomato,
  secondary: colors.darkslategray
}

export const typography = {
  body: { fontSize: '14px' },
  p: { fontSize: '1rem' },
  lead: { fontSize: '1.4rem', lineHeight: '2rem' },
  h1: { fontSize: '3.8rem' },
  h2: { fontSize: '2.4rem' },
  h3: { fontSize: '1.6rem' },
  h4: { fontSize: '1.6rem' },
  h5: { fontSize: '1.6rem' },
  h6: { fontSize: '1.6rem' }
}

export const backgrounds = {
  white: {
    color: '#000', background: colors.white
  },
  black: {
    color: '#FFF', background: colors.black
  }
}

export const breakpoints = {
  'sm': '576px',
  'md': '768px',
  'lg': '992px',
  'xl': '1200px'
}

export const mediaQueryBelow = (breakpoint, rules) => {
  const point = _.get(breakpoints, '.' + breakpoint, '768px')
  const query = {}
  query['@media (max-width: ' + point + ')'] = {...rules}
  return query
}

export const mediaQueryAbove = (breakpoint, rules) => {
  const point = _.get(breakpoints, '.' + breakpoint, '768px')
  const query = {}
  query['@media (min-width: ' + point + ')'] = {...rules}
  return query
}
