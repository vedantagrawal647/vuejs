//create instance -- it basically to control whole part or certain part of our applicaion
new Vue({
    el: '#vue-app',
    data:{
        message:'',
        typing:false,
        gb:null,
        mb:null

    },
    watch:{

        message(newValue,oldValue){

            console.log('new vale',newValue);
            console.log("old value",oldValue);
        
            this.typing=true;

            setTimeout(()=>{
                setTimeout(() => {
                    this.typing=false;
                }, 3000);
            })
        },

        gb(val)
        {
            this.mb=val*1024;
        },
        mb(val)
        {
            this.gb=val/1024;
        }
    }
    
    
});
