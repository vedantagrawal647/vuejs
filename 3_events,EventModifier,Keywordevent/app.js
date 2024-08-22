//create instance -- it basically to control whole part or certain part of our applicaion
new Vue({
    el: '#vue-app',
    data:{
        name:'Vedant',
        job:'SDE',
        website:'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
        websiteTag:'<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> MailHome </a>',
        age:25,
        x:0,
        y:0,
        count:0
    },
    methods:{
        great:function(time){
            this.name
            return'Good '+  time +' ' + this.name;
        },
        add:function(){
             this.age++;
        },
        subtract:function(){
             this.age--;
        },
        addTen:function(inc){
            this.age+=inc;
       },
       subtractTen:function(dec){
            this.age-=dec;
       },
       updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
            console.log(thix.x);
       },
       increment:function(){
            this.count++;
        },
        click:function(){
            alert("you clicked on this link");
        },
        logName:function(){
            console.log("you enter your name");
        },
        logAge:function(){
            console.log("you enter your age");
        },
        logDate:function(){
            console.log("you enter your date");
        }
    }
});

//el which element on the page this is going to control this view instance