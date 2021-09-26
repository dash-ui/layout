import type { DashThemeNames, Styles } from "@dash-ui/styles";
/**
 * Creates new atomic layout style utilities using an existing Dash `styles` instance.
 *
 * @param baseStyles - An `styles` instance from `@dash-ui/styles`
 * @param mediaQueries - The media queries to use for responsive styles
 */
declare function layout<
  Tokens extends {
    gap: any;
    pad: any;
    borderWidth: any;
    shadow: any;
    radius: any;
    color: any;
    zIndex: any;
  },
  MQ extends Record<string, string>
>(
  baseStyles: Styles<Tokens, DashThemeNames>,
  mediaQueries?: MQ
): {
  /**
   * Sets a `align-items` CSS property on your component
   */
  readonly alignItems: import("@dash-ui/responsive").ResponsiveStyle<
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "stretch"
    | "center"
    | "end"
    | "start"
    | "baseline"
    | "normal",
    Tokens,
    MQ
  >;
  /**
   * Sets a `justify-items` CSS property on your component
   */
  readonly justifyItems: import("@dash-ui/responsive").ResponsiveStyle<
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "stretch"
    | "center"
    | "end"
    | "start"
    | "baseline"
    | "normal",
    Tokens,
    MQ
  >;
  /**
   * Sets a `justify-content` CSS property on your component
   */
  readonly justifyContent: import("@dash-ui/responsive").ResponsiveStyle<
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "stretch"
    | "center"
    | "end"
    | "start"
    | "baseline"
    | "normal"
    | "around"
    | "between"
    | "evenly",
    Tokens,
    MQ
  >;
  /**
   * Sets a `align-content` CSS property on your component
   */
  readonly alignContent: import("@dash-ui/responsive").ResponsiveStyle<
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "stretch"
    | "center"
    | "end"
    | "start"
    | "baseline"
    | "normal"
    | "around"
    | "between"
    | "evenly",
    Tokens,
    MQ
  >;
  /**
   * Sets a `align-self` CSS property on your component
   */
  readonly alignSelf: import("@dash-ui/responsive").ResponsiveStyle<
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "auto"
    | "stretch"
    | "center"
    | "end"
    | "start"
    | "baseline"
    | "normal",
    Tokens,
    MQ
  >;
  /**
   * Sets a `justify-self` CSS property on your component
   */
  readonly justifySelf: import("@dash-ui/responsive").ResponsiveStyle<
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "auto"
    | "stretch"
    | "center"
    | "end"
    | "start"
    | "baseline"
    | "normal"
    | "around"
    | "between"
    | "evenly",
    Tokens,
    MQ
  >;
  /**
   * A layout style for adding size, padding, position, color, and more
   * using tokens from your CSS variable theme.
   *
   * @example
   * <div className={box({size: 300, bg: {sm: 'red', md: 'blue'}})} />
   */
  readonly box: ((
    compoundMap?:
      | {
          readonly display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          readonly bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          readonly border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          readonly shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          readonly radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          readonly inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          readonly z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
    }) => string;
    atomicCss: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
    }) => string[];
    styles: {
      /**
       * Sets a `display` CSS property on your component
       */
      readonly display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      /**
       * Sets a `position` CSS property on your component
       */
      readonly position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      /**
       * Sets a `width` CSS property on your component
       */
      readonly width: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `height` CSS property on your component
       */
      readonly height: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      readonly size: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      readonly pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      readonly bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token
       */
      readonly border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      readonly shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      readonly radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      readonly inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `z-index` CSS property on your component
       */
      readonly z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
    };
  };
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
  readonly cluster: ((
    compoundMap?:
      | {
          readonly display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          readonly bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          readonly border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          readonly shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          readonly radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          readonly inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          readonly z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
          readonly default?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly gap?:
            | Extract<keyof Tokens["gap"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["gap"], string | number>,
                MQ
              >
            | undefined;
          readonly distribute?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly align?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["gap"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
    }) => string;
    atomicCss: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["gap"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
    }) => string[];
    styles: {
      /**
       * Sets a `display` CSS property on your component
       */
      readonly display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      /**
       * Sets a `position` CSS property on your component
       */
      readonly position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      /**
       * Sets a `width` CSS property on your component
       */
      readonly width: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `height` CSS property on your component
       */
      readonly height: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      readonly size: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      readonly pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      readonly bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token
       */
      readonly border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      readonly shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      readonly radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      readonly inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `z-index` CSS property on your component
       */
      readonly z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
      readonly default: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Sets a vertical and horizontal gap between the child elements in the
       * cluster using the "gap" token in your theme
       */
      readonly gap: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["gap"], string | number>,
        MQ
      >;
      /**
       * Distributed alignment properties on the x-axis using `justify-content`
       */
      readonly distribute: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Positional alignment for its child items on the y-axis using `align-items`
       */
      readonly align: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
    };
  };
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
  readonly column: ((
    compoundMap?:
      | {
          readonly display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          readonly bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          readonly border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          readonly shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          readonly radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          readonly inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          readonly z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
          readonly default?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly gap?:
            | Extract<keyof Tokens["gap"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["gap"], string | number>,
                MQ
              >
            | undefined;
          readonly distribute?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly align?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["gap"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
    }) => string;
    atomicCss: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["gap"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
    }) => string[];
    styles: {
      /**
       * Sets a `display` CSS property on your component
       */
      readonly display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      /**
       * Sets a `position` CSS property on your component
       */
      readonly position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      /**
       * Sets a `width` CSS property on your component
       */
      readonly width: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `height` CSS property on your component
       */
      readonly height: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      readonly size: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      readonly pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      readonly bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token
       */
      readonly border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      readonly shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      readonly radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      readonly inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `z-index` CSS property on your component
       */
      readonly z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
      readonly default: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Sets a vertical gap between the child elements in the cluster using the "gap"
       * token in your theme
       */
      readonly gap: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["gap"], string | number>,
        MQ
      >;
      /**
       * Distributed alignment properties on the y-axis using `justify-content`
       */
      readonly distribute: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Positional alignment for its child items on the y-axis using `align-items`
       */
      readonly align: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
    };
  };
  /**
   * A layout style that can add positioning properties to itself inside
   * of a flex container.
   *
   * @example
   * <div className={flexItem({alignSelf: 'center', order: 2})}/>
   */
  readonly flexItem: ((
    compoundMap?:
      | {
          display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
          align?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                auto?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "auto"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  auto?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          basis?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          distribute?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                auto?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "auto"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  auto?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          grow?:
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<number | boolean, MQ>
            | undefined;
          order?:
            | number
            | import("@dash-ui/responsive").Responsive<number, MQ>
            | undefined;
          shrink?:
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<number | boolean, MQ>
            | undefined;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      basis?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      grow?:
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<number | boolean, MQ>
        | undefined;
      order?:
        | number
        | import("@dash-ui/responsive").Responsive<number, MQ>
        | undefined;
      shrink?:
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<number | boolean, MQ>
        | undefined;
    }) => string;
    atomicCss: (compoundMap: {
      display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      basis?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      grow?:
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<number | boolean, MQ>
        | undefined;
      order?:
        | number
        | import("@dash-ui/responsive").Responsive<number, MQ>
        | undefined;
      shrink?:
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<number | boolean, MQ>
        | undefined;
    }) => string[];
    styles: {
      display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      width: import("@dash-ui/responsive").ResponsiveLazy<string | number, MQ>;
      height: import("@dash-ui/responsive").ResponsiveLazy<string | number, MQ>;
      maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      size: import("@dash-ui/responsive").ResponsiveLazy<string | number, MQ>;
      pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
      /**
       * Sets a `align-self` CSS property on your component
       */
      align: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
      /**
       * Sets a `justify-self` CSS property on your component
       */
      basis: import("@dash-ui/responsive").ResponsiveLazy<string | number, MQ>;
      /**
       * Sets a `justify-self` CSS property on your component
       */
      distribute: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Sets a `flex-grow` CSS property on your component
       */
      grow: import("@dash-ui/responsive").ResponsiveLazy<number | boolean, MQ>;
      /**
       * Sets a `order` CSS property on your component
       */
      order: import("@dash-ui/responsive").ResponsiveLazy<number, MQ>;
      /**
       * Sets a `flex-shrink` CSS property on your component
       */
      shrink: import("@dash-ui/responsive").ResponsiveLazy<
        number | boolean,
        MQ
      >;
    };
  };
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
  readonly grid: ((
    compoundMap?:
      | {
          readonly display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          readonly bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          readonly border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          readonly shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          readonly radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          readonly inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          readonly z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
          readonly default?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly inline?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly alignX?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly alignY?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly distributeX?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly distributeY?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly gap?:
            | Extract<keyof Tokens["gap"], string | number>
            | [
                Extract<keyof Tokens["gap"], string | number>,
                Extract<keyof Tokens["gap"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["gap"], string | number>
                | [
                    Extract<keyof Tokens["gap"], string | number>,
                    Extract<keyof Tokens["gap"], string | number>
                  ],
                MQ
              >
            | undefined;
          readonly rows?:
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                number | (string | number)[],
                MQ
              >
            | undefined;
          readonly cols?:
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                number | (string | number)[],
                MQ
              >
            | undefined;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly inline?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly alignX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly alignY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | [
            Extract<keyof Tokens["gap"], string | number>,
            Extract<keyof Tokens["gap"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["gap"], string | number>
            | [
                Extract<keyof Tokens["gap"], string | number>,
                Extract<keyof Tokens["gap"], string | number>
              ],
            MQ
          >
        | undefined;
      readonly rows?:
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            number | (string | number)[],
            MQ
          >
        | undefined;
      readonly cols?:
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            number | (string | number)[],
            MQ
          >
        | undefined;
    }) => string;
    atomicCss: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly inline?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly alignX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly alignY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | [
            Extract<keyof Tokens["gap"], string | number>,
            Extract<keyof Tokens["gap"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["gap"], string | number>
            | [
                Extract<keyof Tokens["gap"], string | number>,
                Extract<keyof Tokens["gap"], string | number>
              ],
            MQ
          >
        | undefined;
      readonly rows?:
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            number | (string | number)[],
            MQ
          >
        | undefined;
      readonly cols?:
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            number | (string | number)[],
            MQ
          >
        | undefined;
    }) => string[];
    styles: {
      /**
       * Sets a `display` CSS property on your component
       */
      readonly display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      /**
       * Sets a `position` CSS property on your component
       */
      readonly position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      /**
       * Sets a `width` CSS property on your component
       */
      readonly width: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `height` CSS property on your component
       */
      readonly height: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      readonly size: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      readonly pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      readonly bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token
       */
      readonly border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      readonly shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      readonly radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      readonly inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `z-index` CSS property on your component
       */
      readonly z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
      readonly default: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Makes the component display as an `inline-grid` rather than `grid`
       */
      readonly inline: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Sets a `justify-items` CSS property on your component
       */
      readonly alignX: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
      /**
       * Sets an `align-items` CSS property on your component
       */
      readonly alignY: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
      /**
       * Sets a `justify-content` CSS property on your component
       */
      readonly distributeX: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Sets an `align-content` CSS property on your component
       */
      readonly distributeY: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Sets a horizontal and vertical gap between the child elements in the row
       * using the "gap" token in your theme
       */
      readonly gap: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["gap"], string | number>
        | [
            Extract<keyof Tokens["gap"], string | number>,
            Extract<keyof Tokens["gap"], string | number>
          ],
        MQ
      >;
      /**
       * Sets a `grid-template-rows` CSS property on your component
       */
      readonly rows: import("@dash-ui/responsive").ResponsiveLazy<
        number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `grid-template-columns` CSS property on your component
       */
      readonly cols: import("@dash-ui/responsive").ResponsiveLazy<
        number | (string | number)[],
        MQ
      >;
    };
  };
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
  readonly gridItem: ((
    compoundMap?:
      | {
          readonly display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          readonly bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          readonly border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          readonly shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          readonly radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          readonly inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          readonly z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
          readonly distribute?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                auto?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "auto"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  auto?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly align?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                auto?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "auto"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  auto?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly colStart?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly colEnd?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly rowStart?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly rowEnd?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly colStart?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly colEnd?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly rowStart?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly rowEnd?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
    }) => string;
    atomicCss: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            auto?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "auto"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              auto?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly colStart?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly colEnd?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly rowStart?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly rowEnd?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
    }) => string[];
    styles: {
      /**
       * Sets a `display` CSS property on your component
       */
      readonly display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      /**
       * Sets a `position` CSS property on your component
       */
      readonly position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      /**
       * Sets a `width` CSS property on your component
       */
      readonly width: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `height` CSS property on your component
       */
      readonly height: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      readonly size: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      readonly pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      readonly bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token
       */
      readonly border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      readonly shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      readonly radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      readonly inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `z-index` CSS property on your component
       */
      readonly z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
      /**
       * Sets a `justify-self` CSS property on your component
       */
      readonly distribute: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Sets an `align-self` CSS property on your component
       */
      readonly align: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "auto"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
      /**
       * Sets a `grid-column-start` CSS property on your component
       */
      readonly colStart: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `grid-column-end` CSS property on your component
       */
      readonly colEnd: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `grid-row-start` CSS property on your component
       */
      readonly rowStart: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `grid-row-end` CSS property on your component
       */
      readonly rowEnd: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
    };
  };
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
  readonly autoGrid: ((
    compoundMap?:
      | {
          readonly default?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly inline?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly alignX?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly alignY?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly distributeX?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly distributeY?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly gap?:
            | Extract<keyof Tokens["gap"], string | number>
            | [
                Extract<keyof Tokens["gap"], string | number>,
                Extract<keyof Tokens["gap"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["gap"], string | number>
                | [
                    Extract<keyof Tokens["gap"], string | number>,
                    Extract<keyof Tokens["gap"], string | number>
                  ],
                MQ
              >
            | undefined;
          readonly rows?:
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                number | (string | number)[],
                MQ
              >
            | undefined;
          readonly itemWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly inline?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly alignX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly alignY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | [
            Extract<keyof Tokens["gap"], string | number>,
            Extract<keyof Tokens["gap"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["gap"], string | number>
            | [
                Extract<keyof Tokens["gap"], string | number>,
                Extract<keyof Tokens["gap"], string | number>
              ],
            MQ
          >
        | undefined;
      readonly rows?:
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            number | (string | number)[],
            MQ
          >
        | undefined;
      readonly itemWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
    }) => string;
    atomicCss: (compoundMap: {
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly inline?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly alignX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly alignY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeX?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly distributeY?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | [
            Extract<keyof Tokens["gap"], string | number>,
            Extract<keyof Tokens["gap"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["gap"], string | number>
            | [
                Extract<keyof Tokens["gap"], string | number>,
                Extract<keyof Tokens["gap"], string | number>
              ],
            MQ
          >
        | undefined;
      readonly rows?:
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            number | (string | number)[],
            MQ
          >
        | undefined;
      readonly itemWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
    }) => string[];
    styles: {
      readonly default: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Makes the component display as an `inline-grid` rather than `grid`
       */
      readonly inline: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Sets a `justify-items` CSS property on your component
       */
      readonly alignX: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
      /**
       * Sets an `align-items` CSS property on your component
       */
      readonly alignY: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
      /**
       * Sets a `justify-content` CSS property on your component
       */
      readonly distributeX: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Sets an `align-content` CSS property on your component
       */
      readonly distributeY: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Sets a horizontal and vertical gap between the child elements in the row
       * using the "gap" token in your theme
       */
      readonly gap: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["gap"], string | number>
        | [
            Extract<keyof Tokens["gap"], string | number>,
            Extract<keyof Tokens["gap"], string | number>
          ],
        MQ
      >;
      /**
       * Sets a `grid-template-rows` CSS property on your component
       */
      readonly rows: import("@dash-ui/responsive").ResponsiveLazy<
        number | (string | number)[],
        MQ
      >;
      /**
       * The minimum width of a grid item
       */
      readonly itemWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
    };
  };
  /**
   * A layout style than positions itself absolutely inside of its
   * container in whichever placement you decide.
   *
   * @example
   * <div className={layer({placement: 'bottomRight', offset: 24})} />
   */
  readonly layer: ((
    compoundMap?:
      | {
          readonly display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          readonly bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          readonly border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          readonly shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          readonly radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          readonly inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          readonly z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
          readonly default?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly offset?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly placement?:
            | "center"
            | "left"
            | "right"
            | "bottom"
            | "top"
            | "topLeft"
            | "topRight"
            | "bottomRight"
            | "bottomLeft"
            | import("@dash-ui/responsive").Responsive<
                | "center"
                | "left"
                | "right"
                | "bottom"
                | "top"
                | "topLeft"
                | "topRight"
                | "bottomRight"
                | "bottomLeft",
                MQ
              >
            | undefined;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly offset?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly placement?:
        | "center"
        | "left"
        | "right"
        | "bottom"
        | "top"
        | "topLeft"
        | "topRight"
        | "bottomRight"
        | "bottomLeft"
        | import("@dash-ui/responsive").Responsive<
            | "center"
            | "left"
            | "right"
            | "bottom"
            | "top"
            | "topLeft"
            | "topRight"
            | "bottomRight"
            | "bottomLeft",
            MQ
          >
        | undefined;
    }) => string;
    atomicCss: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly offset?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly placement?:
        | "center"
        | "left"
        | "right"
        | "bottom"
        | "top"
        | "topLeft"
        | "topRight"
        | "bottomRight"
        | "bottomLeft"
        | import("@dash-ui/responsive").Responsive<
            | "center"
            | "left"
            | "right"
            | "bottom"
            | "top"
            | "topLeft"
            | "topRight"
            | "bottomRight"
            | "bottomLeft",
            MQ
          >
        | undefined;
    }) => string[];
    styles: {
      /**
       * Sets a `display` CSS property on your component
       */
      readonly display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      /**
       * Sets a `position` CSS property on your component
       */
      readonly position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      /**
       * Sets a `width` CSS property on your component
       */
      readonly width: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `height` CSS property on your component
       */
      readonly height: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      readonly size: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      readonly pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      readonly bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token
       */
      readonly border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      readonly shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      readonly radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      readonly inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `z-index` CSS property on your component
       */
      readonly z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
      readonly default: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Sets a `margin` between the edges of the layer item's container
       */
      readonly offset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets the placement of your layer item relative to its container
       */
      readonly placement: import("@dash-ui/responsive").ResponsiveLazy<
        | "center"
        | "left"
        | "right"
        | "bottom"
        | "top"
        | "topLeft"
        | "topRight"
        | "bottomRight"
        | "bottomLeft",
        MQ
      >;
    };
  };
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
  readonly row: ((
    compoundMap?:
      | {
          readonly display?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                none?: string | number | boolean | null | undefined;
                contents?: string | number | boolean | null | undefined;
                block?: string | number | boolean | null | undefined;
                inline?: string | number | boolean | null | undefined;
                flex?: string | number | boolean | null | undefined;
                grid?: string | number | boolean | null | undefined;
                table?: string | number | boolean | null | undefined;
                inlineFlex?: string | number | boolean | null | undefined;
                inlineGrid?: string | number | boolean | null | undefined;
                inlineBlock?: string | number | boolean | null | undefined;
                tableCell?: string | number | boolean | null | undefined;
                tableRowGroup?: string | number | boolean | null | undefined;
                tableRow?: string | number | boolean | null | undefined;
                tableColumn?: string | number | boolean | null | undefined;
                tableColumnGroup?: string | number | boolean | null | undefined;
                tableHeader?: string | number | boolean | null | undefined;
                tableHeaderGroup?: string | number | boolean | null | undefined;
                tableFooterGroup?: string | number | boolean | null | undefined;
                listItem?: string | number | boolean | null | undefined;
                runIn?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "none"
                | "contents"
                | "block"
                | "inline"
                | "flex"
                | "grid"
                | "table"
                | import("@dash-ui/styles").Falsy
                | "inlineFlex"
                | "inlineGrid"
                | "inlineBlock"
                | "tableCell"
                | "tableRowGroup"
                | "tableRow"
                | "tableColumn"
                | "tableColumnGroup"
                | "tableHeader"
                | "tableHeaderGroup"
                | "tableFooterGroup"
                | "listItem"
                | "runIn",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  none?: string | number | boolean | null | undefined;
                  contents?: string | number | boolean | null | undefined;
                  block?: string | number | boolean | null | undefined;
                  inline?: string | number | boolean | null | undefined;
                  flex?: string | number | boolean | null | undefined;
                  grid?: string | number | boolean | null | undefined;
                  table?: string | number | boolean | null | undefined;
                  inlineFlex?: string | number | boolean | null | undefined;
                  inlineGrid?: string | number | boolean | null | undefined;
                  inlineBlock?: string | number | boolean | null | undefined;
                  tableCell?: string | number | boolean | null | undefined;
                  tableRowGroup?: string | number | boolean | null | undefined;
                  tableRow?: string | number | boolean | null | undefined;
                  tableColumn?: string | number | boolean | null | undefined;
                  tableColumnGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableHeader?: string | number | boolean | null | undefined;
                  tableHeaderGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  tableFooterGroup?:
                    | string
                    | number
                    | boolean
                    | null
                    | undefined;
                  listItem?: string | number | boolean | null | undefined;
                  runIn?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly position?:
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy
            | {
                fixed?: string | number | boolean | null | undefined;
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                absolute?: string | number | boolean | null | undefined;
                relative?: string | number | boolean | null | undefined;
                static?: string | number | boolean | null | undefined;
                sticky?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "fixed"
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "absolute"
                | "relative"
                | "static"
                | "sticky"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  fixed?: string | number | boolean | null | undefined;
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  absolute?: string | number | boolean | null | undefined;
                  relative?: string | number | boolean | null | undefined;
                  static?: string | number | boolean | null | undefined;
                  sticky?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly width?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly height?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly maxHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minWidth?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly minHeight?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly size?:
            | string
            | number
            | import("@dash-ui/responsive").Responsive<string | number, MQ>
            | undefined;
          readonly pad?:
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["pad"], string | number>
                | Extract<keyof Tokens["pad"], string | number>[],
                MQ
              >
            | undefined;
          readonly bg?:
            | Extract<keyof Tokens["color"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["color"], string | number>,
                MQ
              >
            | undefined;
          readonly border?:
            | [
                (
                  | Extract<keyof Tokens["borderWidth"], string | number>
                  | Extract<keyof Tokens["borderWidth"], string | number>[]
                ),
                Extract<keyof Tokens["color"], string | number>
              ]
            | import("@dash-ui/responsive").Responsive<
                [
                  (
                    | Extract<keyof Tokens["borderWidth"], string | number>
                    | Extract<keyof Tokens["borderWidth"], string | number>[]
                  ),
                  Extract<keyof Tokens["color"], string | number>
                ],
                MQ
              >
            | undefined;
          readonly shadow?:
            | Extract<keyof Tokens["shadow"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["shadow"], string | number>,
                MQ
              >
            | undefined;
          readonly radius?:
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[]
            | import("@dash-ui/responsive").Responsive<
                | Extract<keyof Tokens["radius"], string | number>
                | Extract<keyof Tokens["radius"], string | number>[],
                MQ
              >
            | undefined;
          readonly inset?:
            | string
            | number
            | (string | number)[]
            | import("@dash-ui/responsive").Responsive<
                string | number | (string | number)[],
                MQ
              >
            | undefined;
          readonly z?:
            | number
            | Extract<keyof Tokens["zIndex"], string | number>
            | import("@dash-ui/responsive").Responsive<
                number | Extract<keyof Tokens["zIndex"], string | number>,
                MQ
              >
            | undefined;
          readonly default?:
            | string
            | number
            | boolean
            | import("@dash-ui/responsive").Responsive<
                string | number | boolean | null,
                MQ
              >
            | null
            | undefined;
          readonly gap?:
            | Extract<keyof Tokens["gap"], string | number>
            | import("@dash-ui/responsive").Responsive<
                Extract<keyof Tokens["gap"], string | number>,
                MQ
              >
            | undefined;
          readonly distribute?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly"
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
                around?: string | number | boolean | null | undefined;
                between?: string | number | boolean | null | undefined;
                evenly?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy
                | "around"
                | "between"
                | "evenly",
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                  around?: string | number | boolean | null | undefined;
                  between?: string | number | boolean | null | undefined;
                  evenly?: string | number | boolean | null | undefined;
                },
                MQ
              >;
          readonly align?:
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | {
                inherit?: string | number | boolean | null | undefined;
                initial?: string | number | boolean | null | undefined;
                revert?: string | number | boolean | null | undefined;
                unset?: string | number | boolean | null | undefined;
                stretch?: string | number | boolean | null | undefined;
                center?: string | number | boolean | null | undefined;
                end?: string | number | boolean | null | undefined;
                start?: string | number | boolean | null | undefined;
                baseline?: string | number | boolean | null | undefined;
                normal?: string | number | boolean | null | undefined;
              }
            | import("@dash-ui/responsive").Responsive<
                | "inherit"
                | "initial"
                | "revert"
                | "unset"
                | "stretch"
                | "center"
                | "end"
                | "start"
                | "baseline"
                | "normal"
                | import("@dash-ui/styles").Falsy,
                MQ
              >
            | import("@dash-ui/responsive").Responsive<
                {
                  inherit?: string | number | boolean | null | undefined;
                  initial?: string | number | boolean | null | undefined;
                  revert?: string | number | boolean | null | undefined;
                  unset?: string | number | boolean | null | undefined;
                  stretch?: string | number | boolean | null | undefined;
                  center?: string | number | boolean | null | undefined;
                  end?: string | number | boolean | null | undefined;
                  start?: string | number | boolean | null | undefined;
                  baseline?: string | number | boolean | null | undefined;
                  normal?: string | number | boolean | null | undefined;
                },
                MQ
              >;
        }
      | undefined,
    compoundOptions?:
      | import("@dash-ui/compound").CompoundStylesOptions
      | undefined
  ) => string) & {
    css: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["gap"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
    }) => string;
    atomicCss: (compoundMap: {
      readonly display?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | import("@dash-ui/styles").Falsy
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            none?: string | number | boolean | null | undefined;
            contents?: string | number | boolean | null | undefined;
            block?: string | number | boolean | null | undefined;
            inline?: string | number | boolean | null | undefined;
            flex?: string | number | boolean | null | undefined;
            grid?: string | number | boolean | null | undefined;
            table?: string | number | boolean | null | undefined;
            inlineFlex?: string | number | boolean | null | undefined;
            inlineGrid?: string | number | boolean | null | undefined;
            inlineBlock?: string | number | boolean | null | undefined;
            tableCell?: string | number | boolean | null | undefined;
            tableRowGroup?: string | number | boolean | null | undefined;
            tableRow?: string | number | boolean | null | undefined;
            tableColumn?: string | number | boolean | null | undefined;
            tableColumnGroup?: string | number | boolean | null | undefined;
            tableHeader?: string | number | boolean | null | undefined;
            tableHeaderGroup?: string | number | boolean | null | undefined;
            tableFooterGroup?: string | number | boolean | null | undefined;
            listItem?: string | number | boolean | null | undefined;
            runIn?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "none"
            | "contents"
            | "block"
            | "inline"
            | "flex"
            | "grid"
            | "table"
            | import("@dash-ui/styles").Falsy
            | "inlineFlex"
            | "inlineGrid"
            | "inlineBlock"
            | "tableCell"
            | "tableRowGroup"
            | "tableRow"
            | "tableColumn"
            | "tableColumnGroup"
            | "tableHeader"
            | "tableHeaderGroup"
            | "tableFooterGroup"
            | "listItem"
            | "runIn",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              none?: string | number | boolean | null | undefined;
              contents?: string | number | boolean | null | undefined;
              block?: string | number | boolean | null | undefined;
              inline?: string | number | boolean | null | undefined;
              flex?: string | number | boolean | null | undefined;
              grid?: string | number | boolean | null | undefined;
              table?: string | number | boolean | null | undefined;
              inlineFlex?: string | number | boolean | null | undefined;
              inlineGrid?: string | number | boolean | null | undefined;
              inlineBlock?: string | number | boolean | null | undefined;
              tableCell?: string | number | boolean | null | undefined;
              tableRowGroup?: string | number | boolean | null | undefined;
              tableRow?: string | number | boolean | null | undefined;
              tableColumn?: string | number | boolean | null | undefined;
              tableColumnGroup?: string | number | boolean | null | undefined;
              tableHeader?: string | number | boolean | null | undefined;
              tableHeaderGroup?: string | number | boolean | null | undefined;
              tableFooterGroup?: string | number | boolean | null | undefined;
              listItem?: string | number | boolean | null | undefined;
              runIn?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly position?:
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky"
        | import("@dash-ui/styles").Falsy
        | {
            fixed?: string | number | boolean | null | undefined;
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            absolute?: string | number | boolean | null | undefined;
            relative?: string | number | boolean | null | undefined;
            static?: string | number | boolean | null | undefined;
            sticky?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "fixed"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "absolute"
            | "relative"
            | "static"
            | "sticky"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              fixed?: string | number | boolean | null | undefined;
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              absolute?: string | number | boolean | null | undefined;
              relative?: string | number | boolean | null | undefined;
              static?: string | number | boolean | null | undefined;
              sticky?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly width?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly height?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly maxHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minWidth?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly minHeight?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly size?:
        | string
        | number
        | import("@dash-ui/responsive").Responsive<string | number, MQ>
        | undefined;
      readonly pad?:
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["pad"], string | number>
            | Extract<keyof Tokens["pad"], string | number>[],
            MQ
          >
        | undefined;
      readonly bg?:
        | Extract<keyof Tokens["color"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["color"], string | number>,
            MQ
          >
        | undefined;
      readonly border?:
        | [
            (
              | Extract<keyof Tokens["borderWidth"], string | number>
              | Extract<keyof Tokens["borderWidth"], string | number>[]
            ),
            Extract<keyof Tokens["color"], string | number>
          ]
        | import("@dash-ui/responsive").Responsive<
            [
              (
                | Extract<keyof Tokens["borderWidth"], string | number>
                | Extract<keyof Tokens["borderWidth"], string | number>[]
              ),
              Extract<keyof Tokens["color"], string | number>
            ],
            MQ
          >
        | undefined;
      readonly shadow?:
        | Extract<keyof Tokens["shadow"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["shadow"], string | number>,
            MQ
          >
        | undefined;
      readonly radius?:
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[]
        | import("@dash-ui/responsive").Responsive<
            | Extract<keyof Tokens["radius"], string | number>
            | Extract<keyof Tokens["radius"], string | number>[],
            MQ
          >
        | undefined;
      readonly inset?:
        | string
        | number
        | (string | number)[]
        | import("@dash-ui/responsive").Responsive<
            string | number | (string | number)[],
            MQ
          >
        | undefined;
      readonly z?:
        | number
        | Extract<keyof Tokens["zIndex"], string | number>
        | import("@dash-ui/responsive").Responsive<
            number | Extract<keyof Tokens["zIndex"], string | number>,
            MQ
          >
        | undefined;
      readonly default?:
        | string
        | number
        | boolean
        | import("@dash-ui/responsive").Responsive<
            string | number | boolean | null,
            MQ
          >
        | null
        | undefined;
      readonly gap?:
        | Extract<keyof Tokens["gap"], string | number>
        | import("@dash-ui/responsive").Responsive<
            Extract<keyof Tokens["gap"], string | number>,
            MQ
          >
        | undefined;
      readonly distribute?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | "around"
        | "between"
        | "evenly"
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
            around?: string | number | boolean | null | undefined;
            between?: string | number | boolean | null | undefined;
            evenly?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy
            | "around"
            | "between"
            | "evenly",
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
              around?: string | number | boolean | null | undefined;
              between?: string | number | boolean | null | undefined;
              evenly?: string | number | boolean | null | undefined;
            },
            MQ
          >;
      readonly align?:
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | import("@dash-ui/styles").Falsy
        | {
            inherit?: string | number | boolean | null | undefined;
            initial?: string | number | boolean | null | undefined;
            revert?: string | number | boolean | null | undefined;
            unset?: string | number | boolean | null | undefined;
            stretch?: string | number | boolean | null | undefined;
            center?: string | number | boolean | null | undefined;
            end?: string | number | boolean | null | undefined;
            start?: string | number | boolean | null | undefined;
            baseline?: string | number | boolean | null | undefined;
            normal?: string | number | boolean | null | undefined;
          }
        | import("@dash-ui/responsive").Responsive<
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "stretch"
            | "center"
            | "end"
            | "start"
            | "baseline"
            | "normal"
            | import("@dash-ui/styles").Falsy,
            MQ
          >
        | import("@dash-ui/responsive").Responsive<
            {
              inherit?: string | number | boolean | null | undefined;
              initial?: string | number | boolean | null | undefined;
              revert?: string | number | boolean | null | undefined;
              unset?: string | number | boolean | null | undefined;
              stretch?: string | number | boolean | null | undefined;
              center?: string | number | boolean | null | undefined;
              end?: string | number | boolean | null | undefined;
              start?: string | number | boolean | null | undefined;
              baseline?: string | number | boolean | null | undefined;
              normal?: string | number | boolean | null | undefined;
            },
            MQ
          >;
    }) => string[];
    styles: {
      /**
       * Sets a `display` CSS property on your component
       */
      readonly display: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "none"
        | "contents"
        | "block"
        | "inline"
        | "flex"
        | "grid"
        | "table"
        | "inlineFlex"
        | "inlineGrid"
        | "inlineBlock"
        | "tableCell"
        | "tableRowGroup"
        | "tableRow"
        | "tableColumn"
        | "tableColumnGroup"
        | "tableHeader"
        | "tableHeaderGroup"
        | "tableFooterGroup"
        | "listItem"
        | "runIn",
        Tokens,
        MQ
      >;
      /**
       * Sets a `position` CSS property on your component
       */
      readonly position: import("@dash-ui/responsive").ResponsiveStyle<
        | "fixed"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "absolute"
        | "relative"
        | "static"
        | "sticky",
        Tokens,
        MQ
      >;
      /**
       * Sets a `width` CSS property on your component
       */
      readonly width: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `height` CSS property on your component
       */
      readonly height: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly maxWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly maxHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-width` CSS property on your component
       */
      readonly minWidth: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `max-height` CSS property on your component
       */
      readonly minHeight: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `width` and `height` CSS property on your component
       */
      readonly size: import("@dash-ui/responsive").ResponsiveLazy<
        string | number,
        MQ
      >;
      /**
       * Sets a `padding` CSS property on your component using the "pad"
       * token in your theme
       */
      readonly pad: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["pad"], string | number>
        | Extract<keyof Tokens["pad"], string | number>[],
        MQ
      >;
      /**
       * Sets a `background-color` CSS property on your component using the "color"
       * token in your theme
       */
      readonly bg: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["color"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-color` CSS property on your component using the "color"
       * token in your theme and a `border-width` property using the "borderWidth"
       * token
       */
      readonly border: import("@dash-ui/responsive").ResponsiveLazy<
        [
          (
            | Extract<keyof Tokens["borderWidth"], string | number>
            | Extract<keyof Tokens["borderWidth"], string | number>[]
          ),
          Extract<keyof Tokens["color"], string | number>
        ],
        MQ
      >;
      /**
       * Sets a `box-shadow` CSS property on your component using the "shadow"
       * token in your theme
       */
      readonly shadow: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["shadow"], string | number>,
        MQ
      >;
      /**
       * Sets a `border-radius` CSS property on your component using the "radius"
       * token in your theme
       */
      readonly radius: import("@dash-ui/responsive").ResponsiveLazy<
        | Extract<keyof Tokens["radius"], string | number>
        | Extract<keyof Tokens["radius"], string | number>[],
        MQ
      >;
      /**
       * Sets the top, right, bottom, left position of the element
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inset
       */
      readonly inset: import("@dash-ui/responsive").ResponsiveLazy<
        string | number | (string | number)[],
        MQ
      >;
      /**
       * Sets a `z-index` CSS property on your component
       */
      readonly z: import("@dash-ui/responsive").ResponsiveLazy<
        number | Extract<keyof Tokens["zIndex"], string | number>,
        MQ
      >;
      readonly default: import("@dash-ui/responsive").ResponsiveOne<MQ>;
      /**
       * Sets a horizontal gap between the child elements in the cluster using the "gap"
       * token in your theme
       */
      readonly gap: import("@dash-ui/responsive").ResponsiveLazy<
        Extract<keyof Tokens["gap"], string | number>,
        MQ
      >;
      /**
       * Distributed alignment properties on the y-axis using `justify-content`
       */
      readonly distribute: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal"
        | "around"
        | "between"
        | "evenly",
        Tokens,
        MQ
      >;
      /**
       * Positional alignment for its child items on the x-axis using `align-items`
       */
      readonly align: import("@dash-ui/responsive").ResponsiveStyle<
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "stretch"
        | "center"
        | "end"
        | "start"
        | "baseline"
        | "normal",
        Tokens,
        MQ
      >;
    };
  };
};
export default layout;
