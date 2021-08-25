import {createStyles} from '@dash-ui/styles'
import layout from './index'

describe('box()', () => {
  it('applies the "display" prop', () => {
    expect(createElement(layoutStyles.box({display: 'block'}))).toHaveStyleRule(
      'display',
      'block'
    )
  })

  it('applies the "position" prop', () => {
    expect(
      createElement(layoutStyles.box({position: 'relative'}))
    ).toHaveStyleRule('position', 'relative')
  })

  it('applies the "width" prop', () => {
    expect(createElement(layoutStyles.box({width: '100%'}))).toHaveStyleRule(
      'width',
      '100%'
    )
  })

  it('applies the "width" prop w/ px default', () => {
    expect(createElement(layoutStyles.box({width: 100}))).toHaveStyleRule(
      'width',
      '100px'
    )
  })

  it('applies the "height" prop', () => {
    expect(createElement(layoutStyles.box({height: '100%'}))).toHaveStyleRule(
      'height',
      '100%'
    )
  })

  it('applies the "height" prop w/ px default', () => {
    expect(createElement(layoutStyles.box({height: 100}))).toHaveStyleRule(
      'height',
      '100px'
    )
  })

  it('applies the "size" prop', () => {
    const element = createElement(layoutStyles.box({size: '100%'}))
    expect(element).toHaveStyleRule('width', '100%')
    expect(element).toHaveStyleRule('height', '100%')
  })

  it('applies the "size" prop w/ px default', () => {
    const element = createElement(layoutStyles.box({size: 100}))
    expect(element).toHaveStyleRule('width', '100px')
    expect(element).toHaveStyleRule('height', '100px')
  })

  it('applies the "max-width" prop', () => {
    expect(createElement(layoutStyles.box({maxWidth: '100%'}))).toHaveStyleRule(
      'max-width',
      '100%'
    )
  })

  it('applies the "max-width" prop w/ px default', () => {
    expect(createElement(layoutStyles.box({maxWidth: 100}))).toHaveStyleRule(
      'max-width',
      '100px'
    )
  })

  it('applies the "max-height" prop', () => {
    expect(
      createElement(layoutStyles.box({maxHeight: '100%'}))
    ).toHaveStyleRule('max-height', '100%')
  })

  it('applies the "max-height" prop w/ px default', () => {
    expect(createElement(layoutStyles.box({maxHeight: 100}))).toHaveStyleRule(
      'max-height',
      '100px'
    )
  })

  it('applies the "border" prop w/ px default', () => {
    const element = createElement(
      layoutStyles.box({border: [['hairline', 'hairline'], 'green']})
    )

    expect(element).toHaveStyleRule(
      'border-width',
      'var(--border-width-hairline) var(--border-width-hairline)'
    )
    expect(element).toHaveStyleRule('border-style', 'solid')
    expect(element).toHaveStyleRule('border-color', 'var(--color-green)')
  })

  it('applies the "border" prop w/ array', () => {
    const element = createElement(
      layoutStyles.box({border: ['hairline', 'green']})
    )

    expect(element).toHaveStyleRule(
      'border-width',
      'var(--border-width-hairline)'
    )
    expect(element).toHaveStyleRule('border-style', 'solid')
    expect(element).toHaveStyleRule('border-color', 'var(--color-green)')
  })

  it('applies the "bg" prop', () => {
    expect(createElement(layoutStyles.box({bg: 'green'}))).toHaveStyleRule(
      'background-color',
      'var(--color-green)'
    )
  })

  it('applies the "pad" prop', () => {
    expect(createElement(layoutStyles.box({pad: 1}))).toHaveStyleRule(
      'padding',
      'var(--pad-1)'
    )
  })

  it('applies the "pad" prop w/ array', () => {
    expect(createElement(layoutStyles.box({pad: [0, 'auto']}))).toHaveStyleRule(
      'padding',
      'var(--pad-0) var(--pad-auto)'
    )
  })

  it('applies the "z" prop w/ number', () => {
    expect(createElement(layoutStyles.box({z: 1}))).toHaveStyleRule(
      'z-index',
      '1'
    )
  })

  it('applies the "z" prop w/ token', () => {
    expect(createElement(layoutStyles.box({z: 'min'}))).toHaveStyleRule(
      'z-index',
      'var(--z-index-min)'
    )
  })

  it('applies the "inset" prop w/ number', () => {
    const element = createElement(layoutStyles.box({inset: 1}))
    expect(element).toHaveStyleRule('inset', '1px', {
      supports: '(inset: 10px)',
    })
    expect(element).toHaveStyleRule('top', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('right', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('bottom', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('left', '1px', {
      supports: 'not (inset: 10px)',
    })
  })

  it('applies the "inset" prop w/ array', () => {
    const element = createElement(layoutStyles.box({inset: [1]}))
    expect(element).toHaveStyleRule('inset', '1px', {
      supports: '(inset: 10px)',
    })
    expect(element).toHaveStyleRule('top', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('right', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('bottom', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('left', '1px', {
      supports: 'not (inset: 10px)',
    })
  })

  it('applies the "inset" prop w/ array len 2', () => {
    const element = createElement(layoutStyles.box({inset: [1, 2]}))
    expect(element).toHaveStyleRule('inset', '1px 2px', {
      supports: '(inset: 10px)',
    })
    expect(element).toHaveStyleRule('top', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('right', '2px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('bottom', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('left', '2px', {
      supports: 'not (inset: 10px)',
    })
  })

  it('applies the "inset" prop w/ array len 3', () => {
    const element = createElement(layoutStyles.box({inset: [1, 2, 3]}))
    expect(element).toHaveStyleRule('inset', '1px 2px 3px', {
      supports: '(inset: 10px)',
    })
    expect(element).toHaveStyleRule('top', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('right', '2px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('bottom', '3px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('left', '2px', {
      supports: 'not (inset: 10px)',
    })
  })

  it('applies the "inset" prop w/ array len 4', () => {
    const element = createElement(layoutStyles.box({inset: [1, 2, 3, 4]}))
    expect(element).toHaveStyleRule('inset', '1px 2px 3px 4px', {
      supports: '(inset: 10px)',
    })
    expect(element).toHaveStyleRule('top', '1px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('right', '2px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('bottom', '3px', {
      supports: 'not (inset: 10px)',
    })
    expect(element).toHaveStyleRule('left', '4px', {
      supports: 'not (inset: 10px)',
    })
  })

  it('applies the "radius" prop', () => {
    const element = createElement(layoutStyles.box({radius: 'sm'}))
    expect(element).toHaveStyleRule('border-radius', 'var(--radius-sm)')
  })

  it('applies the "radius" prop w/ array', () => {
    const element = createElement(layoutStyles.box({radius: ['sm', 'md']}))
    expect(element).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm) var(--radius-md)'
    )
  })

  it('applies the "shadow" prop', () => {
    const element = createElement(layoutStyles.box({shadow: 'low'}))
    expect(element).toHaveStyleRule('box-shadow', 'var(--shadow-low)')
  })

  it('applies responsive styles', () => {
    const element = createElement(
      responsiveLayoutStyles.box({
        width: {phone: 100, tablet: 200},
      })
    )
    expect(element).toHaveStyleRule('width', '100px', {
      media: mediaQueries.phone,
    })
    expect(element).toHaveStyleRule('width', '200px', {
      media: mediaQueries.tablet,
    })
  })
})

describe('row()', () => {
  it('applies default styles', () => {
    const element = createElement(layoutStyles.row())
    expect(element).toHaveStyleRule('display', 'flex')
    expect(element).toHaveStyleRule('flex-direction', 'row')
    expect(element).toHaveStyleRule('flex-shrink', '0', {
      target: '>*',
    })
  })

  it('applies the "gap" prop', () => {
    const element = createElement(layoutStyles.row({gap: 1}))
    expect(element).toHaveStyleRule('gap', 'var(--gap-1)', {
      supports: '(display: flex) and (gap: 1em)',
    })
    expect(element).toHaveStyleRule('margin-left', 'var(--gap-1)!important', {
      target: '>* + *',
      supports: 'not (display: flex) and (gap: 1em)',
    })
  })

  it('applies the "align" prop', () => {
    const element = createElement(layoutStyles.row({align: 'center'}))
    expect(element).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distribute" prop', () => {
    const element = createElement(layoutStyles.row({distribute: 'center'}))
    expect(element).toHaveStyleRule('justify-content', 'center')
  })
})

describe('column()', () => {
  it('applies default styles', () => {
    const element = createElement(layoutStyles.column())
    expect(element).toHaveStyleRule('display', 'flex')
    expect(element).toHaveStyleRule('flex-direction', 'column')
    expect(element).toHaveStyleRule('flex-shrink', '0', {
      target: '>*',
    })
  })

  it('applies the "gap" prop', () => {
    const element = createElement(layoutStyles.column({gap: 1}))
    expect(element).toHaveStyleRule('gap', 'var(--gap-1)', {
      supports: '(display: flex) and (gap: 1em)',
    })
    expect(element).toHaveStyleRule('margin-top', 'var(--gap-1)!important', {
      target: '>* + *',
      supports: 'not (display: flex) and (gap: 1em)',
    })
  })

  it('applies the "align" prop', () => {
    const element = createElement(layoutStyles.column({align: 'center'}))
    expect(element).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distribute" prop', () => {
    const element = createElement(layoutStyles.column({distribute: 'center'}))
    expect(element).toHaveStyleRule('justify-content', 'center')
  })
})

describe('cluster()', () => {
  it('applies default styles', () => {
    const element = createElement(layoutStyles.cluster())
    expect(element).toHaveStyleRule('display', 'flex')
    expect(element).toHaveStyleRule('flex-wrap', 'wrap')
    expect(element).toHaveStyleRule('justify-content', 'flex-start')
    expect(element).toHaveStyleRule('flex-shrink', '0', {
      target: '>*',
    })
  })

  it('applies the "gap" prop', () => {
    const element = createElement(layoutStyles.cluster({gap: 1}))
    expect(element).toHaveStyleRule('gap', 'var(--gap-1)', {
      supports: '(display: flex) and (gap: 1em)',
    })
    expect(element).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))!important',
      {
        supports: 'not (display: flex) and (gap: 1em)',
      }
    )
    expect(element).toHaveStyleRule(
      'margin-top',
      'calc(-1 * var(--gap-1))!important',
      {
        supports: 'not (display: flex) and (gap: 1em)',
      }
    )
    expect(element).toHaveStyleRule('margin-top', 'var(--gap-1)!important', {
      target: '>*',
      supports: 'not (display: flex) and (gap: 1em)',
    })
    expect(element).toHaveStyleRule('margin-left', 'var(--gap-1)!important', {
      target: '>*',
      supports: 'not (display: flex) and (gap: 1em)',
    })
  })

  it('applies the "align" prop', () => {
    const element = createElement(layoutStyles.cluster({align: 'center'}))
    expect(element).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distribute" prop', () => {
    const element = createElement(layoutStyles.cluster({distribute: 'center'}))
    expect(element).toHaveStyleRule('justify-content', 'center')
  })
})

describe('layer()', () => {
  it('applies default styles for each position', () => {
    const placements = [
      'center',
      'topLeft',
      'top',
      'topRight',
      'right',
      'bottomRight',
      'bottom',
      'bottomLeft',
      'left',
    ]
    for (const placement of placements) {
      const element = layoutStyles.layer.css({placement: placement as any})
      expect(element).toMatchSnapshot(placement)
    }
  })

  it('applies styles with offsets for each position', () => {
    const placements = [
      'topLeft',
      'top',
      'topRight',
      'right',
      'bottomRight',
      'bottom',
      'bottomLeft',
      'left',
    ]
    for (const placement of placements) {
      const element = layoutStyles.layer.css({
        placement: placement as any,
        offset: 10,
      })
      expect(element).toMatchSnapshot(placement)
    }
  })
})

describe('grid()', () => {
  it('applies default styles', () => {
    const element = createElement(layoutStyles.grid())
    expect(element).toHaveStyleRule('display', 'grid')
  })

  it('applies the "inline" prop', () => {
    const element = createElement(layoutStyles.grid({inline: true}))
    expect(element).toHaveStyleRule('display', 'inline-grid')
  })

  it('applies the "cols" prop w/ specific sizes', () => {
    const element = createElement(
      layoutStyles.grid({cols: [100, 'auto', '3rem']})
    )
    expect(element).toHaveStyleRule('grid-template-columns', '100px auto 3rem')
  })

  it('applies the "cols" prop w/ fixed number and size', () => {
    const element = createElement(layoutStyles.grid({cols: 3}))
    expect(element).toHaveStyleRule(
      'grid-template-columns',
      'repeat(3,minmax(0,1fr))'
    )
  })

  it('applies the "rows" prop w/ specific sizes', () => {
    const element = createElement(
      layoutStyles.grid({rows: [100, 'auto', '3rem']})
    )
    expect(element).toHaveStyleRule('grid-template-rows', '100px auto 3rem')
  })

  it('applies the "rows" prop w/ fixed number and size', () => {
    const element = createElement(layoutStyles.grid({rows: 3}))
    expect(element).toHaveStyleRule(
      'grid-template-rows',
      'repeat(3,minmax(0,1fr))'
    )
  })

  it('applies the "gap" prop w/ single value', () => {
    const element = createElement(layoutStyles.grid({gap: 1}))
    expect(element).toHaveStyleRule('grid-gap', 'var(--gap-1) var(--gap-1)')
    expect(element).toHaveStyleRule('gap', 'var(--gap-1) var(--gap-1)')
  })

  it('applies the "gap" prop w/ array value', () => {
    const element = createElement(layoutStyles.grid({gap: [1, 2]}))
    expect(element).toHaveStyleRule('grid-gap', 'var(--gap-1) var(--gap-2)')
    expect(element).toHaveStyleRule('gap', 'var(--gap-1) var(--gap-2)')
  })

  it('applies the "alignX" prop', () => {
    const element = createElement(layoutStyles.grid({alignX: 'center'}))
    expect(element).toHaveStyleRule('justify-items', 'center')
  })

  it('applies the "alignY" prop', () => {
    const element = createElement(layoutStyles.grid({alignY: 'center'}))
    expect(element).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distributeX" prop', () => {
    const element = createElement(layoutStyles.grid({distributeX: 'center'}))
    expect(element).toHaveStyleRule('justify-content', 'center')
  })

  it('applies the "distributeY" prop', () => {
    const element = createElement(layoutStyles.grid({distributeY: 'center'}))
    expect(element).toHaveStyleRule('align-content', 'center')
  })
})

describe('gridItem()', () => {
  it('applies the "colStart" prop', () => {
    const element = createElement(layoutStyles.gridItem({colStart: '1'}))
    expect(element).toHaveStyleRule('grid-column-start', '1')
  })

  it('applies the "colEnd" prop', () => {
    const element = createElement(layoutStyles.gridItem({colEnd: '1'}))
    expect(element).toHaveStyleRule('grid-column-end', '1')
  })

  it('applies the "rowStart" prop', () => {
    const element = createElement(layoutStyles.gridItem({rowStart: '1'}))
    expect(element).toHaveStyleRule('grid-row-start', '1')
  })

  it('applies the "rowEnd" prop', () => {
    const element = createElement(layoutStyles.gridItem({rowEnd: '1'}))
    expect(element).toHaveStyleRule('grid-row-end', '1')
  })

  it('applies the "alignX" prop', () => {
    const element = createElement(layoutStyles.gridItem({distribute: 'center'}))
    expect(element).toHaveStyleRule('justify-self', 'center')
  })

  it('applies the "alignY" prop', () => {
    const element = createElement(layoutStyles.gridItem({align: 'center'}))
    expect(element).toHaveStyleRule('align-self', 'center')
  })
})

describe('autoGrid()', () => {
  it('applies the "itemWidth" prop w/ number', () => {
    const element = createElement(layoutStyles.autoGrid({itemWidth: 200}))
    expect(element).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit, minmax(200px, 1fr))'
    )
  })

  it('applies the "itemWidth" prop w/ string', () => {
    const element = createElement(layoutStyles.autoGrid({itemWidth: '100%'}))
    expect(element).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit, minmax(100%, 1fr))'
    )
  })
})

