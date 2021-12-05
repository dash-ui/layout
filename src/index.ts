import compound from "@dash-ui/compound";
import type { ResponsiveStyles } from "@dash-ui/responsive";
import responsive from "@dash-ui/responsive";
import type {
  DashThemes,
  DashTokens,
  StyleObject,
  Styles,
} from "@dash-ui/styles";

/**
 * Creates new atomic layout style utilities using an existing Dash `styles` instance.
 *
 * @param baseStyles - An `styles` instance from `@dash-ui/styles`
 * @param mediaQueries - The media queries to use for responsive styles
 */
function layout<
  Tokens extends
    | DashTokens
    | {
        gap: any;
        pad: any;
        borderWidth: any;
        shadow: any;
        radius: any;
        color: any;
        zIndex: any;
      },
  Themes extends DashThemes,
  MQ extends Record<string, string>
>(baseStyles: Styles<Tokens, Themes>, mediaQueries?: MQ) {
  const compoundStyles = compound(baseStyles);
  const styles: ResponsiveStyles<Tokens, Themes, MQ> = responsive(
    baseStyles,
    mediaQueries || {}
  );

  const box = compoundStyles(
    {
      /**
       * Sets a `display` CSS property on your component
       */
      display: styles.variants({
        flex: { display: "flex" },
        inlineFlex: { display: "inline-flex" },
        grid: { display: "grid" },
        inlineGrid: { display: "inlineGrid" },
        block: { display: "block" },
        inlineBlock: { display: "inline-block" },
        inline: { display: "inline" },
        table: { display: "table" },
        tableCell: { display: "table-cell" },
        tableRowGroup: { display: "table-row-group" },
        tableRow: { display: "table-row" },
        tableColumn: { display: "table-column" },
        tableColumnGroup: { display: "table-column-group" },
        tableHeader: { display: "table-header" },
        tableHeaderGroup: { display: "table-header-group" },
        tableFooterGroup: { display: "table-footer-group" },
        listItem: { display: "list-item" },
        contents: { display: "contents" },
        runIn: { display: "run-in" },
        none: { display: "none" },
        inherit: { display: "inherit" },
        initial: { display: "initial" },
        unset: { display: "unset" },
        revert: { display: "revert" },
      }),
      /**
       * Sets a `position` CSS property on your component
       */
      position: styles.variants({
        absolute: { position: "absolute" },
        relative: { position: "relative" },
        fixed: { position: "fixed" },
        sticky: { position: "sticky" },
        static: { position: "static" },
        inherit: { position: "inherit" },
        initial: { position: "initial" },
        unset: { position: "unset" },
        revert: { position: "revert" },
      }),
      /**
       * Sets a `width` CSS property on your component
       */
      width: styles.lazy((width: number | string) => ({ width })),
      /**
       * Sets a `height` CSS property on your component
       */
      height: styles.lazy((height: number | string) => ({ height })),
      /**
       * Sets a `max-width` CSS property on your component
       */
      maxWidth: styles.lazy((maxWidth: number | string) => ({ maxWidth })),
      /**
       * Sets a `max-height` CSS property on your component
       */
      maxHeight: styles.lazy((maxHeight: number | string) => ({
        maxHeight,
      })),
      /**
       * Sets a `max-width` CSS property on your component
       */
      minWidth: styles.lazy((minWidth: number | string) => ({ minWidth })),
      /**
       * Sets a `max-height` CSS property on your component
       */
      minHeight: styles.lazy((minHeight: number | string) => ({
        minHeight,
      })),
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      size: styles.lazy((size: number | string) => ({
        width: size,
        height: size,
      })),
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      pad: styles.lazy(
        (
            value:
              | Extract<keyof Tokens["pad"], string | number>
              | Extract<keyof Tokens["pad"], string | number>[]
          ) =>
          ({ pad }) => ({
            padding: Array.isArray(value)
              ? value.map((k) => pad[k]).join(" ")
              : pad[value],
          })
      ),
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      bg: styles.variants(
        reduce(
          baseStyles.tokens.color as Record<
            Extract<keyof Tokens["color"], string | number>,
            string | number
          >,
          (
            acc: Record<
              Extract<keyof Tokens["color"], string | number> | "default",
              StyleObject
            >,
            key
          ) => {
            acc[key] = {
              backgroundColor: baseStyles.tokens.color[key],
            };

            return acc;
          },
          {}
        )
      ),
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token.
       */
      border: styles.lazy(
        ([width, borderColor]: [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]) =>
          ({ borderWidth, color }) => ({
            borderWidth: Array.isArray(width)
              ? width.map((w) => borderWidth[w]).join(" ")
              : borderWidth[width],
            borderStyle: "solid",
            borderColor: color[borderColor],
          })
      ),
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      shadow: styles.variants(
        reduce(
          baseStyles.tokens.shadow as Record<
            Extract<keyof Tokens["shadow"], string | number>,
            string
          >,
          (
            acc: Record<
              Extract<keyof Tokens["shadow"], string | number> | "default",
              StyleObject
            >,
            key
          ) => {
            acc[key] = {
              boxShadow: baseStyles.tokens.shadow[key],
            };

            return acc;
          },
          {}
        )
      ),
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      radius: styles.lazy(
        (
            value:
              | Extract<keyof Tokens["radius"], string | number>
              | Extract<keyof Tokens["radius"], string | number>[]
          ) =>
          ({ radius }) => ({
            borderRadius: Array.isArray(value)
              ? value.map((k) => radius[k]).join(" ")
              : radius[value],
          })
      ),
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      inset: styles.lazy((value: string | number | (string | number)[]) => {
        if (Array.isArray(value)) {
          return {
            "@supports (inset: 10px)": {
              inset: value.map(unit).join(" "),
            },
            "@supports not (inset: 10px)": {
              top: value[0],
              right: value[1] ?? value[0],
              bottom: value[2] ?? value[0],
              left: value[3] ?? value[1] ?? value[0],
            },
          };
        }

        return {
          "@supports (inset: 10px)": {
            inset: value,
          },
          "@supports not (inset: 10px)": {
            top: value,
            right: value,
            bottom: value,
            left: value,
          },
        };
      }),
      /**
       * Sets a `z-index` CSS property on your component
       */
      z: styles.variants(
        reduce(
          baseStyles.tokens.zIndex as Record<
            Extract<keyof Tokens["zIndex"], string | number>,
            string | number
          >,
          (
            acc: Record<
              Extract<keyof Tokens["zIndex"], string | number> | "default",
              StyleObject
            >,
            key
          ) => {
            acc[key] = {
              zIndex: baseStyles.tokens.zIndex[key],
            };

            return acc;
          },
          {}
        )
      ),
    } as const,
    { atomic: true }
  );

  const alignItems = styles.variants({
    start: {
      "@supports (align-items: start)": {
        alignItems: "start",
      },
      "@supports not (align-items: start)": {
        alignItems: "flex-start",
      },
    },
    end: {
      "@supports (align-items: end)": {
        alignItems: "end",
      },
      "@supports not (align-items: end)": {
        alignItems: "flex-end",
      },
    },
    center: { alignItems: "center" },
    baseline: { alignItems: "baseline" },
    stretch: { alignItems: "stretch" },
    normal: { alignItems: "normal" },
    inherit: { alignItems: "inherit" },
    initial: { alignItems: "initial" },
    unset: { alignItems: "unset" },
    revert: { alignItems: "revert" },
  } as const);

  const justifyItems = styles.variants({
    start: {
      "@supports (justify-items: start)": {
        justifyItems: "start",
      },
      "@supports not (justify-items: start)": {
        justifyItems: "flex-start",
      },
    },
    end: {
      "@supports (justify-items: end)": {
        justifyItems: "end",
      },
      "@supports not (justify-items: end)": {
        justifyItems: "flex-end",
      },
    },
    center: { justifyItems: "center" },
    baseline: { justifyItems: "baseline" },
    stretch: { justifyItems: "stretch" },
    normal: { justifyItems: "normal" },
    inherit: { justifyItems: "inherit" },
    initial: { justifyItems: "initial" },
    unset: { justifyItems: "unset" },
    revert: { justifyItems: "revert" },
  } as const);

  const justifyContent = styles.variants({
    start: {
      "@supports (justify-content: start)": {
        justifyContent: "start",
      },
      "@supports not (justify-content: start)": {
        justifyContent: "flex-start",
      },
    },
    end: {
      "@supports (justify-content: end)": {
        justifyContent: "end",
      },
      "@supports not (justify-content: end)": {
        justifyContent: "flex-end",
      },
    },
    center: { justifyContent: "center" },
    around: { justifyContent: "space-around" },
    between: { justifyContent: "space-between" },
    evenly: { justifyContent: "space-evenly" },
    baseline: { justifyContent: "baseline" },
    stretch: { justifyContent: "stretch" },
    normal: { justifyContent: "normal" },
    inherit: { justifyContent: "inherit" },
    initial: { justifyContent: "initial" },
    unset: { justifyContent: "unset" },
    revert: { justifyContent: "revert" },
  } as const);

  const alignContent = styles.variants({
    start: {
      "@supports (align-content: start)": {
        alignContent: "start",
      },
      "@supports not (align-content: start)": {
        alignContent: "flex-start",
      },
    },
    end: {
      "@supports (align-content: end)": {
        alignContent: "end",
      },
      "@supports not (align-content: end)": {
        alignContent: "flex-end",
      },
    },
    center: { alignContent: "center" },
    around: { alignContent: "space-around" },
    between: { alignContent: "space-between" },
    evenly: { alignContent: "space-evenly" },
    baseline: { alignContent: "baseline" },
    stretch: { alignContent: "stretch" },
    normal: { alignContent: "normal" },
    inherit: { alignContent: "inherit" },
    initial: { alignContent: "initial" },
    unset: { alignContent: "unset" },
    revert: { alignContent: "revert" },
  } as const);

  const alignSelf = styles.variants({
    start: {
      "@supports (align-self: start)": {
        alignSelf: "start",
      },
      "@supports not (align-self: start)": {
        alignSelf: "flex-start",
      },
    },
    end: {
      "@supports (align-self: end)": {
        alignSelf: "end",
      },
      "@supports not (align-self: end)": {
        alignSelf: "flex-end",
      },
    },
    center: { alignSelf: "center" },
    baseline: { alignSelf: "baseline" },
    stretch: { alignSelf: "stretch" },
    auto: { alignSelf: "auto" },
    normal: { alignSelf: "normal" },
    inherit: { alignSelf: "inherit" },
    initial: { alignSelf: "initial" },
    unset: { alignSelf: "unset" },
    revert: { alignSelf: "revert" },
  } as const);

  const justifySelf = styles.variants({
    start: {
      "@supports (justify-self: start)": {
        justifySelf: "start",
      },
      "@supports not (justify-self: start)": {
        justifySelf: "flex-start",
      },
    },
    end: {
      "@supports (justify-self: end)": {
        justifySelf: "end",
      },
      "@supports not (justify-self: end)": {
        justifySelf: "flex-end",
      },
    },
    center: { justifySelf: "center" },
    around: { justifySelf: "space-around" },
    between: { justifySelf: "space-between" },
    evenly: { justifySelf: "space-evenly" },
    baseline: { justifySelf: "baseline" },
    stretch: { justifySelf: "stretch" },
    auto: { justifySelf: "auto" },
    normal: { justifySelf: "normal" },
    inherit: { justifySelf: "inherit" },
    initial: { justifySelf: "initial" },
    unset: { justifySelf: "unset" },
    revert: { justifySelf: "revert" },
  } as const);

  const flexItem = compoundStyles(
    {
      /**
       * Sets a `align-self` CSS property on your component
       */
      align: alignSelf,
      /**
       * Sets a `justify-self` CSS property on your component
       */
      basis: styles.lazy((value: string | number) => ({ flexBasis: value })),
      /**
       * Sets a `justify-self` CSS property on your component
       */
      distribute: justifySelf,
      /**
       * Sets a `flex-grow` CSS property on your component
       */
      grow: styles.lazy((value: number | boolean) => ({
        flexGrow: Number(value),
      })),
      /**
       * Sets a `order` CSS property on your component
       */
      order: styles.lazy((value: number) => ({ order: value })),
      /**
       * Sets a `flex-shrink` CSS property on your component
       */
      shrink: styles.lazy((value: number | boolean) => ({
        flexShrink: Number(value),
      })),
      ...box.styles,
    },
    { atomic: true }
  );

  const cluster = compoundStyles(
    {
      default: styles.one({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        "& > *": {
          flexShrink: 0,
        },
      }),
      /**
       * Sets a vertical and horizontal gap between the child elements in the
       * cluster using the "gap" token in your theme
       */
      gap: styles.variants(
        reduce(
          baseStyles.tokens.gap as Record<
            Extract<keyof Tokens["gap"], string | number>,
            string | number
          >,
          (
            acc: Record<
              Extract<keyof Tokens["gap"], string | number> | "default",
              StyleObject
            >,
            value
          ) => {
            const gap = baseStyles.tokens.gap;

            acc[value] = {
              "@supports (display: flex) and (gap: 1em)": {
                gap: gap[value],
              },
              "@supports not (display: flex) and (gap: 1em)": {
                marginTop: `calc(-1 * ${gap[value]})!important`,
                marginLeft: `calc(-1 * ${gap[value]})!important`,
                "& > *": {
                  marginTop: `${gap[value]}!important`,
                  marginLeft: `${gap[value]}!important`,
                },
              },
            };

            return acc;
          },
          {}
        )
      ),
      /**
       * Distributed alignment properties on the x-axis using `justify-content`
       */
      distribute: justifyContent,
      /**
       * Positional alignment for its child items on the y-axis using `align-items`
       */
      align: alignItems,
      ...box.styles,
    } as const,
    { atomic: true }
  );

  const column = compoundStyles(
    {
      default: styles.one({
        display: "flex",
        flexDirection: "column",
        "& > *": {
          flexShrink: 0,
        },
      }),
      /**
       * Sets a vertical gap between the child elements in the cluster using the "gap"
       * token in your theme
       */
      gap: styles.variants(
        reduce(
          baseStyles.tokens.gap as Record<
            Extract<keyof Tokens["gap"], string | number>,
            string | number
          >,
          (
            acc: Record<
              Extract<keyof Tokens["gap"], string | number> | "default",
              StyleObject
            >,
            value
          ) => {
            const gap = baseStyles.tokens.gap;
            const margin = {
              "& > * + *": {
                marginTop: `${gap[value]}!important`,
              },
            };

            acc[value] = (value + "").startsWith("-")
              ? margin
              : {
                  "@supports (display: flex) and (gap: 1em)": {
                    gap: gap[value],
                  },
                  "@supports not (display: flex) and (gap: 1em)": margin,
                };

            return acc;
          },
          {}
        )
      ),
      /**
       * Distributed alignment properties on the y-axis using `justify-content`
       */
      distribute: justifyContent,
      /**
       * Positional alignment for its child items on the y-axis using `align-items`
       */
      align: alignItems,
      ...box.styles,
    } as const,
    { atomic: true }
  );

  const sharedGrid = compoundStyles(
    {
      default: styles.one({ display: "grid" }),
      /**
       * Makes the component display as an `inline-grid` rather than `grid`
       */
      inline: styles.one({ display: "inline-grid" }),
      /**
       * Sets a `justify-items` CSS property on your component
       */
      alignX: justifyItems,
      /**
       * Sets an `align-items` CSS property on your component
       */
      alignY: alignItems,
      /**
       * Sets a `justify-content` CSS property on your component
       */
      distributeX: justifyContent,
      /**
       * Sets an `align-content` CSS property on your component
       */
      distributeY: alignContent,
      /**
       * Sets a horizontal and vertical gap between the child elements in the row
       * using the "gap" token in your theme
       */
      gap: styles.lazy(
        (
            value:
              | Extract<keyof Tokens["gap"], number | string>
              | [
                  Extract<keyof Tokens["gap"], number | string>,
                  Extract<keyof Tokens["gap"], number | string>
                ]
          ) =>
          ({ gap }) => ({
            gridGap: Array.isArray(value)
              ? value.map((p) => gap[p]).join(" ")
              : gap[value] + " " + gap[value],
            gap: Array.isArray(value)
              ? value.map((p) => gap[p]).join(" ")
              : gap[value] + " " + gap[value],
          })
      ),
      /**
       * Sets a `grid-template-rows` CSS property on your component
       */
      rows: styles.lazy((value: number | (number | string)[]) => {
        let rows: (number | string)[];
        if (Array.isArray(value)) rows = value;
        // ie doesn't have repeat
        else rows = [`repeat(${value},minmax(0,1fr))`];
        return { gridTemplateRows: rows.map((row) => unit(row)).join(" ") };
      }),
    } as const,
    { atomic: true }
  );

  const grid = compoundStyles(
    {
      /**
       * Sets a `grid-template-columns` CSS property on your component
       */
      cols: styles.lazy((value: number | (number | string)[]) => {
        let columns: (number | string)[];
        if (Array.isArray(value)) columns = value;
        // ie doesn't have repeat
        else columns = [`repeat(${value},minmax(0,1fr))`];
        return {
          gridTemplateColumns: columns.map((col) => unit(col)).join(" "),
        };
      }),
      ...sharedGrid.styles,
      ...box.styles,
    } as const,
    { atomic: true }
  );

  const gridItem = compoundStyles(
    {
      /**
       * Sets a `justify-self` CSS property on your component
       */
      distribute: justifySelf,
      /**
       * Sets an `align-self` CSS property on your component
       */
      align: alignSelf,
      /**
       * Sets a `grid-column-start` CSS property on your component
       */
      colStart: styles.lazy((gridColumnStart: number | string) => ({
        gridColumnStart,
      })),
      /**
       * Sets a `grid-column-end` CSS property on your component
       */
      colEnd: styles.lazy((gridColumnEnd: number | string) => ({
        gridColumnEnd,
      })),
      /**
       * Sets a `grid-row-start` CSS property on your component
       */
      rowStart: styles.lazy((gridRowStart: number | string) => ({
        gridRowStart,
      })),
      /**
       * Sets a `grid-row-end` CSS property on your component
       */
      rowEnd: styles.lazy((gridRowEnd: number | string) => ({ gridRowEnd })),
      ...box.styles,
    } as const,
    { atomic: true }
  );

  const autoGrid = compoundStyles(
    {
      /**
       * The minimum width of a grid item
       */
      itemWidth: styles.lazy((itemWidth: number | string) => ({
        gridTemplateColumns: `repeat(auto-fit, minmax(${unit(
          itemWidth
        )}, 1fr))`,
      })),
      ...sharedGrid.styles,
    } as const,
    { atomic: true }
  );

  const layer = compoundStyles(
    {
      default: styles.one({ position: "absolute" }),
      /**
       * Sets a `margin` between the edges of the layer item's container
       */
      offset: styles.lazy((margin: number | string) => ({ margin })),
      /**
       * Sets the placement of your layer item relative to its container
       */
      placement: styles.variants({
        top: { top: 0, left: "50%", transform: "translateX(-50%)" },
        right: { right: 0, top: "50%", transform: "translateY(-50%)" },
        bottom: { bottom: 0, left: "50%", transform: "translateX(-50%)" },
        left: { left: 0, top: "50%", transform: "translateY(-50%)" },
        center: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        topRight: { top: 0, right: 0 },
        topLeft: { top: 0, left: 0 },
        bottomRight: { bottom: 0, right: 0 },
        bottomLeft: { bottom: 0, left: 0 },
      }),
      ...box.styles,
    } as const,
    { atomic: true }
  );

  const row = compoundStyles(
    {
      default: styles.one({
        display: "flex",
        flexDirection: "row",
        "& > *": {
          flexShrink: 0,
        },
      }),
      /**
       * Sets a horizontal gap between the child elements in the cluster using the "gap"
       * token in your theme
       */
      gap: styles.variants(
        reduce(
          baseStyles.tokens.gap as Record<
            Extract<keyof Tokens["gap"], string | number>,
            string | number
          >,
          (
            acc: Record<
              Extract<keyof Tokens["gap"], string | number> | "default",
              StyleObject
            >,
            value
          ) => {
            const gap = baseStyles.tokens.gap;
            const margin = {
              "& > * + *": {
                marginLeft: `${gap[value]}!important`,
              },
            };
            acc[value] = ("" + value).startsWith("-")
              ? margin
              : {
                  "@supports (display: flex) and (gap: 1em)": {
                    gap: gap[value],
                  },
                  "@supports not (display: flex) and (gap: 1em)": margin,
                };

            return acc;
          },
          {}
        )
      ),
      /**
       * Distributed alignment properties on the y-axis using `justify-content`
       */
      distribute: justifyContent,
      /**
       * Positional alignment for its child items on the x-axis using `align-items`
       */
      align: alignItems,
      ...box.styles,
    } as const,
    { atomic: true }
  );

  const bleed = compoundStyles(
    {
      /**
       * Sets a negative margin on itself using the "pad" token in your theme
       */
      amount: styles.lazy(
        (
            value:
              | Extract<keyof Tokens["pad"], string | number>
              | Extract<keyof Tokens["pad"], string | number>[]
          ) =>
          ({ pad }) => ({
            margin: Array.isArray(value)
              ? value
                  .map((k) =>
                    String(k).startsWith("-")
                      ? `${pad[k]}`
                      : `calc(-1 * ${pad[k]})`
                  )
                  .join(" ") + "!important"
              : String(value).startsWith("-")
              ? `${pad[value]}!important`
              : `calc(-1 * ${pad[value]})!important`,
          })
      ),
      ...box.styles,
    } as const,
    { atomic: true }
  );

  return {
    /**
     * Sets a `align-items` CSS property on your component
     */
    alignItems,
    /**
     * Sets a `justify-items` CSS property on your component
     */
    justifyItems,
    /**
     * Sets a `justify-content` CSS property on your component
     */
    justifyContent,
    /**
     * Sets a `align-content` CSS property on your component
     */
    alignContent,
    /**
     * Sets a `align-self` CSS property on your component
     */
    alignSelf,
    /**
     * Sets a `justify-self` CSS property on your component
     */
    justifySelf,

    /**
     * A layout style for adding size, padding, position, color, and more
     * using tokens from your CSS variable theme.
     *
     * @example
     * <div className={box({size: 300, bg: {sm: 'red', md: 'blue'}})} />
     */
    box,
    /**
     * A row directional layout style that distributes its items in a cluster
     * like so:
     *
     * ```
     * ☐☐☐☐☐
     * ☐☐☐☐☐☐
     * ☐☐☐☐☐
     * ☐☐☐
     * ```
     *
     * or
     * ```
     *  ☐☐☐☐☐
     * ☐☐☐☐☐☐
     *  ☐☐☐☐☐
     *    ☐☐☐
     * ```
     *
     * Some use cases include input chips and tags.
     *
     * @example
     * <div className={cluster({gap: 'sm})}>
     *   <Item/>
     *   <Item/>
     * </div>
     */
    cluster,
    /**
     * A layout style that distributes its items in a column without wrapping
     * like so:
     *
     * ```
     * ☐
     * ☐
     * ☐
     * ☐
     * ```
     *
     * @example
     * <div className={column({gap: 'sm'})}>
     *   <Item/>
     *   <Item/>
     * </div>
     */
    column,
    /**
     * A layout style that can add positioning properties to itself inside
     * of a flex container.
     *
     * @example
     * <div className={flexItem({alignSelf: 'center', order: 2})}/>
     */
    flexItem,
    /**
     * A layout style that distributes its children in a grid like so:
     *
     * ```
     * ☐ ☐ ☐
     * ☐ ☐ ☐
     * ☐ ☐ ☐
     * ```
     *
     * @example
     * <div className={grid({rows: 2, cols: 2})}>
     *   <GridItem/>
     *   <GridItem/>
     *   <GridItem/>
     *   <GridItem/>
     * </div>
     */
    grid,
    /**
     * A layout style that can add positioning properties to itself inside
     * of a `<Grid>` component.
     *
     * @example
     * <div className={grid({cols: 2, rows: 2})}>
     *   // Occupies 2 columns
     *   <div className={gridItem({colStart: 1, colEnd: 2})} />
     *   <div/>
     *   <div/>
     * </div>
     */
    gridItem,
    /**
     * A grid that automatically chooses a number of columns based on a preferred
     * minimum grid item width. The items will grow to fit snugly within the grid
     * container, like with flex wrapping, but no item will grow larger than the
     * column size, unlike flex wrapping.
     *
     * ☐ ☐ ☐
     * ☐ ☐ ☐
     * ☐ ☐
     */
    autoGrid,
    /**
     * A layout style than positions itself absolutely inside of its
     * container in whichever placement you decide.
     *
     * @example
     * <div className={layer({placement: 'bottomRight', offset: 24})} />
     */
    layer,
    /**
     * A layout style that distributes its items in a row without wrapping
     * like so:
     *
     * ```
     * ☐ ☐ ☐ ☐ ☐ ☐ ☐
     * ```
     *
     * @example
     * <div className={row({gap: 'sm'})}>
     *   <Item/>
     *   <Item/>
     * </div>
     */
    row,
    /**
     * A layout style that sets a negative left/top margin on itself using
     * the "pad" token in your theme. This is useful for increasing the
     * tap area of a component while maintaining the desired visual padding.
     *
     * @example
     * <div className={bleed({amount: 'sm', pad: 'lg'})}>
     *   <Item/>
     *   <Item/>
     * </div>
     */
    bleed,
  } as const;
}

export default layout;

const keys: <T>(obj: T) => (keyof T)[] = Object.keys;
function reduce<T, U>(
  obj: T,
  fn: (acc: U, key: keyof T, currentIndex: number, arr: (keyof T)[]) => U,
  init: U extends {} ? Partial<U> : U
): U {
  return keys(obj).reduce(fn, init as U);
}

/**
 * Adds a `px` unit to numeric values and returns non-numeric values as
 * they are.
 *
 * @param value - The value you want to maybe add a unit to
 */
function unit<T extends number | string>(value: T) {
  return !isNaN(value as any) && value !== 0 ? `${value}px` : value;
}
