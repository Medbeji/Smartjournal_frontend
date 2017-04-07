export class Article{
_id:string;
__v:number;
   Description: string;
    Picture: string;
    Link : string;
    ArticleId : string ;
    Likes: number;

        constructor(data) {
        Object.assign(this, data);
    }
}