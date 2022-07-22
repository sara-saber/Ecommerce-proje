export class News {
    id: number = 0
    title: string = ""
    text: string = ""
    full_text: number = 0
    img_creation_date: Date = new Date()
    constructor(id: number, t: string, txt: string, ftxt: number, d: Date) {
        id = this.id
        t = this.title
        txt = this.text
        ftxt = this.full_text
        d = this.img_creation_date
    }
}