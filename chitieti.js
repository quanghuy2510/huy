

const dsanhss = [
    'trang.jpeg',
    'hong.jpeg',
    'den.jpeg',
    'xanh.jpeg'
]

function chonmauss(x){
    switch (x) {
        case 1:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhss[0];
            break;
        case 2:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhss[1];
            break;
        case 3:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhss[2];
            break;
        case 4:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhss[3];
            break;
    }
}

const dsanhip14 = [
    '14trang.jpeg',
    '14tim.jpeg',
    '14den.jpeg',
    '14vang.jpeg'
]

function chonmauip(x){
    switch (x) {
        case 1:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhip14[0];
            break;
        case 2:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhip14[1];
            break;
        case 3:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhip14[2];
            break;
        case 4:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhip14[3];
            break;
    }
}

const dsanhf = [
    'fden.jpeg',
    'ftim.jpeg',
    'fvang.jpeg',
    'fxanh.jpeg'
]

function chonmauf(x){
    switch (x) {
        case 1:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhf[0];
            break;
        case 2:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhf[1];
            break;
        case 3:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhf[2];
            break;
        case 4:
            document.querySelector("#hinhanh-main1").src = 'chitiet/'+dsanhf[3];
            break;
    }
}



// var giohangflip = localStorage.getItem('giohangflip');
// giohangflip = JSON.parse(giohangflip);

// var giohang14 = localStorage.getItem('giohang14');
// giohang14 = JSON.parse(giohang14);

// var giohang = localStorage.getItem('giohang');
// giohang = JSON.parse(giohang);




// loadsoluong();
// function loadsoluong(){
//     var sumsoluong = 0;
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


donwchitiet();

function donwchitiet (){
    chitiet = localStorage.getItem('chitiet1');
    chitiet = JSON.parse(chitiet);
    console.log(chitiet);
}


let temp = `
    <div class="box1">
    <div class="box1-top">
        <img id="hinhanh-main1" src="${chitiet.anhto}" alt="">
    </div>
    <div class="box1-bottom">
        <div class="hinhanh">
            <img src="${chitiet.bosuutap[0]}" alt="">
        // </div>
        <div class="hinhanh">
            <img src="${chitiet.bosuutap[1]}" alt="">
        </div>
        <div class="hinhanh">
            <img src="${chitiet.bosuutap[2]}" alt="">
        </div>
        <div class="hinhanh" id="layanh">
            <img src="${chitiet.bosuutap[3]}" alt="">
        </div>
    </div>
</div>

<div class="box2">
    <div class="top">
        <h2 class="ten"><span>${chitiet.ten}</span></h2>
            <div class="banchay">
                <h3>Bán chạy</h3>
            </div>
        <span class="gia"><h2><span>${chitiet.gia}</span>đ<del>31.990.000đ</del></h2></span>
        <div class="mau">
            <p style="background-color: white;" onclick="chonmauss(1)" >WHITE</p>
            <p style="background-color: rgb(255, 255, 255);"  onclick="chonmauss(2)" >PURPLE</p>
            <p style="background-color: rgb(255, 255, 255);" onclick="chonmauss(3)" >BLACK</p>
            <p style="background-color: rgb(255, 255, 255);" onclick="chonmauss(4)" >GREEN</p>
        </div>
        <div class="text">
            <div class="khuyenmai">
                <h3>Khuyễn Mãi:
                    <br>
                    <span>Giá và khuyến mãi áp dụng đặt và nhận hàng từ 15/3 - 31/3</span>
                </h3>
                <p class="mr-left10">Giá và khuyến mãi áp dụng đặt và nhận hàng từ 17/3 - 20/3</p>
            </div>
            <div class="thongtin mr-left10">
                <p>Khách hàng lựa chọn 1 trong 2 khuyến mại sau:</p>
                <p>Khuyến mại 1:</p> 
                <p><i class="fa-solid fa-circle-check"></i>Giảm giá 5.000.000đ (đã trừ vào giá)</p>
                <p> <i class="fa-solid fa-circle-check"></i>Giảm thêm 2.000.000đ khi thanh toán qua VNPay hoặc Thu cũ đổi mới trợ giá 3.000.000đ</p>
            </div>
            <div class="thongtin mr-left10">
                <p>Khuyến mại 2:</p> 
                <p><i class="fa-solid fa-circle-check"></i>Giảm giá 5.000.000đ (đã trừ vào giá)</p>
                <p> <i class="fa-solid fa-circle-check"></i>Giảm thêm 2.000.000đ khi thanh toán qua VNPay hoặc Thu cũ đổi mới trợ giá 3.000.000đ</p>
            </div>
        </div>

        <div class="mua" onclick="themSp()">
            <p>Mua Ngay</p>
            <h5>Thoải mái lựa chọn, xem hàng tại nhà</h5>
        </div>

        <div class="giohang mr-top10">
            <div class="left">Mua Qua Thẻ Tín Dụng</div>
            <div class="left">Thêm Vào Giỏ Hàng</div>
        </div>
    </div>
</div>
    `
    document.querySelector(".main1").innerHTML = temp;


var giohang;
if(localStorage.getItem('giohang')==undefined){
    giohang = []
}else{
    giohang = JSON.parse(localStorage.getItem('giohang'))
}


function themSp(){
    let sp = {
        ...chitiet,
        soluong : 1
    }
    // giohang.push(sp);
    var chuaMua = true;
                // Kiểm tra giỏ hàng đã có sản phẩm này chưa
                for(var item of giohang){
                    if(item.ten == sp.ten){
                        item.soluong++;
                        chuaMua = false;
                        break;
                    }
                }
                if(chuaMua==true){
                    // nếu chưa mua thì theem vào giỏ hàng
                    sp.soluong++;
                    giohang.push(sp);
                }
    
    localStorage.setItem('giohang',JSON.stringify(giohang));
    giohang = localStorage.getItem('giohang');
    giohang = JSON.parse(giohang);
    document.querySelector("#soluong").innerText = giohang.length;
}
document.querySelector("#soluong").innerText = giohang.length;






















