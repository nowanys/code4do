/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/


var img_touch = ui("img_touch");
img_touch.on("touch",function(data, e){
	nf.toast("该图片可点击哦!");
});
