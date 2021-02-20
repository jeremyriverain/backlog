export interface Question {
  id: number
  label: string
  options?: Option[]
  help?: string
  result: Result
}

export interface Option {
  value: number
  label: string
}

export type Result = boolean | number | null
