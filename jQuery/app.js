$(function () {

    let friends = ['Britt', 'Blake', 'Dalton', 'Meagan', 'Jasmine', 'Jordan', 'Tres', 'Josh', 'Landon'];
    let friendCounter  = 0;

    // let button = $('<button>Click Me!</button>');
    // button.appendTo($('body'));
    // $(button).on('click', function (e) {
    //     e.preventDefault();
    //     var str = "Hello There!";
    //     alert(str);
    // })

    $('#btnSubmit').prop('disabled', true);
    $("#btnBox").keyup(function () {
        if ($('#btnBox').val() == 0) {
            $('#btnSubmit').prop('disabled', true);
        } else {
            $('#btnSubmit').prop('disabled', false);
        }
    })

    $('#btnSubmit').on('click', function (e) {
        e.preventDefault();
        var str = $("#btnBox").val();
        $(str).append($('div'));
        alert(str);
    })

    let div = $('<div></div>');
    div.appendTo($('body'));
    $(document).ready(function () {
        $(div).css({
            'background-color': 'black',
            'height': '100px',
            'width': '100px',
            'margin-top': '10px'
        }).insertAfter('#form');

        $(div).on("mouseover", function () {
            div.css({
                'background-color': 'tomato'
            });
        })
        $(div).on("mouseleave", function () {
            div.css({
                'background-color': 'black'
            });
        })
    })

    let para = $("<p>When I click this paragraph the color will change.</p>");
    para.appendTo($('body'));

    $(para).on("click", function () {
        para.css({
            'color': 'tomato'
        });
    });

    let button = $('<button>Click Me</button>');
    button.appendTo($('body'));
    let div2 = $('<div></div>');
    div2.appendTo($('body'));
    div2.css({
        'background-color': 'tomato',
        'height': '30px',
        'width': '100px',
        'margin-top': '10px'
    });
    
    button.on("click", function () {
        let span = $('<span>Niki Beck</span>');
        span.css({
            'color': 'white'
        });
         span.appendTo(div2);
    });

    let button2 = $('<button>My Friends</button>');
    button2.appendTo($('body'));
    button2.css({
        'marginTop': '10px'
    });
    
        let ul = $("<ul></ul>");
        ul.appendTo($('body'));
        
        button2.on('click', function(){
            if (friends[friendCounter]) {
                let li = $("<li>" + friends[friendCounter] + "</li>");
                li.appendTo(ul);
                friendCounter++;
            }

        })
    
})