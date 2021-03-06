var rootview = ui("$");
var page = sm("do_Page");
var nf = sm("do_Notification");

rootview.setMapping({
    "icon.tag": "UserId",
    "icon.source": "UserIcon",
    "name.text": "UserName",
    "message.text": "Message",
    "message.visible": "msgVis",
    "message_all.text": "Message",
    "message_all.visible": "msgAllVis",

    "btn_check.visible": "btn_check",
    "lb_check.text": "lb_check",

    "createTime.text": "CreateTime",
    "actionTips.tag": "id",

    "commentList.text": "commentList",
    "commentList.visible": "commentVis"
});

var icon = ui("icon");
var img_icon = ui("img_icon")
var actionTips = ui("actionTips");
var btn_check = ui("btn_check");
var lb_check = ui("lb_check");
var message = ui("message");


//显示查看全文、收起全文注册事件
btn_check.on("touch", function(){
    page.fire("check-all-listen", {id: actionTips.tag, vis: message.visible});
}).on("touchDown", function(){
    this.bgColor = "D5D5D5FF";
}).on("touchUp", function(){
    this.bgColor = "00000000";
});

//评论
actionTips.on("touch", function(){
    page.fire("comment-listen", {id: this.tag});
});

//点赞
var isDz_flg = true
var do_ALayout_dz = ui("do_ALayout_dz")
var do_ImageView_dz = ui("do_ImageView_dz")
do_ALayout_dz.on("touch", function(){
	if(isDz_flg){
		do_ImageView_dz.source = "source://image/dzs_h.png"
		isDz_flg =false 
	}else {
		do_ImageView_dz.source = "source://image/dzs.png"
		isDz_flg =true
	}
});