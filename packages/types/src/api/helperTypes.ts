//import { AxiosRequestConfig } from 'axios'

export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U
export type AddIdentity<T, I> = { [P in keyof T]: T[P] | I }
export type AddIdentityIf<A, B, C> = {
  [D in keyof A]: B extends A[D] ? A[D] | C : A[D]
}

type OverwritenApiConfig<
  DATA = undefined,
  PARAMS = undefined,
  PATHS = undefined
> = Overwrite<
  any,
  (DATA extends undefined ? object : { data: DATA }) &
    (PARAMS extends undefined ? object : { params?: PARAMS }) &
    (PATHS extends undefined ? object : PATHS)
>

export type ApiConfig<
  DATA = undefined,
  PARAMS = undefined,
  PATHS = undefined
> = Omit<
  OverwritenApiConfig<DATA, PARAMS, PATHS>,
  | (DATA extends undefined ? 'data' : never)
  | (PARAMS extends undefined ? 'params' : never)
>

export interface ApiResponse<RESPONSE_DATA = {}> {
  datas?: RESPONSE_DATA
}

export type ApiOptions = {
  useToken?: boolean
}
