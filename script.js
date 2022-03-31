$(document).ready(function () {



    $('.rateBtn').click(function (){
        $('.rateBtn').removeClass('clicked')
        $(this).addClass('clicked')

        if ($(this).data('clicked')){
            console.log(this.value)
        } else {
            var rating = "You selected " + $(this).val() + " out of 5";
            localStorage.setItem("getvalue", rating);
        }

    })










})