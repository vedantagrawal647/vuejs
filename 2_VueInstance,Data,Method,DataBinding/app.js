//create instance -- it basically to control whole part or certain part of our applicaion
new Vue({
    el: '#vue-app',
    data:{
        name:'Vedant',
        job:'SDE',
        website:'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
        websiteTag:'<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> MailHome </a>'
    },
    methods:{
        great:function(time){
            this.name
            return'Good '+  time +' ' + this.name;
        }
    }
});

//el which element on the page this is going to control this view instance