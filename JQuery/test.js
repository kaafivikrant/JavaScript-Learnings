//Selector

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     })
// })

//ID Selector

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#second").hide();
//     })
// })

//Class Selector

// $(document).ready(function(){ //It will perform when the page finish the loading
//     $("button").click(function(){ //select the event and element
//         $(".second").hide(); //element for the action
//     })
// })

// Add " * " to hide all the elements

// Add " this " to hide the current selector

// Add " :button " to hide all the button selector

// Add " p.demo " to get all the p elements with the class demo

// Add " ul li:first " to select the first li from the first ul

// Add " ul li:first:child " to select the first of all the ul

// Add " [href] " to select all the elements with an href attribute

// Add " a[target]='_blank' " to select all the elements with the target attribute equal to "blank"

// Add " a[target]!='_blank' " to select all the elements with the target attribute NOT equal to "blank"

// Add " tr:even " to select all even elements in the tr tag

// Add " tr:odd " to select all odd elements in the tr tag


/* Types of events 

Mouse Events:- 
-Click
-Dblclick
-mouse enter
-mouse leave

Keyboard Events:-
-keypress
-keydown
-keyup

Form Events:-
-submit
-changes
-focus
-blur

Document/Window Events:-
-load
-resize
-scroll
-unload

*/

//Adding alert 

// $(document).ready(function(){
//     $("button").mouseenter(function(){
//         alert("Broooooooooooh");
//     });
// });

//Adding multiple events

// $(document).ready(function(){
//     $("button").mouseenter(function(){
//         $("p").on({
//             mouseenter: function(){
//                 $(this).css("background-color","yellow");
//             },
//             mouseleave: function(){
//                 $(this).css("background-color","pink");
//             },
//             click: function(){
//                 $(this).css("background-color","red");
//             }
//         });
//     });
// });

//Show Hide 

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     });
//     $("button").dblclick(function(){
//         $("p").show();
//     });
// });

//Toggle

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle(800);
//     });
// });



