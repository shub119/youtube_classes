//this is a typscript file 

class youTube_Vedio{

    public vedio_title: string;
    public vedio_category: string;
    public vedio_licence: number;
    public vedio_publishedDate: Date;
    public vedio_description: string;
    public vedio_comments: string[]=[];

     constructor(vedio_title: string, vedio_category : string, vedio_licence: number, vedio_publishedDate: Date, vedio_description: string, vedio_comments: string[]=[]){
         this.vedio_title=vedio_title;
         this.vedio_category=vedio_category;
         this.vedio_licence=vedio_licence;
         this.vedio_publishedDate=vedio_publishedDate;
         this.vedio_description=vedio_description;
         this.vedio_comments=vedio_comments
     }
 
 //method
 getNumberofViews=()=>{
    console.log("1 million")
 }
 
 commingUpNext=()=>{
     return this.vedio_title
 }
 
 getPublishedDate=()=>{
    return this.vedio_publishedDate
 }
 getRelatedVideos=([])=>{
     console.log(["bhege-naina", "kaun tuje","soch na sake","humsafar","kahin to"])
 }
 getcurrentVedio=()=>{
     return this.vedio_title
 }

 addcomments =(...comment:string[])=>{

    let newcomment=comment;
    this.vedio_comments=this.vedio_comments.concat(newcomment);
   return this.vedio_comments

}
 
 }//end of paramt class

 
 let date1 = new Date(1478708162000);
 let date2 = new Date(1231231231232);

 let vedio = new youTube_Vedio("Dil diya gallan","music",837748,date1,"this is the latest vedio from tseries",["hi really like this one"])
 let nextvedio =new youTube_Vedio("break up song","music",125667,date2,"this is the old vedio from tseries",["awesome one"])
 

 vedio.getNumberofViews(); //it will show no of views

 // this will show the current vedio that is being played
 console.log(vedio.getcurrentVedio())

//next item to be played
 console.log(nextvedio.commingUpNext()) 

// this will show the date when the item is published
 console.log(vedio.getPublishedDate()) 
 console.log(nextvedio.getPublishedDate())

 vedio.getRelatedVideos([])// show all related vedios

// the below will add new comments to the vedios

console.log(vedio.addcomments("its nicely sung by the singer"))
console.log(nextvedio.addcomments("nice one"))

