// getCategory 함수정의
function getCategory(){
    var category = ['전체메뉴', '라면류', '볶음밥류', '과자류', '음료류'];
    var show='';    
for(var i=0; i < category.length; i++){
    show += '<li><a href="#">' + category[i] +'</a></li>'
}
document.getElementById('category').innerHTML=show;
};

//category 함수사용
getCategory();

//데이터

var ramyun = [
    {
        num : 1,
        categoryNum : 1,
        name : '불닭볶음면',
        'detail' : '화끈한 라면',
        'price' : 3500,
        'image' : 'buldark.jpg',
        'count' : 5
    },
    {
        num : 2,
        categoryNum : 1,
        name : '진라면',
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
        'detail' : '새우가 살아있는 볶음밥',
        'price' : 5000,
        'image' : 'shrimpfriedrice.jpg',
        'count' : 1
    },
    {
        num : 4,
        categoryNum : 2,
        name : '김치볶음밥',
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
        'detail' : '손이가요 손이가',
        'price' : 2000,
        'image' : 'shrimpsnack.jpg',
        'count' : 1
    },
    {
        num : 6,
        categoryNum : 3,
        name : '고래밥',
        'detail' : '고소한 고래밥',
        'price' : 2000,
        'image' : 'whalesnack.jpg',
        'count' : 2
    },
    {
        num : 7,
        categoryNum : 3,
        name : '감자깡',
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
        'detail' : '속이 뻥 시원한 콜라',
        'price' : 1000,
        'image' : 'cola.jpg',
        'count' : 10
    },
    {
        num : 9,
        categoryNum : 4,
        name : '레몬에이드',
        'detail' : '상큼한 레몬향 에이드',
        'price' : 3000,
        'image' : 'lemonade.jpg',
        'count' : 5
    },
    {
        num : 10,
        categoryNum : 4,
        name : '물',
        'detail' : '생수',
        'price' : 1000,
        'image' : 'water.jpg',
        'count' : 6
    }

];

//라면류 보이기


function itemNameList(a){
    var itemNameList = '';
    var itemPriceList = '';
    for(var i=0; i<a.length; i++){
        itemNameList += '<li><a href="#">' + a[i].name +'</a></li>'
        itemPriceList += '<li><a href="#">' + a[i].price +'</a></li>'
    }
    document.getElementById('itemnamelist').innerHTML=itemNameList;
    document.getElementById('itempricelist').innerHTML=itemPriceList;
    
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
    
    // $('#itempricelist li').click(function(){
    //     $(this).siblings().css({'backgroundColor' : '#666'})
    //     $(this).css({'backgroundColor' : '#000'})
    // });
    
    }

//선택한 항목 활성화 & 아이템 정보띄우기
$(document).on('click', '#itemnamelist li', function(){
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
    var itemidx = $(this).index();
    $('#itempricelist li').siblings().removeClass("active")
    $('#itempricelist li:nth-child('+(itemidx+1)+')').addClass("active")
    var categoryidx = $('#category li.active').index(); 
    itemcontent(categoryidx,itemidx)

    //장바구니 버튼 클릭했을때 주문목록에 상품정보띄우기
    
    //shopping button을 눌렀을때, 지금 #itemlist li중 엑티브 클래스가 붙은 아이의 상품이름과 가격을 주문목록에 추가시키고 싶다.
    //상품이름을 어디서 가져올 것인가? 카테고리 인덱스번호와 li의 인덱스 번호를 통해서
    // var ordernamelist='';
    // var orderpricelist='';
    
    $('#shoppingbutton').click(function(){
        //엑티브되어 있는 li의 item 인덱스값    //카테고리의 인덱스값도 알아야하나?
        $('#won').show();
        var categoryidx = $('#category li.active').index();     
        var orderidx = $('#itemnamelist li.active').index(); 
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
            
            var namelist = document.getElementById('ordernamelist')
            var pricelist = document.getElementById('orderpricelist')
            // var amountlist = document.getElementById('orderamountlist')
            
            newOrderName = document.createElement('li');
            newOrderPrice = document.createElement('li');
            // newOrderamount = document.createElement('li');
            newName = document.createTextNode(categoryName[b].name)
            newPrice = document.createTextNode(categoryName[b].price)

            newOrderName.appendChild(newName);
            newOrderPrice.appendChild(newPrice);
            // newOrderAmount.appendChild(newAmount);
            namelist.appendChild(newOrderName);
            pricelist.appendChild(newOrderPrice);
            // amountlist.appendChild(newOrderAmount);
            // console.log(newOrderName);
            
            
            //주문금액 표시하기
            var select = document.getElementById('amount');
            // alert(select.options[select.selectedIndex].value);
            // var selectValue = select.options[select.selectedIndex].value;
            
            var TotalPrice = categoryName[b].price * selectValue;
            document.getElementById('totalprice').innerHTML=TotalPrice
        }

        addOrder(categoryidx, orderidx)
        
        //shopping button클릭하면, 주문금액(가격*수량) 자동으로 나오기


    })
})












