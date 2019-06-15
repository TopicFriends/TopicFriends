import { FormControl } from '@angular/forms'

export type FormControlDef<T> = Partial<{[key in keyof T]: FormControl}>

