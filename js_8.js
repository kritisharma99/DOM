let a = document.querySelectorAll("#SIvCob a");
[...a].forEach((el) => {
    var arr = ['हिन्दी','తెలుగు','தமிழ்']
    if(arr.includes(el.innerText))
    {
        el.remove();
    }
});