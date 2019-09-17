type backgroundSize = "auto"|"cover"|"contain";

export interface project{
    key:number,
    image: {
        url: string,
        title: string,
        height:string
        backgroundSize?: backgroundSize
    },
    title: string,
    content: string,
    github?: string
}