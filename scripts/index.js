var app = new Vue({
    el: "#root",
    data: {
        usersMails:[],
        userId :0
    },
    methods:{
        requestUser(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((answer)=>{
                if(answer.data.success){
                    let mail=answer.data.response;
                    return mail;
                }
            });
        },
        addUser(data){
            // console.log(data);
            this.usersMails.push({"email":data});
            this.userId++;
        }
    },
    mounted:
        function(){
            console.log(this.requestUser());
            // while(this.usersMails.length<10){
                // let temp= this.requestUser();
                // console.log(temp);
                // this.addUser(temp);
            // }
        }
});