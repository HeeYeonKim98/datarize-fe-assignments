/**
 * meta의 타입을 확장하여, `className` 속성 customize
 *
 * Refs:
 * - https://tanstack.com/table/latest/docs/api/core/column-def#meta
 */
export interface CustomColumnMeta {
  className?: string
  thClassName?: string
}

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> extends CustomColumnMeta {
    // `never used` error 방지
    dataType?: TData
    valueFormatter?: (value: TValue) => string
  }
}
