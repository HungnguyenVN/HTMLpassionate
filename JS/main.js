
let ache = document.getElementById("image");
function change() { 
    if (
        ache.src == "https://daohieu.com/wp-content/uploads/2020/05/con-tho-trang-co-mat-do-1024x910.jpg"
    ) {
        ache.src = "https://thocanh.com/wp-content/uploads/2017/04/tho-su-tu-lion-head.jpg"
    }else if(
        ache.src == "https://thocanh.com/wp-content/uploads/2017/04/tho-su-tu-lion-head.jpg"
    )
    {
        ache.src = "https://daohieu.com/wp-content/uploads/2020/05/con-tho-trang-co-mat-do-1024x910.jpg"
    };
    
    // if (
    //     ache.src == "https://thocanh.com/wp-content/uploads/2017/04/tho-su-tu-lion-head.jpg"
    // ) {
    //     ache.src = "https://daohieu.com/wp-content/uploads/2020/05/con-tho-trang-co-mat-do-1024x910.jpg"
    // };
  
}


