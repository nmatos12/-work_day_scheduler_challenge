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

            }
        })

    }

    // Btn click listener
    var btns = $('.time-block button');
    btns.click(storeEvent);

    function storeEvent() {
        var btn = $(this);
        var time = $(btn).parent().attr('id').split('-')[1];
        var text = $(btn).siblings('.description').val();
        localStorage.setItem(time, text);
    }

    // Get item from local storage if any
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));

});