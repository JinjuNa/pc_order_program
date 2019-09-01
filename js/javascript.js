
//데이터

var ramyun = [
    {
        num : 1,
        categoryNum : 1,
        name : '불닭볶음면',
        Ename : 'buldark',
        'detail' : '화끈한 라면',
        'price' : 3500,
        'image' : 'buldark.jpg',
        'count' : 5
    },
    {
        num : 2,
        categoryNum : 1,
        name : '진라면',
        Ename : 'jinramyun',
        'detail' : '국민이 사랑하는 라면',
        'price' : 3000,
        'image' : 'jinramyun.jpg',
        'count' : 3
    }

];

var friedrice = [
    {
        num : 3,
        categoryNum : 2,
        name : '새우볶음밥',
        Ename : 'shrimpfriedrice',
        'detail' : '새우가 살아있는 볶음밥',
        'price' : 5000,
        'image' : 'shrimpfriedrice.jpg',
        'count' : 1
    },
    {
        num : 4,
        categoryNum : 2,
        name : '김치볶음밥',
        Ename : 'kimchifriedrice',
        'detail' : '직접 담근 김치로 만든 김치볶음밥',
        'price' : 6000,
        'image' : 'kimchifriedrice.jpg',
        'count' : 4
    }

];

var snack = [
    {
        num : 5,
        categoryNum : 3,
        name : '새우깡',
        Ename : 'shrimpsnack',
        'detail' : '손이가요 손이가',
        'price' : 2000,
        'image' : 'shrimpsnack.jpg',
        'count' : 1
    },
    {
        num : 6,
        categoryNum : 3,
        name : '고래밥',
        Ename : 'whalesnack',
        'detail' : '고소한 고래밥',
        'price' : 2000,
        'image' : 'whalesnack.jpg',
        'count' : 2
    },
    {
        num : 7,
        categoryNum : 3,
        name : '감자깡',
        Ename : 'photatosnack',
        'detail' : '감자 향이 솔솔',
        'price' : 2000,
        'image' : 'photatosnack.jpg',
        'count' : 3
    }

];

var drink = [
    {
        num : 8,
        categoryNum : 4,
        name : '콜라',
        Ename : 'cola',
        'detail' : '속이 뻥 시원한 콜라',
        'price' : 1000,
        'image' : 'cola.jpg',
        'count' : 10
    },
    {
        num : 9,
        categoryNum : 4,
        name : '레몬에이드',
        Ename : 'lemonade',
        'detail' : '상큼한 레몬향 에이드',
        'price' : 3000,
        'image' : 'lemonade.jpg',
        'count' : 5
    },
    {
        num : 10,
        categoryNum : 4,
        name : '물',
        Ename : 'water',
        'detail' : '생수',
        'price' : 1000,
        'image' : 'water.jpg',
        'count' : 6
    }

];

//라면류 보이기


function itemNameList(a){
    var itemList = '';
    for(var i=0; i<a.length; i++){
        itemList += '<tr><td>' + a[i].name +'</td><td>'+ a[i].price+'</td></tr>';
    }
    document.getElementById('itemtbody').innerHTML=itemList;
    
};

//itemcontent 보이기
//라면

//a=1 --> categorynum =1인 categoryName = ramyun (카테고리 넘버로 들어온 a값1이, ramyun으로 바꼈으면 좋겠다.)
//즉 categorynum 1이고, idx인 물품의 name//datail//price
function itemcontent(a,b){
    var categoryName;
    switch(a){
        case 1 : categoryName = ramyun;
        break;
        case 2 : categoryName = friedrice;
        break;
        case 3 : categoryName = snack;
        break;
        case 4 : categoryName = drink;
        break
    }
    var image = '<img src="./img/item/' +categoryName[b].image + '">'
    var name = categoryName[b].name;
    var detail = categoryName[b].detail;
    var price = categoryName[b].price;
    document.getElementById('itemimage').innerHTML= image;
    document.getElementById('itemcontentname').innerHTML= name;
    document.getElementById('itemcontentdetail').innerHTML= detail;
    document.getElementById('itemcontentprice').innerHTML= price + '원';
};

