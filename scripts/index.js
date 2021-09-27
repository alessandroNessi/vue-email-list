var app = new Vue({
    el: "#root",
    data: {
        cippa: 3
    },
    methods:{

    },
    mounted:
        function(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response)=>{
                if(response.data.success){
                    console.log(response);
                }
            });
    }
});