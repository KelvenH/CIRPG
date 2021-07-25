
var winTrigger =  document.getElementById('winTrigger');
if (typeof(winTrigger) != 'undefined' && winTrigger != null){
    function preventClosure(event){
        // Cancel the event as stated by the standard.
        event.preventDefault();
        // Chrome requires returnValue to be set.
        event.returnValue = 'Are you sure you want to exit?';
    }
    window.addEventListener('beforeunload', preventClosure);
}


// Extract csrf and newly generated weapon json
const csrf = document.querySelector('[name=csrfmiddlewaretoken]').value;
const newWeapon = document.getElementById('id_new_weapon').textContent; 

// Remove these elements from the DOM
document.querySelector('[name=csrfmiddlewaretoken]').remove();
document.getElementById('id_new_weapon').remove();

// Ajax request for when the user clicks on "New Weapon" 
// Submits the newWeapon dictionary back to Loot view
// To save to the DB.
// Also amends the DOM to reflect users.
$("#newButton").click(function() {
    $.ajax({
        type: "POST",
        url: "/battle/loot/",
        headers: {'X-CSRFToken': csrf},
        data: {
            'newWeapon': newWeapon
        },
        success: function(){
            $(".loot-button-container").addClass("d-none");
            $("#oldWeapon").addClass("d-none");
            $(".continue-button-container").removeClass("d-none");
            window.removeEventListener("beforeunload", preventClosure);
        }
    });
});

// Function to remove "new weapon" button, remove new weapon
// Container, and add "continue" button container
$("#keepButton").click(function() {
    $(".loot-button-container").addClass("d-none");
    $("#newWeapon").addClass("d-none");
    $(".continue-button-container").removeClass("d-none");
    window.removeEventListener("beforeunload", preventClosure);
});

    
