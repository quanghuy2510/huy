// slide

const arryAnh = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];
var time;
var count = 0;
clickPhai = function(){
    count++;
    if(count == arryAnh.length){
        count = 0;
    }
    document.querySelector("#anh").src ="slide/"+arryAnh[count];
    console.log(count);
}
function clickTrai(){
    count--
    if(count < 0 ){
        count = arryAnh.length -1;
    }
    console.log(count);
    document.querySelector("#anh").src ="slide/"+arryAnh[count];
}


// slide box 1 

const arryAnhbox1 = [
    'b1.jpg',
    'b2.jpg',
    'b3.jpg',
    'b4.jpg',
]

var count1 = 0;
clickTuDong = function(){
    count1++;
    if(count1 == arryAnhbox1.length){
        count1 = 0;
    }
    document.querySelector("#anh-box1").src ="slide/"+arryAnhbox1[count1];
}

setInterval(clickTuDong,2000);

const arryAnhbox2 = [
    'n1.jpg',
    'n2.jpg',
    'n3.jpg',
    'n4.jpg',
]
var count2 = 0;
clickTuDong2 = function(){
    count2++;
    if(count2 == arryAnhbox1.length){
        count2 = 0;
    }
    document.querySelector("#anh-box2").src ="slide/"+arryAnhbox2[count2];
}
setInterval(clickTuDong2,1800);


// countdown

// Set the date we're counting down to
var countDownDate = new Date("April 11, 2023 3:00:00").getTime();
    
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// var giohangflip = localStorage.getItem('giohangflip');
// giohangflip = JSON.parse(giohangflip);

// var giohang14 = localStorage.getItem('giohang14');
// giohang14 = JSON.parse(giohang14);

// var giohang = localStorage.getItem('giohang');
// giohang = JSON.parse(giohang);



// loadsoluong();
// function loadsoluong(){
//     var sumsoluong = 0;
//     console.log(sumsoluong);
//     for(var item of giohangflip){
//         if(item.soluong){
//             sumsoluong += item.soluong;

//         }
//     }

//     for(var item of giohang14){
//         if(item.soluong){
//             sumsoluong += item.soluong;

//         }
//     }

//     for(var item of giohang){
//         if(item.soluong){
//             sumsoluong += item.soluong;
            
//         }
//     }
//     document.querySelector("#soluong").innerText = sumsoluong;
// }



const dl = [
    {
        ten : 'iPhone 14 Pro Max 128GB',
        gia : '27.999.000',
        anh : 'img/iP14-Pro-Max-020323.jpg',
        anhto : 'chitiet/14den.jpeg',
        bosuutap:[
            'chitiet/nho1.jpeg',
            'chitiet/nho2.jpeg',
            'chitiet/nho3.jpeg',
            'chitiet/nho4.jpeg'
        ],
        gia : 25000000
    },
    
    {
        ten : 'Samsung Galaxy S23 Ultra...',
        gia : '26.999.000',
        anh : 'img/s23-ultra.jpg',
        anhto : 'img/1830397938.jpeg',
        bosuutap:[
            'img/pink.jpeg',
            'img/xam.jpeg',
            'img/yellow.jpeg',
            'img/black.jpeg'
        ],
        gia : 30000000
    },

    {
        ten : 'Samsung Galaxy Z Flip4 5G 256GB',
        gia : '17.999.000',
        anh : 'img/Z Flip1679625471.jpg',
        anhto : 'chitiet/fden.jpeg',
        bosuutap:[
            'chitiet/fnhoden.jpeg',
            'chitiet/fnhotim.jpeg',
            'chitiet/fnhovang.jpeg',
            'chitiet/fnhoxanh.jpeg'
        ],
        gia : 15000000
    },

    {
        ten : 'iPhone 14 Pro Max 128GB',
        gia : '27.999.000',
        anh : 'img/iP14-Pro-Max-020323.jpg',
        anhto : 'chitiet/14den.jpeg',
        bosuutap:[
            'chitiet/nho1.jpeg',
            'chitiet/nho2.jpeg',
            'chitiet/nho3.jpeg',
            'chitiet/nho4.jpeg'
        ],
        gia : 25000000
    },
    
    {
        ten : 'Samsung Galaxy S23 Ultra...',
        gia : '26.999.000',
        anh : 'img/s23-ultra.jpg',
        anhto : 'img/1830397938.jpeg',
        bosuutap:[
            'img/pink.jpeg',
            'img/xam.jpeg',
            'img/yellow.jpeg',
            'img/black.jpeg'
        ],
        gia : 30000000
    },

    {
        ten : 'Samsung Galaxy Z Flip4 5G 256GB',
        gia : '17.999.000',
        anh : 'img/Z Flip1679625471.jpg',
        anhto : 'chitiet/fden.jpeg',
        bosuutap:[
            'chitiet/fnhoden.jpeg',
            'chitiet/fnhotim.jpeg',
            'chitiet/fnhovang.jpeg',
            'chitiet/fnhoxanh.jpeg'
        ],
        gia : 15000000
    },
];

let temp = '';

    giohang = localStorage.getItem('giohang');
    giohang = JSON.parse(giohang);
    // document.querySelector("#soluong").innerText = giohang.length;      

dl.forEach((el,index) =>{
    temp = `
                <div class="box-banner3">
                    <a href="chitiet.html" onclick ="showchitiet(${index})">
                        <div class="menu">
                            <div class="text">
                                <h4>${el.ten}</h4>
                                <br><h3>${el.gia}Đ<del>31.990.000₫</del></h3>
                            </div>
                            <div class="banchay">
                                <h4>Bán chạy</h4>
                            </div>
                        </div>
                        <div class="hinhanh">
                            <img src="${el.anh}" alt="">
                        </div>
                    </a>
                </div>
    `
    document.querySelector("#innerbox").innerHTML += temp;
})


const showchitiet =(index)=>{
    dl.forEach((item,index2)=>{
        if(index == index2){
            localStorage.setItem("chitiet1",JSON.stringify(item)); 
        }
    })
}




















