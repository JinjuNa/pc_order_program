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

//선택한 항목 활성화
$(document).on('click', '#itemnamelist li', function(){
    $(this).siblings().removeClass("active")
    $(this).addClass("active")
    var itemidx = $(this).index() + 1;
    $('#itempricelist li').siblings().removeClass("active")
    $('#itempricelist li:nth-child('+itemidx+')').addClass("active")
    var categoryidx = $('#category li.active').index(); 
    itemcontent(categoryidx,itemidx-1)

    //선택한 아이의 활성화된 category의 index값을 categoryidx변수에 담았다.
    // var li = document.querySelectorAll('#itemnamelist li'); //클릭할 li를 변수 li에 담음(나중에 선택한 li의 index값 얻기 위해 )
    // var categoryidx = $('#category li.active').index();     //선택되어있는(active클래스가 담겨있는) #category의 li.active의 인덱스를 변수 categoryidx에 담음
    // function li_click(idx){ // idx를 변수를 가지는 li_click 함수 생성
    //     li[idx].onclick = function(){   //인덱스가 idx인 li를 클릭했을때 다음과 같은 함수를 실행시킨다. //왜 이렇게 표현하는 거죠?
    //         itemcontent(categoryidx,idx);   //위에서 정의해줬던 itemcontent를  categoryidx와 idx에 맞게 실행시킨다.
    //     };
    // }    
    // for(var i=0; i<li.length; i++){
    //     li_click(i);        //얘는 왜 있는 걸까요..? 근데 얘가 없으면 실행이 안되요 ㅜ.ㅜ
    // }
})



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






