import { Console } from "./console"

export interface Catalog {
  title: string,
  year: number,
  console: string,
  completed: boolean,
  dateCompletion?: string,
  personalNotes?: string
}
