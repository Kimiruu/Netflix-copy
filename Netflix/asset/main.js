const goleft = (x) => {
    
    var section = document.getElementById(x)
    var scrollLeft = section.scrollLeft
    var Width = section.offsetWidth
    section.scroll({
        left:scrollLeft-Width,
        behavior:"smooth"
    })

};

const goright = (x) => {
    
    var section = document.getElementById(x)
    var scrollLeft = section.scrollLeft
    var Width = section.offsetWidth
    section.scroll({
        left:scrollLeft+Width,
        behavior:"smooth"
    })

};