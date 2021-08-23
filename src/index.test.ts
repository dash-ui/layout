import {createStyles} from '@dash-ui/styles'
import responsive from '@dash-ui/responsive'
import layout from './index'

afterEach(() => {
  document.getElementsByTagName('html')[0].innerHTML = ''
})

describe('layout', () => {
  it('should pass', () => {
    const styles = createStyles({
      tokens: {
        gap: {
          sm: 4,
          md: 8,
        },
        pad: {
          sm: 4,
        },
        borderWidth: {
          sm: 1,
        },
        shadow: {
          sm: '0 0 0 0',
        },
        radius: {
          sm: 4,
        },
        color: {
          green: 'green',
        },
        zIndex: {min: 0},
      },
    })

    const layoutStyles = layout(styles)
    layoutStyles.row({gap: 'sm'})
    expect(document.querySelectorAll(`style[data-dash]`).length).toBe(5)
    expect(document.querySelectorAll(`style[data-dash]`)[0]).toMatchSnapshot(
      'DOM'
    )
    expect(document.querySelectorAll(`style[data-dash]`)[1]).toMatchSnapshot(
      'DOM'
    )
    expect(document.querySelectorAll(`style[data-dash]`)[2]).toMatchSnapshot(
      'DOM'
    )
    expect(document.querySelectorAll(`style[data-dash]`)[3]).toMatchSnapshot(
      'DOM'
    )
    expect(document.querySelectorAll(`style[data-dash]`)[4]).toMatchSnapshot(
      'DOM'
    )
  })

  it('should also pass', () => {
    const styles = createStyles({
      tokens: {
        gap: {
          sm: 4,
          md: 8,
        },
        pad: {
          sm: 4,
        },
        borderWidth: {
          sm: 1,
        },
        shadow: {
          sm: '0 0 0 0',
        },
        radius: {
          sm: 4,
        },
        color: {
          green: 'green',
        },
        zIndex: {min: 0},
      },
    })
    const responsiveStyles = responsive(styles, {
      sm: 'only screen and (min-width: 1em)',
    })

    const layoutStyles = layout(responsiveStyles)
    layoutStyles.row({gap: {sm: 'sm'}})
    expect(document.querySelectorAll(`style[data-dash]`).length).toBe(4)
    expect(document.querySelectorAll(`style[data-dash]`)[0]).toMatchSnapshot(
      'DOM'
    )
    expect(document.querySelectorAll(`style[data-dash]`)[1]).toMatchSnapshot(
      'DOM'
    )
    expect(document.querySelectorAll(`style[data-dash]`)[2]).toMatchSnapshot(
      'DOM'
    )
    expect(document.querySelectorAll(`style[data-dash]`)[3]).toMatchSnapshot(
      'DOM'
    )
  })
})
