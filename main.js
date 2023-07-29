nosex="";
nosey="";
function preload() {
    clownimg = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    pose_model = ml5.poseNet(video, modelloaded)
    pose_model.on("pose", getresults)
}

function modelloaded() {
    console.log("model loaded sucsefully")
}

function getresults(r) {
    if (r.length > 0) {
        nosex = r[0].pose.nose.x;
        nosey = r[0].pose.nose.y;
        console.log(nosex, nosey)
    }

}

function draw() {
    image(video, 0, 0, 300, 300);
// fill("red");
// stroke("blue")
// circle(nosex,nosey,30)
image(clownimg, nosex-20, nosey-5,40,40)

}

function take_pic() {
    save("mypic.png");
}