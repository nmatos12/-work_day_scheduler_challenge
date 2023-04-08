var date = dayjs().format('dddd, MMMM D YYYY');
$('#currentDay').append(date);

$(document).ready(function () {
    timeTracker();

    function timeTracker() {
        // Gets current hour
        var currentHour = dayjs().hour();

        // Loops over time blocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

            // Checks classes and adds or removes ones based on current hour
            if (blockHour < currentHour) {
                $(this).removeClass('future present').addClass('past');

            }
            else if (blockHour === currentHour) {
                $(this).removeClass('past future').addClass('present');

            }
            else if (blockHour > currentHour) {
                $(this).removeClass('present past').addClass('future');

            };
        });
    };

    // Btn click listener
    var btns = $('.time-block button');
    btns.click(storeEvent);

    function storeEvent() {
        console.log('Hello store event');
        var btn = $(this);
        var time = (btn).parent().attr('id').split('-')[1];
        var text = (btn).siblings('.description').val();
        localStorage.setItem(time, text);
    }

    // Get item from local storage if any
    $('#hour-9 .description').val(localStorage.getItem('9'));
    $('#hour-10 .description').val(localStorage.getItem('10'));
    $('#hour-11 .description').val(localStorage.getItem('11'));
    $('#hour-12 .description').val(localStorage.getItem('12'));
    $('#hour-13 .description').val(localStorage.getItem('13'));
    $('#hour-14 .description').val(localStorage.getItem('14'));
    $('#hour-15 .description').val(localStorage.getItem('15'));
    $('#hour-16 .description').val(localStorage.getItem('16'));
    $('#hour-17 .description').val(localStorage.getItem('17'));

});