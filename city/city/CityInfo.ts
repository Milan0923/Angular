export class CityInfo{
    cityname:string;
    info:string;
    touristplcs:string[];
    imgpath:string;

    constructor(cn:string,inf:string,tp:string[],ip:string){
        this.cityname=cn;
        this.info=inf;
        this.touristplcs=tp;
        this.imgpath=ip;
        }
}