function Bulb(){
    var image = document.getElementById('Image');
    if (image.src.match("BulbOff.png")) {
        image.src = "BulbOn.png";
        document.getElementById("BulbButton").value = "Turn Off"
    } else {
        document.getElementById("BulbButton").value = "Turn On"
        image.src = "BulbOff.png";
    }
}