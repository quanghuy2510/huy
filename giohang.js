// // var giohangflip = localStorage.getItem('giohangflip');
// // giohangflip = JSON.parse(giohangflip);

// // var giohang14 = localStorage.getItem('giohang14');
// // giohang14 = JSON.parse(giohang14);

// // var giohang = localStorage.getItem('giohang');
// // giohang = JSON.parse(giohang);



// // loadsoluong();
// // function loadsoluong(){
// //     var sumsoluong = 0;
// //     for(var item of giohangflip){
// //         if(item.soluong){
// //             sumsoluong += item.soluong;
// //         }
// //     }

// //     for(var item of giohang14){
// //         if(item.soluong){
// //             sumsoluong += item.soluong;
// //         }
// //     }

// //     for(var item of giohang){
// //         if(item.soluong){
// //             sumsoluong += item.soluong;
// //         }
// //     }

// //     document.querySelector("#soluong").innerText = sumsoluong;
// // }




// hiensp();
// function hiensp(){
//     document.querySelector("#info").innerHTML = '';

//     if(true){
//         spss();
//     }

//     if(true){
//         spflip();
//     }

//     if(true){
//         sp14();
//     }

// }


// function spflip(){
//     for(var i = 0 ; i < giohangflip.length ; i++){
//         var codesp = `
//         <div class="box">
//             <div class="hinhanh">
//             <img src="${giohangflip[i].anh}" alt="">
//             <div class="text-hinhanh" onclick="xoasp(this)">Xóa</div>
//             </div>
//             <div class="text">
//                 <div class="text-text">
//                     <h3>
//                         ${giohangflip[i].ten}
//                     </h3>
//                 </div>
//             </div>
//             <div class="gia">
//                 <h3>${giohangflip[i].gia}đ</h3>
//                 <div class="choosenumber">
//                     <div class="abate" data-cartid="2">-</div>
//                     <div class="number">${giohangflip[i].soluong}</div>
//                     <div class="augment" data-cartid="2">+</div>
//                 </div>
//             </div>
//             </div>
//         `;
//         document.querySelector("#info").innerHTML += codesp;
//     }
// }

// function sp14(){
//     for(var i = 0 ; i < giohang14.length ; i++){
//         var codesp = `
//         <div class="box">
//             <div class="hinhanh">
//             <img src="${giohang14[i].anh}" alt="">
//             <div class="text-hinhanh" onclick="xoasp(this)">Xóa</div>
//             </div>
//             <div class="text">
//                 <div class="text-text">
//                     <h3>
//                         ${giohang14[i].ten}
//                     </h3>
//                 </div>
//             </div>
//             <div class="gia">
//                 <h3>${giohang14[i].gia}đ</h3>
//                 <div class="choosenumber">
//                     <div class="abate" data-cartid="2">-</div>
//                     <div class="number">${giohang14[i].soluong}</div>
//                     <div class="augment" data-cartid="2">+</div>
//                 </div>
//             </div>
//             </div>
//         `;
//         document.querySelector("#info").innerHTML += codesp;
//     }   
// }

// function spss(){
//     for(var i = 0 ; i < giohang.length ; i++){
//         var codesp = `
//             <div class="box">
//             <div class="hinhanh">
//             <img src="${giohang[i].anh}" alt="">
//             <div class="text-hinhanh" onclick="xoasp(this)">Xóa</div>
//             </div>
//             <div class="text">
//                 <div class="text-text">
//                     <h3>
//                         ${giohang[i].ten}
//                     </h3>
//                 </div>
//             </div>
//             <div class="gia">
//                 <h3>${giohang[i].gia}đ</h3>
//                 <div class="choosenumber">
//                     <div class="abate" data-cartid="2">-</div>
//                     <div class="number">${giohang[i].soluong}</div>
//                     <div class="augment" data-cartid="2">+</div>
//                 </div>
//             </div>
//             </div>
//         `;
//         document.querySelector("#info").innerHTML += codesp;
//     }
// }



var giohang;



const reloads = () => {
    giohang = localStorage.getItem('giohang');
    giohang = JSON.parse(giohang);
    document.querySelector("#soluong").innerText = giohang.length;
    document.querySelector("#info").innerHTML  = "";
    let rowHtml = '';
    giohang.forEach((item, index) => {
        
        rowHtml +=`
        
        <div class="box">
            <div class="hinhanh">
            <img src="${item.bosuutap[0]}" alt="">
             <div class="text-hinhanh" onclick="xoasp(${index})">Xóa</div>
             </div>
             <div class="text">
                 <div class="text-text">
                     <h3>
                         ${item.ten}
                     </h3>
                 </div>
             </div>
             <div class="gia">
                 <h3>${item.gia}đ</h3>
                 <div class="choosenumber">
                     <div class="abate" data-cartid="2" onclick = "giamitem(${index})">-</div>
                     <div class="number">${item.soluong}</div>
                     <div class="augment" data-cartid="2" onclick = "themitem(${index})">+</div>
                 </div>
             </div>
             </div>
        `
    })
    document.querySelector("#info").innerHTML += rowHtml;
    
    tinhtien();
}
reloads();
const xoasp = (index) => {

    giohang.splice(index, 1);
    localStorage.setItem("giohang", JSON.stringify(giohang));
    reloads();
    location.reload();
}


function tinhtien(){
    var tong = 0;
    for (const item of giohang) {
        tong = tong + (parseInt(item.gia)) * item.soluong; 
    }
    document.querySelector("#tongtien").innerText = tong;
}

function themitem(index){
        // var chuaMua = true;
        //             // Kiểm tra giỏ hàng đã có sản phẩm này chưa
        //             for(var item of giohang){
        //                 if(item.soluong == giohang.soluong){
        //                     item.soluong++;
        //                     chuaMua = false;
        //                     break;
        //                 }
        //             }
    
    // giohang.forEach((item,index) =>{
    //     item.soluong++;
    //     localStorage.setItem("giohang", JSON.stringify(giohang));
    // })
    giohang[index].soluong++;
    localStorage.setItem("giohang", JSON.stringify(giohang));
    document.querySelector(".number").innerHTML = giohang.soluong;
    document.querySelector("#soluong").innerText = giohang.length;
    reloads();
} 
function giamitem(index){
    // giohang.forEach((item,index) =>{
    //     item.soluong --;
    //     localStorage.setItem("giohang", JSON.stringify(giohang));
    // })
    if(giohang[index].soluong > 1){
        giohang[index].soluong--;
        localStorage.setItem("giohang", JSON.stringify(giohang));
        document.querySelector(".number").innerHTML = giohang.soluong;
    }
    
    reloads();
}








