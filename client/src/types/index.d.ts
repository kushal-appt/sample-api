type user = {
    name?: string,
    email?: string,
    password?: string
}

type complexObject = {
    name:string,
    length:number
}

type errortype = {
    errorInfo: string
}
type userDetailsType ={
    email?:string,
    password?:string,
    jwt?:string
}

type userDetailSlice = {
  data?: userDetailsType
}

type cardType={
    title:string;
    date:string;
    description:string;
    tag:string;
    image:any
}


export {
    user,
    errortype,
    userDetailSlice,
    userDetailsType,
    cardType
}