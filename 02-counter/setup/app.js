let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll('.btn');


btns.forEach((item)=>{
    item.addEventListener('click',(e)=>{
       const styles = e.currentTarget.classList;
       if(styles.contains('decrease')){
           count --;
       }else if(styles.contains('reset')){
           count = 0;
       }else if(styles.contains("increase")){
           count ++;
       }

       value.textContent = count;
    })

})