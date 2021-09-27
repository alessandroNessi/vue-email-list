var app = new Vue({
    el: "#root",
    data: {
        usersMails:[],
        userId :0,
        n:"",
        onChange:false
    },
    methods:{
        addUser(){
            this.n=parseInt(this.n);
            if(this.n>0){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response)=>{
                    if(response.data.success){
                        this.usersMails.push({'id':this.userId,'email': response.data.response});
                        this.userId++;
                        this.n--;
                        this.addUser();
                    }
                });
            }
        },
        deleteUser(index){
            this.usersMails.splice(index,1);
        },
        startChange(index){
            this.onChange=index;
        },
        change(){
            let changeValue=document.getElementById("changeValue");
            if(changeValue.value!=""&&changeValue.value.includes("@")&&changeValue.value.includes(".")){
                this.usersMails[this.onChange].email=changeValue.value;
                changeValue.value="";
            }else{
                alert("mail not valid");
            }
            this.onChange=false;
        }
    }
});