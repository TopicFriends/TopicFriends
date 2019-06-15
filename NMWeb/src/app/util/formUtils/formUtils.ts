import { FormControl } from '@angular/forms'

export type FormDef<T> = Partial<{[key in keyof T]: FormControl}>

