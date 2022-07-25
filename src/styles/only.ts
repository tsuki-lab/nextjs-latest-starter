import { css } from '@emotion/react'
import { pc, sp, tb } from './media-query'

export const onlySpStyle = css`
  ${tb} {
    display: none !important;
  }
  ${pc} {
    display: none !important;
  }
`

export const onlyTbStyle = css`
  ${sp} {
    display: none !important;
  }
  ${pc} {
    display: none !important;
  }
`

export const onlyPcStyle = css`
  ${sp} {
    display: none !important;
  }
  ${tb} {
    display: none !important;
  }
`

export const onlyNotSpStyle = css`
  ${sp} {
    display: none !important;
  }
`

export const onlyNotPcStyle = css`
  ${pc} {
    display: none !important;
  }
`
