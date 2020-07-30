function Bulb(){
    var image = document.getElementById('Image');
    if (image.src.match("BulbOff.png")) {
        image.src = "BulbOn.png";
        document.getElementById("switch").value = "Turn Off"
    } else {
        document.getElementById("switch").value = "Turn On"
        image.src = "BulbOff.png";
    }
}