window.onload = function(){

     

    // getCategory 함수정의

    function getCategory(){
        var category = ['전체메뉴', '라면류', '볶음밥류', '과자류', '음료류'];
        var show='';    
    for(var i=0; i < category.length; i++){
        show += '<li><a href="#">' + category[i] +'</a></li>'
    }
    document.getElementById('category').innerHTML=show;
    };

    //getCategory 함수사용
    getCategory();


    $('#category li').click(function(){
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        
    })
    $('#category li:nth-child(2)').click(function(){
        itemNameList(ramyun);
    });
    $('#category li:nth-child(3)').click(function(){
        itemNameList(friedrice);
    });
    $('#category li:nth-child(4)').click(function(){
        itemNameList(snack);
    });
    $('#category li:nth-child(5)').click(function(){
        itemNameList(drink);
    });
    
    
    };

    function addOrder(a,b){
        var categoryName;
        switch(a){
            case 1 : categoryName = ramyun;
            break;
            case 2 : categoryName = friedrice;
            break;
            case 3 : categoryName = snack;
            break;
            case 4 : categoryName = drink;
            break
        }
    
        var orderlistTbody = document.getElementById('orderlistTbody')
        
        newName = document.createTextNode(categoryName[b].name)
        newPrice = document.createTextNode(categoryName[b].price)
        selectBox = '<select id="'+categoryName[b].Ename+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>'
        deleteIcon = '<a href="#"><i class="fas fa-trash-alt"></i></a>'
        
        newTr = document.createElement('tr')
        newTr.classList.add(categoryName[b].Ename);
        newTdName = document.createElement('td');
        newTdPrice = document.createElement('td');
        newTdSelect = document.createElement('td');
        newTdDelete = document.createElement('td');
        newTdDelete.classList.add('delete');

        newTdName.appendChild(newName);
        newTdPrice.appendChild(newPrice);
        newTdSelect.innerHTML = selectBox;
        newTdDelete.innerHTML = deleteIcon;
    
        newTr.appendChild(newTdName);
        newTr.appendChild(newTdPrice);
        newTr.appendChild(newTdSelect);
        newTr.appendChild(newTdDelete);
    
        orderlistTbody.appendChild(newTr);
    }

    function addValue(a,b){
        var categoryName;
        switch(a){
            case 1 : categoryName = ramyun;
            break;
            case 2 : categoryName = friedrice;
            break;
            case 3 : categoryName = snack;
            break;
            case 4 : categoryName = drink;
            break
        }

        var Ename=categoryName[b].Ename;

        if($('.'+ Ename).length == 0){
            addOrder(a, b);
        }else{
            var value = Number($('.' + Ename + ' select').val());
            
            $('.' + Ename + ' select').val(value+1)
        }


    }

    function updateAmount(){
        var NewTotalPrice = 0;
        var len = $("#orderlistTbody tr").length;
        var orderlistTbody = document.getElementById('orderlistTbody')

        for(var i=0; i<len; i++){
            var selectTr = orderlistTbody.getElementsByTagName('tr')[i]
            var p = selectTr.getElementsByTagName('td')[1].innerHTML;
            var v = selectTr.getElementsByTagName('select')[0].value;
            NewTotalPrice += p*v;
        }
        document.getElementById('totalprice').innerHTML=NewTotalPrice
        // console.log(NewTotalPrice);
        
    }

    // var select = document.getElementsByName('amount')[0];
    // var TotalPrice = 0;
    // function addAmount(a,b){

    //     var categoryName;
    //     switch(a){
    //         case 1 : categoryName = ramyun;
    //         break;
    //         case 2 : categoryName = friedrice;
    //         break;
    //         case 3 : categoryName = snack;
    //         break;
    //         case 4 : categoryName = drink;
    //         break
    //     }         
    // // alert(select.options[select.selectedIndex].value);
    // // var selectValue = select.options[select.selectedIndex].value;
    // AddPrice = categoryName[b].price;
    // TotalPrice += AddPrice;
    // document.getElementById('totalprice').innerHTML=TotalPrice        
    // }

    // function deleteAmount(a){
    // //orderlistTbody에 있는 여러개의 tr중에
    // //deleteidx 번째 tr의 2번째 td의 값을 가져오고싶다.
    // //deleteidx는 a로가져올것이다.

    // //value
    // var orderlistTbody = document.getElementById('orderlistTbody');
    
    // DeleteTr = orderlistTbody.getElementsByTagName('tr')[a];
    // DeletePrice = DeleteTr.getElementsByTagName('td')[1].innerHTML;
    // DeleteValue = DeleteTr.getElementsByTagName('select')[0].value;
    // // alert(DeleteValue);
    // // alert(DeletePrice);
    // TotalPrice -= DeletePrice*DeleteValue;
    // document.getElementById('totalprice').innerHTML=TotalPrice
    
    // }
    
