 canvas = new fabric.Canvas('myCanvas');
  x= document.getElementById("myAudio");

function new_image(get_image){
    fabric.Image.fromURL(get_image , function (Img) {
        birthday_img = Img;
        birthday_img.scaletoWidth(birthday_img_width);
        birthday_img.scaletoHeight(birthday_img_height);
        block_image_object.set({
            top: 0,
            left: 0
        });

        canvas.add(birthday_img);
    });
}
function playSound(){
	x.play();
}
