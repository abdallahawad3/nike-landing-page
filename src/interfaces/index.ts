export interface ILinks {
    href: string; 
    label:string;
}

export interface IButton {
    label: string;
    iconURL?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fullWidth?: string;
}

export interface IShowImage { 
    imgURL:{
        thumbnail: string;
        bigShoe: string;
    }; 
    changeBigShoeImage:(ele: string)=>void; 
    bigShoeImg: string; 
}

export interface IPopularProducts {
    imgURL:string;
    name:string;
    price:string;
}

export interface IServices {
    imgURL:string;
    label:string;
    subtext:string;
}

export interface IReview {
    imgURL:string; customerName:string; rating:number; feedback: string;
}