$(document).on('click', '#itemtbody tr', function(){
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
    var itemidx = $(this).index();
    $('#itempricelist li').siblings().removeClass("active")
    $('#itempricelist li:nth-child('+(itemidx+1)+')').addClass("active")
    var categoryidx = $('#category li.active').index(); 
    itemcontent(categoryidx,itemidx)
    $('.shoppingicon').show();


    //장바구니 버튼 클릭했을때 주문목록에 상품정보띄우기
    
    //shopping button을 눌렀을때, 지금 #itemlist li중 엑티브 클래스가 붙은 아이의 상품이름과 가격을 주문목록에 추가시키고 싶다.
    //상품이름을 어디서 가져올 것인가? 카테고리 인덱스번호와 li의 인덱스 번호를 통해서
    // var ordernamelist='';
    // var orderpricelist='';
   

    
});

$(document).on('click', '#shoppingbutton', function(){
    var categoryidx = $('#category li.active').index();     
    var orderidx = $('#itemtbody tr.active').index();
    
    addValue(categoryidx, orderidx)
    // addAmount(categoryidx, orderidx);
    updateAmount();

    // $('select').change(function(){});
    
    
})

$(document).on('change', 'select', function(){
    updateAmount();
    // alert('나 바뀜')
})
// $('#shoppingbutton').click(function(){
//     // $('#won').show();
//     var categoryidx = $('#category li.active').index();     
//     var orderidx = $('#itemtbody tr.active').index();
//     addOrder(categoryidx, orderidx);
    
// });


function deleteOrder(a){
    var orderlistTbody = document.getElementById('orderlistTbody')
    orderlistTbody.removeChild(orderlistTbody.childNodes[a])

};

//첫번째 항목은 두번 클릭해야 삭제가된다.   //여전히 그렇다.
$(document).on('click', '.delete', function(){
    var deleteidx = $(this).parent('tr').index();
    // deleteAmount(deleteidx);
    deleteOrder(deleteidx);
    updateAmount();
    
   });



$(document).ready(function () {
    
    
$('input[type=radio][name=payment]').change(function() {
    if (this.value == '현금') {
        $('#paymentdiv').show();
    }
    else if (this.value == '카드') {
        $('#paymentdiv').hide();

    }
});


    
// $('select[name=amount]').focus(function(){
//     var originalval = $(this).val();
// }).change(function(){
//     var changeval = $(this).val();

//     alert('이전값 : ' + originalval + '이후값 : ' + changeval);
// })

$('#orderbutton').click(function(){
    
    //현금.카드 중에 체크된 박스의 value를 가져고오고 싶다.
    var paycheckbox = document.getElementsByName('payment')
    var paymoney = document.getElementById("paymoney").value;
    var FinalPrice = document.getElementById('totalprice').innerHTML
    var retrunmoney = paymoney - FinalPrice;
    var orderlistId = document.getElementById('orderlistTbody')
    var len = $("#orderlistTbody tr").length;

    var orderlist='';  
    for(var i=0; i<len; i++){
        var orderlistIdtr = orderlistId.getElementsByTagName('tr')[i];
        var orderlistname = orderlistIdtr.getElementsByTagName('td')[0].innerHTML;
        var orderlistvalue = orderlistIdtr.getElementsByTagName('select')[0].value;
        var order = orderlistname + ' ' + orderlistvalue;
        orderlist += order
    };
    // alert(orderlist);

    

    if(paycheckbox[0].checked == true){

        if(confirm('주문하신 내역은\n' +orderlist + '입니다.') == true){
            alert('주문이 완료되었습니다')
        }else{
            alert('주문이 취소되었습니다')
        }
    }else{
        
        if(paymoney < FinalPrice){
            alert("지불금액이 주문금액보다 작습니다. 다시 입력해주세요.")
        }else{
            if(confirm('주문하신 내역은\n' +orderlist + '입니다.\n 거스름돈은' + retrunmoney + '원 입니다.') == true){
                alert('주문이 완료되었습니다')
            }else{
                alert('주문이 취소되었습니다')
            }
        }
    }

    
})


});



