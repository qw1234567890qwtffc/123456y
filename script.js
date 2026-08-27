// 平滑滚动跳转
document.querySelectorAll('.nav-menu a').forEach(item=>{
    item.addEventListener('click',e=>{
        e.preventDefault();
        let target = document.querySelector(item.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    })
})

// 页面加载提示
window.onload = function(){
    console.log("简易计算器官网加载完成");
}