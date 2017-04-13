$(function () {

    const $totalCases = $('th:nth-child(2) span');
    const $totalTime = $('th:last-child span');
    let rate = 1;

    //add up case total
    function caseTotal() {
        let addUpCases = 0;
        $('input').each(function () {
            addUpCases += parseInt($(this).val());
        });
        $totalCases.text(addUpCases);
    };

    //case rates
    function caseRate() {
        if ($(this).attr('name') === 'days') {
            rate = 35;
        } else {
            rate = 45;
        }
    };

    //mins to hours and mins
    function hoursAndMins(element1, element2) {
        const mins = (element1 / rate) * 60;
        const hours = Math.floor(mins / 60);
        const minsLeft = mins % 60;
        element2.text(hours.toFixed(0) + ' hr(s) ' + minsLeft.toFixed(0) + ' min(s)');
    }
    
    //calculate time required per aisle
    function timeRequired() {
        const $span = $(this).parent().next().children('span');
        hoursAndMins($(this).val(), $span);
    }

    //add up time required
    function totalTimeRequired() {
        hoursAndMins($totalCases.text(), $totalTime);
    }

    //remove input value on click when 0
    function emptyInput() {
        if ($(this).val() === '0') {
            $(this).val('');
        }
    }

    //add 0 when input is empty
    function insertEmptyInput() {
        if ($(this).val() === '') {
            $(this).val(0);
        }
    }

    //total cases NaN
    function notANumber() {
        if ($totalCases.html() == 'NaN') {
            $totalCases.text('0');
        }
    }

    //input events
    $('input').keyup(caseTotal)
                .click(emptyInput)
                .blur(insertEmptyInput)
                .keyup(notANumber)
                .keyup(timeRequired)
                .keyup(totalTimeRequired)
                .keyup(caseRate);

});