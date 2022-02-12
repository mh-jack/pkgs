export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

// https://dev.to/lucianbc/union-type-merging-in-typescript-9al
type CommonKeys<T extends object> = keyof T
type Subtract<A, C> = A extends C ? never : A
type AllKeys<T> = T extends any ? keyof T : never
type NonCommonKeys<T extends object> = Subtract<AllKeys<T>, CommonKeys<T>>
type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: any }
  ? T[K]
  : undefined
type PickTypeOf<T, K extends string | number | symbol> = K extends AllKeys<T>
  ? PickType<T, K>
  : never

export type Merge<T extends object> = {
  [k in CommonKeys<T>]: PickTypeOf<T, k>
} &
  {
    [k in NonCommonKeys<T>]?: PickTypeOf<T, k>
  }
