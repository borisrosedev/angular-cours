export interface FormInputModel {
    type: string;
    name:string;
    placeholder:string;
    value?:string
    title?:string
    required?:boolean
    maxlength?:string
    minlength?:string
    pattern?:string
    checked?:boolean
}
