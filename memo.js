var shoplist = {};
shoplist.name = "MyBuyList 購物清單";
shoplist.time = '2018/3/25';
shoplist.list = [
    // {name: "吹風機",price: 1000},
    // {name: "空氣清淨機",price: 3000},
    {
        name: "Panesonic除濕機",
        price: 4880
    },
    {
        name: "ASUS筆記型電腦",
        price: 19800
    },
    {
        name: "高質感原木音響",
        price: 7980
    }
];
var item_html = "<li id='{{id}}' class='buy_item'>{{num}}.{{item}} <div class='price'>{{price}}</div><div id={{del_id}} class='delBtn' del='{{del}}'>X</div></li>"

var total_html = "<li class='buy_item total'>Total:<div class='price'>{{price}}</div></li>"

var item_id;
var delItem_id;

function showlist() {
    $("#items_list").html("");
    var total_price = 0;
    for (var i = 0; i < shoplist.list.length; i++) {
        var item = shoplist.list[i];
        item_id = i;
        delItem_id = "delItem_" + i; //del
        total_price += parseInt(item.price);
        console.log(total_price);
        var current_item_html =
            item_html.replace("{{num}}", i + 1)
            .replace("{{item}}", item.name)
            .replace("{{id}}", i)
            .replace("{{del_id}}", delItem_id) //del
            .replace("{{price}}", item.price)
            .replace("{{del}}", i);

        $("#items_list").append(current_item_html);



        $("#" + delItem_id).click( //del
            function () {
                removeItem($(this).parent().attr("id"));
                // removeItem($(this).attr("del"));

                // console.log($(this));
                // removeItem($("#"+id).attr("id"))  
                // console.log($("#"+id).attr("id"));
            }
        );

    }

    var current_total_html =
        total_html.replace("{{price}}", total_price);
    $("#items_list").append(current_total_html);
}





showlist();





$(".addbtn")
    .on(
        'click',
        function () {
            shoplist.list.push({
                name: $("#input_name").val(),
                price: $("#input_price").val()
            });
            $("#input_name").val("");
            $("#input_price").val("");
            showlist();
        })
    .on(
        'keyup',
        function () {
            shoplist.list.push({
                name: $("#input_name").val(),
                price: $("#input_price").val()
            });
            $("#input_name").val("");
            $("#input_price").val("");
            showlist();
        });



function removeItem(id) {
    console.log("類型是" + typeof (id));
    console.log("內容是" + (id));

    shoplist.list.splice(id, 1);
    showlist();
}
