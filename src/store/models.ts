export interface Question {
  id: number
  label: string
  options?: Option[]
  help?: string
}

export interface Option {
  value: number
  label: string
}
