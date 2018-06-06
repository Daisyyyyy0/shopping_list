const shoplist = {
    name: 'MyBuyList 購物清單',
    time: '2018/3/25',
    list: [{
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
    ],
};
const createItem = (obj) => {
    const {
        id,
        price,
        delId,
        del,
        num,
        item
    } = obj;
    const li = document.createElement('li');
    li.setAttribute('id', id);
    li.setAttribute('class', 'buy_item');
    li.innerHTML = `${num}.${item}`;
    var priceDiv = document.createElement('div');
    priceDiv.setAttribute('class', 'price');
    priceDiv.innerHTML = price;
    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('id', delId);
    deleteBtn.setAttribute('class', 'delBtn');
    deleteBtn.setAttribute('del', del);
    deleteBtn.innerHTML = 'X';
    li.appendChild(priceDiv);
    li.appendChild(deleteBtn);
    return li;
}
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
        const listItem = createItem({
            id: i + 1,
            price: item.price,
            delId: delItem_id,
            del: i,
            num: i + 1,
            item: item.name
        });
        $("#items_list").append(listItem);
        $("#" + delItem_id).click( //del
            function () {
                $(this).parent().remove();
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



function removeItem(i) {
    console.log("類型是" + typeof (id));
    console.log("內容是" + (id));

    shoplist.list.splice(id, 1);
    showlist();
}
