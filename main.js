//this is a typscript file 
var youTube_Vedio = /** @class */ (function () {
    function youTube_Vedio(vedio_title, vedio_category, vedio_licence, vedio_publishedDate, vedio_description, vedio_comments) {
        if (vedio_comments === void 0) { vedio_comments = []; }
        var _this = this;
        this.vedio_comments = [];
        //method
        this.getNumberofViews = function () {
            console.log("1 million");
        };
        this.commingUpNext = function () {
            return _this.vedio_title;
        };
        this.getPublishedDate = function () {
            return _this.vedio_publishedDate;
        };
        this.getRelatedVideos = function (_a) {
            console.log(["bhege-naina", "kaun tuje", "soch na sake", "humsafar", "kahin to"]);
        };
        this.getcurrentVedio = function () {
            return _this.vedio_title;
        };
        this.addcomments = function () {
            var comment = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                comment[_i] = arguments[_i];
            }
            var newcomment = comment;
            _this.vedio_comments = _this.vedio_comments.concat(newcomment);
            return _this.vedio_comments;
        };
        this.vedio_title = vedio_title;
        this.vedio_category = vedio_category;
        this.vedio_licence = vedio_licence;
        this.vedio_publishedDate = vedio_publishedDate;
        this.vedio_description = vedio_description;
        this.vedio_comments = vedio_comments;
    }
    return youTube_Vedio;
}()); //end of paramt class
var date1 = new Date(1478708162000);
var date2 = new Date(1231231231232);
var vedio = new youTube_Vedio("Dil diya gallan", "music", 837748, date1, "this is the latest vedio from tseries", ["hi really like this one"]);
var nextvedio = new youTube_Vedio("break up song", "music", 125667, date2, "this is the old vedio from tseries", ["awesome one"]);
vedio.getNumberofViews(); //it will show no of views
// this will show the current vedio that is being played
console.log(vedio.getcurrentVedio());
//next item to be played
console.log(nextvedio.commingUpNext());
// this will show the date when the item is published
console.log(vedio.getPublishedDate());
console.log(nextvedio.getPublishedDate());
vedio.getRelatedVideos([]); // show all related vedios
// the below will add new comments to the vedios
console.log(vedio.addcomments("its nicely sung by the singer"));
console.log(nextvedio.addcomments("nice one"));