describe('flexItem()', () => {
  it('applies the "align" prop', () => {
    const element = createElement(layoutStyles.flexItem({align: 'center'}))
    expect(element).toHaveStyleRule('align-self', 'center')
  })

  it('applies the "distribute" prop', () => {
    const element = createElement(layoutStyles.flexItem({distribute: 'center'}))
    expect(element).toHaveStyleRule('justify-self', 'center')
  })

  it('applies the "basis" prop', () => {
    const element = createElement(layoutStyles.flexItem({basis: 100}))
    expect(element).toHaveStyleRule('flex-basis', '100px')
  })

  it('applies the "grow" prop', () => {
    const element = createElement(layoutStyles.flexItem({grow: 100}))
    expect(element).toHaveStyleRule('flex-grow', '100')
  })

  it('applies the "grow" prop w/ boolean', () => {
    const element = createElement(layoutStyles.flexItem({grow: true}))
    expect(element).toHaveStyleRule('flex-grow', '1')
  })

  it('applies the "shrink" prop', () => {
    const element = createElement(layoutStyles.flexItem({shrink: 100}))
    expect(element).toHaveStyleRule('flex-shrink', '100')
  })

  it('applies the "shrink" prop w/ boolean', () => {
    const element = createElement(layoutStyles.flexItem({shrink: true}))
    expect(element).toHaveStyleRule('flex-shrink', '1')
  })

  it('applies the "order" prop', () => {
    const element = createElement(layoutStyles.flexItem({order: 1}))
    expect(element).toHaveStyleRule('order', '1')
  })
})

const styles = createStyles({
  tokens: {
    gap: {
      auto: 'auto',
      0: 0,
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '2rem',
      5: '4rem',
    },
    pad: {
      auto: 'auto',
      0: 0,
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '1rem',
      5: '2rem',
      6: '4rem',
    },
    color: {
      blue: 'blue',
      green: 'green',
    },
    shadow: {
      low: 'low',
      high: 'high',
    },
    radius: {
      sm: '0.125rem',
      md: '0.25rem',
    },
    borderWidth: {
      hairline: '0.5px',
    },
    zIndex: {
      min: -1,
    },
  },
})

const mediaQueries = {
  phone: 'only screen and (min-width: 0em)',
  tablet: 'only screen and (min-width: 35em)',
  desktop: 'only screen and (min-width: 80em)',
} as const
const layoutStyles = layout(styles)
const responsiveLayoutStyles = layout(styles, mediaQueries)

function createElement(className: string) {
  const element = document.createElement('div')
  element.classList.add(className)
  return element
}

afterEach(() => {
  styles.dash.sheet.flush()
  styles.dash.inserted.clear()
})
