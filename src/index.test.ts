import {createStyles} from '@dash-ui/styles'
import responsive from '@dash-ui/responsive'
import layout from './index'

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
    expect(true).toBe(true)
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
    expect(true).toBe(true)
  })
})
