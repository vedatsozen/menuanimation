document.getElementById("intro").addEventListener("mouseover", function() {
document.getElementById("line").classList.add("tointro");
document.getElementById("line").classList.remove("toprojects");
document.getElementById("line").classList.remove("toabout");
document.getElementById("line").classList.remove("tocontact");
})

document.getElementById("projects").addEventListener("mouseover", function() {
    document.getElementById("line").classList.add("toprojects");
    document.getElementById("line").classList.remove("tointro");
    document.getElementById("line").classList.remove("toabout");
    document.getElementById("line").classList.remove("tocontact");
    })

    document.getElementById("about").addEventListener("mouseover", function() {
        document.getElementById("line").classList.add("toabout");
        document.getElementById("line").classList.remove("toprojects");
        document.getElementById("line").classList.remove("tointro");
        document.getElementById("line").classList.remove("tocontact");
        })

        document.getElementById("contact").addEventListener("mouseover", function() {
            document.getElementById("line").classList.add("tocontact");
            document.getElementById("line").classList.remove("toprojects");
            document.getElementById("line").classList.remove("toabout");
            document.getElementById("line").classList.remove("tointro");
            })
            
