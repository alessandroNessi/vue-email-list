var app = new Vue({
    el: "#root",
    data: {
        usersMails:[],
        userId :0
    },
    methods:{
        addUser(n){
            if(n>0){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response)=>{
                    if(response.data.success){
                        this.usersMails.push({'id':this.userId,'email': response.data.response});
                        this.userId++;
                        alert(this.userId);
                        this.addUser(n-1);
                    }
                });
            }
        }
    },
    mounted:
        function(){
                this.addUser(10);
        }
});