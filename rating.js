document.addEventListener('DOMContentLoaded', function(){
    var s1=document.querySelector('.star1-label');
    var s2=document.querySelector('.star2-label');
    var s3=document.querySelector('.star3-label');
    var s4=document.querySelector('.star4-label');
    var s5=document.querySelector('.star5-label');

    var star_1=document.getElementById('star1');
    var star_2=document.getElementById('star2');
    var star_3=document.getElementById('star3');
    var star_4=document.getElementById('star4');
    var star_5=document.getElementById('star5');

    var rating_msg=document.getElementById('rating-message');
    var rating_stars=document.getElementById('rating-stars');

    var rest_btn = document.getElementById('rest-btn');



   // var stars=[s1,s2,s3,s4,s5];


    //mouse enter event
    /*stars.forEach(function(star, index){
        star.addEventListener('mouseenter', function(){
            for(var i =0; i <= index; i++){
                star[i].style.color='gold';
            }
        })
    })*/
    
    s1.addEventListener('mouseenter',function(){
        s1.style.color='gold';
    })
    s2.addEventListener('mouseenter',function(){
        s1.style.color='gold';
        s2.style.color='gold';
    })
    s3.addEventListener('mouseenter',function(){
        s1.style.color='gold';
        s2.style.color='gold';
        s3.style.color='gold';
    })
    s4.addEventListener('mouseenter',function(){
        s1.style.color='gold';
        s2.style.color='gold';
        s3.style.color='gold';
        s4.style.color='gold';
    })
    s5.addEventListener('mouseenter',function(){
        s1.style.color='gold';
        s2.style.color='gold';
        s3.style.color='gold';
        s4.style.color='gold';
        s5.style.color='gold';
    })
    


    //mouse leave event
    /*stars.forEach(function(star, index){
        star.addEventListener('mouseenter', function(){
            for(var i =0; i <= index; i++){
                star[i].style.color='grey';
            }
        })
    })*/
    
    s1.addEventListener('mouseleave',function(){
        if(!s1.classList.contains('clicked'))
            s1.style.color='grey';
    })
    s2.addEventListener('mouseleave',function(){
        if(!s2.classList.contains('clicked')){
            s1.style.color='grey';
            s2.style.color='grey';
        }
    })
    s3.addEventListener('mouseleave',function(){

        if(!s3.classList.contains('clicked')){
            s1.style.color='grey';
            s2.style.color='grey';
            s3.style.color='grey';
        }
    })
    s4.addEventListener('mouseleave',function(){
        if(!s4.classList.contains('clicked')){
            s1.style.color='grey';
            s2.style.color='grey';
            s3.style.color='grey';
            s4.style.color='grey';    
        }
    })
    s5.addEventListener('mouseleave',function(){

        if(!s5.classList.contains('clicked')){
            s1.style.color='grey';
            s2.style.color='grey';
            s3.style.color='grey';
            s4.style.color='grey';
            s5.style.color='grey';
        }
    });
    

    //click event
    star_1.addEventListener('click',function(){
        s1.classList.add('clicked');
        hide_stars(1);
    });
    star_2.addEventListener('click',function(){
        s1.classList.add('clicked');
        s2.classList.add('clicked');
        hide_stars(2);
    });

    star_3.addEventListener('click',function(){
        s1.classList.add('clicked');
        s2.classList.add('clicked');
        s3.classList.add('clicked');
        hide_stars(3);
    });

    star_4.addEventListener('click',function(){
        s1.classList.add('clicked');
        s2.classList.add('clicked');
        s3.classList.add('clicked');
        s4.classList.add('clicked');
        hide_stars(4);

    });

    star_5.addEventListener('click',function(){
        s1.classList.add('clicked');
        s3.classList.add('clicked');
        s3.classList.add('clicked');
        s4.classList.add('clicked');
        s5.classList.add('clicked');
        hide_stars(5);

    });

    document.documentElement.classList.add('js-enabled');

    //function to hide stars when any stars is being clicked
    function hide_stars(val){
        rating_stars.style.display='none';
        showMessage(val);
        sendToEndpoint(val);

    }

    //function to show message
    function showMessage(val){
        var rating_val = val;
        
        if(rating_val >= 4){
            rating_msg.textContent='Thanks for the ' + rating_val + ' stars rating!';
        }
        else{
            rating_msg.textContent='Thanks for your feedback of ' + rating_val+ ' stars. We will try to do better!';
        }
        rating_msg.style.display='block';

    }


    //function send info to fake endpoint
    function sendToEndpoint(val){
        var endpoint ='https://httpbin.org/post';
        var form_data=new FormData();

        form_data.append('question:','How satisfied are you?');
        form_data.append('rating',val);


        fetch(endpoint,{
            method:'POST',
            headers:{
                'X-Sent-By' :'JavaScript'
            },
            body: form_data
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error: ', error));
    }

    //function for resting
    
    rest_btn.addEventListener('click',function(){
        s1.classList.remove('clicked');
        s2.classList.remove('clicked');
        s3.classList.remove('clicked');
        s4.classList.remove('clicked');
        s5.classList.remove('clicked');

        s1.style.color='grey';
        s2.style.color='grey';
        s3.style.color='grey';
        s4.style.color='grey';
        s5.style.color='grey';


        rating_msg.style.display='none';
        rating_stars.style.display='block';



        
    })
    


});

