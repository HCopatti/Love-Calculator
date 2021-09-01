new Vue({
    el: '#menuApp',
    data: {
        
        fname: 'I',
        sname: 'You',
        btn1: 'Generate result',
        porcent: 0,
        num: 0,
        txt1: '',
    },
    
    computed:{

        // corBG(){
        //     offscreenBuffering(this.fname ==`` || this.sname == ``)
        // }
        
    },
    
    methods:{
        
        
        async clique(){

            if( this.fname == 'write' || this.sname == 'write'){
                document.querySelector('.alert').style.display ='block';
            }

            else if( this.fname == '' || this.sname == ''){
                document.querySelector('.alert').style.display ='block';
            }
            else{
                document.querySelector('.alert').style.display ='none';
            
                let resposta = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.fname}&sname=${this.sname}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                    "x-rapidapi-key": "70490572f0msh1c3bc0791a14f44p1d319bjsndce4face2da3"
                }
            })
            .then(response => {
                return response.json();
            })
    
            this.porcent = resposta.percentage
            this.txt1 = resposta.result
    
            console.log(resposta);

            }
    }
}
})