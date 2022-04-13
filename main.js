 
 const sidebarlist = document.querySelectorAll('.sidebar-list-item');
 const leftpage = document.querySelector('.left-page');
 const rightpage = document.querySelector('.right-page');

 const changeActiveItem = () => {
    sidebarlist.forEach(item => {
        item.classList.remove('active');
    })
}
sidebarlist.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    })
})
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click',() => {
    leftpage.style.display = 'block';
    document.querySelector('.right-page').style.margin = "0px 7px 0px 5px";
})
// const menuBtn = document.getElementById('menu-btn');
// menuBtn.addEventListener('click',() => {
//     if(leftpage.style.display !== 'none'){
//         alert('this Element is block'); 
//         leftpage.style.display = 'block';
//         document.querySelector('.right-page').style.margin = "0px 7px 0px 5px";
//     }
    
// });

// menuBtn.addEventListener('click',(e) => {
//     e.stopPropagation();
//     if(leftpage.style.display == 'block')
//     {
//         alert('anh day'); 
//         leftpage.style.display = 'none';
//         document.querySelector('.right-page').style.marginLeft = "-13rem";
//     }
    
// });





