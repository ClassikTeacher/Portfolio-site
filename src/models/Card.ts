import imeg from '../images/SOFA.png' 

export class Card{
    title: string
    category: string
    imeg:  typeof imeg | null;
    select: boolean

    constructor(title: string, category: string){
        this.title = title
        this.category = category
        this.imeg = imeg
        this.select = false
    }

    initPage(){
        
    }
}