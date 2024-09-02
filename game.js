// // function act(){
// //     document.this.

// // }
// $(document).ready(function() {
//     $("span").click(function () {
//         if (!$(this).hasClass("active")) {
//             $(this).addClass("active").siblings("span").removeClass("active");
//                     $(this).siblings("span").removeClass("active");
//         }
//     });
//     $("").click(function() {
//         $(this).siblings("span").removeClass("active");
//     });
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// document.getElementById("bg-color1").addEventListener("click", myFunction);
// document.getElementById("bg-color2").addEventListener("click", myFunction);
// document.getElementById("bg-color3").addEventListener("click", myFunction);

// function myFunction() {
//     // var df = document.getElementById("bg-color1");
//     var myarray = new Array(13);

//     for (i = 1; i < 13; i++)
//         myarray[i] = new Array(13);

//     myarray[1][4] = document.getElementById("bg-color1");
//     myarray[1][5] = document.getElementById("bg-color2");
//     myarray[1][6] = document.getElementById("bg-color3");

//     var row = this.getAttribute("data-x");
//     var col = this.getAttribute("data-y");
//     // df.setAttribute("data-y", + show+3);
//     // this.style.backgroundColor = 'lightgray';
//     // myarray[row][col].style.backgroundColor = 'red';
// // this.setAttribute("data-y", + col+3);
// // col=this.innerHTML= this.getAttribute("data-y");
// }



var arr1 = new Array(17);
for (row = 0; row < 18; row++) {
    arr1[row] = new Array(3);
}

// store value in it.......
// box-upper

// var inum = 1;

// for (var q = 0; q < 18; q++) {
//     for (var r = 0; r < 3; r++) {
//         arr1[0][0] = document.getElementById("bg-color" + inum);
//         alert("bg-color" + inum);
//         inum++;
//     }
// }



////////////////////////////////////////////////
arr1[0][0] = document.getElementById("bg-color1");
arr1[0][1] = document.getElementById("bg-color2");
arr1[0][2] = document.getElementById("bg-color3");


arr1[1][0] = document.getElementById("bg-color4");
arr1[1][1] = document.getElementById("bg-color5");
arr1[1][2] = document.getElementById("bg-color6");

arr1[2][0] = document.getElementById("bg-color7");
arr1[2][1] = document.getElementById("bg-color8");
arr1[2][2] = document.getElementById("bg-color9");
// box-1
arr1[3][0] = document.getElementById("bg-color10");
arr1[3][1] = document.getElementById("bg-color11");
arr1[3][2] = document.getElementById("bg-color12");


arr1[4][0] = document.getElementById("bg-color22");
arr1[4][1] = document.getElementById("bg-color23");
arr1[4][2] = document.getElementById("bg-color24");

arr1[5][0] = document.getElementById("bg-color34");
arr1[5][1] = document.getElementById("bg-color35");
arr1[5][2] = document.getElementById("bg-color36");
// box-2
arr1[6][0] = document.getElementById("bg-color13");
arr1[6][1] = document.getElementById("bg-color14");
arr1[6][2] = document.getElementById("bg-color15");


arr1[7][0] = document.getElementById("bg-color25");
arr1[7][1] = document.getElementById("bg-color26");
arr1[7][2] = document.getElementById("bg-color27");

arr1[8][0] = document.getElementById("bg-color37");
arr1[8][1] = document.getElementById("bg-color38");
arr1[8][2] = document.getElementById("bg-color39");

// box-3
arr1[9][0] = document.getElementById("bg-color16");
arr1[9][1] = document.getElementById("bg-color17");
arr1[9][2] = document.getElementById("bg-color18");


arr1[10][0] = document.getElementById("bg-color28");
arr1[10][1] = document.getElementById("bg-color29");
arr1[10][2] = document.getElementById("bg-color30");

arr1[11][0] = document.getElementById("bg-color40");
arr1[11][1] = document.getElementById("bg-color41");
arr1[11][2] = document.getElementById("bg-color42");

// box-4
arr1[12][0] = document.getElementById("bg-color19");
arr1[12][1] = document.getElementById("bg-color20");
arr1[12][2] = document.getElementById("bg-color21");


arr1[13][0] = document.getElementById("bg-color31");
arr1[13][1] = document.getElementById("bg-color32");
arr1[13][2] = document.getElementById("bg-color33");

arr1[14][0] = document.getElementById("bg-color43");
arr1[14][1] = document.getElementById("bg-color44");
arr1[14][2] = document.getElementById("bg-color45");

// b0x-lower
arr1[15][0] = document.getElementById("bg-color46");
arr1[15][1] = document.getElementById("bg-color47");
arr1[15][2] = document.getElementById("bg-color48");


arr1[16][0] = document.getElementById("bg-color49");
arr1[16][1] = document.getElementById("bg-color50");
arr1[16][2] = document.getElementById("bg-color51");

arr1[17][0] = document.getElementById("bg-color52");
arr1[17][1] = document.getElementById("bg-color53");
arr1[17][2] = document.getElementById("bg-color54");
// array populate close............./////////////////////


// //////////////////////.....COLORS SHOP.......//////////////////////////////////////..........////.

var color = [
    {
        name: "bg-r", count: 9
    },

    {
        name: "bg-g", count: 9
    },
    {
        name: "bg-b", count: 9
    },
    {
        name: "bg-w", count: 9
    },
    {
        name: "bg-y", count: 9
    },
    {
        name: "bg-o", count: 9
    }
]

///././././../././././././../././.././././././././././././././././././././././././././../././././././././././../././././..

var max, min, cn;
max = 6; min = 0;
var cr = 0; var co = 0; var cy = 0; var cg = 0; var cw = 0; var cb = 0;

function press() {

    if (color[0]["count"] == 0 && color[1]["count"] == 0 && color[2]["count"] == 0 &&
        color[3]["count"] == 0 && color[4]["count"] == 0 && color[5]["count"] == 0) {

        color[0]["count"] = 9; color[1]["count"] = 9; color[2]["count"] = 9;
        color[3]["count"] = 9; color[4]["count"] = 9; color[5]["count"] = 9;
    }

    for (var i = 0; i < 18; i++) {
        for (var j = 0; j < 3; j++) {

            var y;
            do {
                y = Math.floor(Math.random() * (max - min)) + min;
            }
            while (color[y]["count"] == 0)

            cn = color[y]["name"];
            arr1[i][j].className = cn;
            color[y]["count"] = color[y]["count"] - 1;
        }
    }


}

for (var o = 0; o < 18; o++) {
    for (var p = 0; p < 3; p++) {
        arr1[o][p].addEventListener("click", myfun);


    }
}
var a, xnnum1, xnnum2, xnnum3, t0, t1, t2;

let xn = 55; let yn = 55;
function myfun() {
    var rang;
    xn = this.getAttribute("data-x");
    yn = this.getAttribute("data-y");

    var col = Number(xn);
    var col2 = Number(yn);


    this.style.boxShadow = "0px 0px 100px lightblue";
    this.style.border = "solid 10px  black";

    // // alert(xn + "," + yn)
    // this.removeEventListener("click", myfun2);
}
function myfun2() {


    for (var o = 0; o < 18; o++) {
        for (var p = 0; p < 3; p++) {
            // arr1[o][p].removeEventListener("dblclick", myfun);
            arr1[o][p].style.boxShadow = "none";
            arr1[o][p].style.border = "none";
        }
    }
    xn = 1000;
    yn = 1000;

}

function oper(a) {

    if (xn >= 55 && yn >= 55) {
        alert("Please Select The Box First");
    }

    switch (a) {

        case 'up':

            xn = Number(xn);
            yn = Number(yn);



            if (xn == 1 || xn == 2 || xn == 6 || xn == 7 || xn == 8 || xn == 12 || xn == 13 || xn == 14 || xn == 15 || xn == 16 || xn == 17) {
                xn = 0;
            }

            if ((xn == 9 || xn == 10 || xn == 11) && (yn == 2)) { xn = 3; yn = 0; }
            if ((xn == 9 || xn == 10 || xn == 11) && (yn == 1)) { xn = 3; yn = 1; }
            if ((xn == 9 || xn == 10 || xn == 11) && (yn == 0)) { xn = 3; yn = 2; }


            if (xn == 0) {
                for (var t = 12; t <= 14; t++) {
                    xnnum1 = arr1[xn + (t - 12)][yn].className;   /* 0,0 */
                    xnnum2 = arr1[xn + (t - 6)][yn].className;  /*6,0 */
                    xnnum3 = arr1[xn + (t + 3)][yn].className; /*15,0 */



                    arr1[xn + (t + 3)][yn].className = arr1[xn + t][yn].className; /*12,0 to 15,0 */

                    arr1[xn + (t - 6)][yn].className = xnnum3;  /*15,0 to 6,0 */
                    arr1[xn + (t - 12)][yn].className = xnnum2;  /*6,0 to 0,0 */
                    arr1[xn + t][yn].className = xnnum1;   /*0,0 to 14,0 */
                }
            }

            if ((xn == 3 && yn == 0) || (xn == 4 && yn == 0) || (xn == 5 && yn == 0)) {
                xn = 3;
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[xn + (t - 3)][yn].className;  /*3,0 */
                    xnnum2 = arr1[xn - xn][yn + (5 - t)].className;   /*0,2 */
                    xnnum3 = arr1[14 - t][yn + 2].className;    /*11,2 */

                    arr1[xn - xn][yn + (5 - t)].className = xnnum1;   /* 3,0 to 0,2*/
                    arr1[xn + (t - 3)][yn].className = arr1[xn + 12][yn + (t - 3)].className; /* 15,0 to 3,0*/
                    arr1[xn + 12][yn + (t - 3)].className = xnnum3;   /* 11,2 to 15,0*/
                    arr1[14 - t][yn + 2].className = xnnum2; /* 0,2 to 11,2*/

                }
            }
            if ((xn == 3 && yn == 1) || (xn == 4 && yn == 1) || (xn == 5 && yn == 1)) {
                xn = 3;
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[xn + (t - 3)][yn].className;  /*3,1 */
                    xnnum2 = arr1[xn - 2][yn + (4 - t)].className;   /*1,2 */
                    xnnum3 = arr1[14 - t][yn].className;    /*11,1 */

                    arr1[xn - 2][yn + (4 - t)].className = xnnum1;   /* 3,1 to 1,2*/
                    arr1[xn + (t - 3)][yn].className = arr1[xn + 13][yn - (4 - t)].className; /* 16,0 to 3,1*/
                    arr1[xn + 13][yn - (4 - t)].className = xnnum3;   /* 11,1 to 16,0*/
                    arr1[14 - t][yn].className = xnnum2; /* 1,2 to 11,1*/

                }
            }

            if ((xn == 3 && yn == 2) || (xn == 4 && yn == 2) || (xn == 5 && yn == 2)) {
                xn = 3;
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[xn + (t - 3)][yn].className;  /*3,2 */
                    xnnum2 = arr1[xn - 1][yn + (3 - t)].className;   /*2,2 */
                    xnnum3 = arr1[14 - t][yn - 2].className;    /*11,0 */

                    arr1[xn - 1][yn + (3 - t)].className = xnnum1;   /* 3,2 to 2,2*/
                    arr1[xn + (t - 3)][yn].className = arr1[xn + 14][yn - (5 - t)].className; /* 17,0 to 3,2*/
                    arr1[xn + 14][yn - (5 - t)].className = xnnum3;   /* 11,0 to 17,0*/
                    arr1[14 - t][yn - 2].className = xnnum2; /* 2,2 to 11,0*/

                }
            }
            break;

        case 'down':


            xn = Number(xn);
            yn = Number(yn);
            if (xn == 1 || xn == 2 || xn == 6 || xn == 7 || xn == 8 || xn == 12 || xn == 13 || xn == 14 || xn == 15 || xn == 16 || xn == 17) {
                xn = 0;
            }

            if ((xn == 9 || xn == 10 || xn == 11) && (yn == 2)) { xn = 3; yn = 0; }
            if ((xn == 9 || xn == 10 || xn == 11) && (yn == 1)) { xn = 3; yn = 1; }
            if ((xn == 9 || xn == 10 || xn == 11) && (yn == 0)) { xn = 3; yn = 2; }

            if (xn == 0) {
                for (var t = 12; t <= 14; t++) {
                    xnnum1 = arr1[xn + (t - 12)][yn].className;   /* 0,0 */
                    xnnum2 = arr1[xn + (t - 6)][yn].className;  /*6,0 */

                    arr1[xn + (t - 12)][yn].className = arr1[xn + t][yn].className;   /*12,0 to 0,0 */
                    arr1[xn + t][yn].className = arr1[xn + (t + 3)][yn].className;  /*15,0 to 12,0 */
                    arr1[xn + (t + 3)][yn].className = xnnum2;  /*6,0 to 15,0 */
                    arr1[xn + (t - 6)][yn].className = xnnum1;  /*0,0 to 6,0 */

                }
            }

            if ((xn == 3 && yn == 0) || (xn == 4 && yn == 0) || (xn == 5 && yn == 0)) {
                xn = 3;
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[xn + (t - 3)][yn].className;  /*3,0 */
                    xnnum2 = arr1[xn - xn][yn + (5 - t)].className;   /*0,2 */
                    xnnum3 = arr1[14 - t][yn + 2].className;    /*11,2 */


                    arr1[xn + (t - 3)][yn].className = xnnum2;   /* 0,2 to 3,0*/

                    arr1[14 - t][yn + 2].className = arr1[xn + 12][yn + (t - 3)].className;   /* 15,0 to 11,2*/
                    arr1[xn + 12][yn + (t - 3)].className = xnnum1; /* 3,0 to 15,0*/
                    arr1[xn - xn][yn + (5 - t)].className = xnnum3; /* 11,2 to 0,2*/
                }
            }
            if ((xn == 3 && yn == 1) || (xn == 4 && yn == 1) || (xn == 5 && yn == 1)) {
                xn = 3;
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[xn + (t - 3)][yn].className;  /*3,1 */
                    xnnum2 = arr1[xn - 2][yn + (4 - t)].className;   /*1,2 */
                    xnnum3 = arr1[14 - t][yn].className;    /*11,1 */

                    arr1[xn + (t - 3)][yn].className = xnnum2;   /* 1,2 to 3,1*/
                    arr1[14 - t][yn].className = arr1[xn + 13][yn - (4 - t)].className;   /* 16,0 to 11,1*/
                    arr1[xn + 13][yn - (4 - t)].className = xnnum1;  /* 3,1 to 16,0*/
                    arr1[xn - 2][yn + (4 - t)].className = xnnum3; /* 11,1 to 1,2*/
                }
            }

            if ((xn == 3 && yn == 2) || (xn == 4 && yn == 2) || (xn == 5 && yn == 2)) {
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[xn + (t - 3)][yn].className;  /*3,2 */
                    xnnum2 = arr1[xn - 1][yn + (3 - t)].className;   /*2,2 */
                    xnnum3 = arr1[14 - t][yn - 2].className;    /*11,0 */

                    arr1[xn + (t - 3)][yn].className = xnnum2;   /* 2,2 to 3,2*/
                    arr1[14 - t][yn - 2].className = arr1[xn + 14][yn - (5 - t)].className;   /* 17,0 to 11,0*/
                    arr1[xn + 14][yn - (5 - t)].className = xnnum1; /* 3,2 to 17,0*/
                    arr1[xn - 1][yn + (3 - t)].className = xnnum3; /* 11,0 to 2,2*/
                }
            }


            break;

        case 'left':

            xn = Number(xn);
            yn = Number(yn);

            if (((xn == 0 && yn == 0) || (xn == 0 && yn == 1) || (xn == 0 && yn == 2)) ||
                ((xn == 15 && yn == 0) || (xn == 15 && yn == 1) || (xn == 15 && yn == 2))) {
                xn = 0; yn = 0;
                for (t = 3; t <= 5; t++) {
                    m1 = arr1[(xn + 3) + (t - 3)][yn].className;  /*3,0 */
                    m2 = arr1[xn][yn + (5 - t)].className;   /*0,2 */
                    m3 = arr1[14 - t][yn + 2].className;    /*11,2 */


                    arr1[(xn + 3) + (t - 3)][yn].className = m2;   /* 0,2 to 3,0*/

                    arr1[14 - t][yn + 2].className = arr1[(xn + 3) + 12][yn + (t - 3)].className;   /* 15,0 to 11,2*/
                    arr1[(xn + 3) + 12][yn + (t - 3)].className = m1; /* 3,0 to 15,0*/
                    arr1[xn][yn + (5 - t)].className = m3; /* 11,2 to 0,2*/


                }
            }

            if (((xn == 1 && yn == 0) || (xn == 1 && yn == 1) || (xn == 1 && yn == 2)) ||
                ((xn == 16 && yn == 0) || (xn == 16 && yn == 1) || (xn == 16 && yn == 2))) {
                xn = 1; yn = 1;
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[(xn + 2) + (t - 3)][yn].className;  /*3,1 */
                    xnnum2 = arr1[(xn + 2) - 2][yn + (4 - t)].className;   /*1,2 */
                    xnnum3 = arr1[14 - t][yn].className;    /*11,1 */

                    arr1[(xn + 2) + (t - 3)][yn].className = xnnum2;   /* 1,2 to 3,1*/
                    arr1[14 - t][yn].className = arr1[(xn + 2) + 13][yn - (4 - t)].className;   /* 16,0 to 11,1*/
                    arr1[(xn + 2) + 13][yn - (4 - t)].className = xnnum1;  /* 3,1 to 16,0*/
                    arr1[(xn + 2) - 2][yn + (4 - t)].className = xnnum3; /* 11,1 to 1,2*/
                }
            }

            if (((xn == 2 && yn == 0) || (xn == 2 && yn == 1) || (xn == 2 && yn == 2)) ||
                ((xn == 17 && yn == 0) || (xn == 17 && yn == 1) || (xn == 17 && yn == 2))) {
                xn = 2; yn = 2; xnz = 3;
                for (t = 3; t <= 5; t++) {
                    xnnum1 = arr1[xnz + (t - 3)][yn].className;  /*3,2 */
                    xnnum2 = arr1[xnz - 1][yn + (3 - t)].className;   /*2,2 */
                    xnnum3 = arr1[14 - t][yn - 2].className;    /*11,0 */

                    arr1[xnz + (t - 3)][yn].className = xnnum2;   /* 2,2 to 3,2*/
                    arr1[14 - t][yn - 2].className = arr1[xnz + 14][yn - (5 - t)].className;   /* 17,0 to 11,0*/
                    arr1[xnz + 14][yn - (5 - t)].className = xnnum1; /* 3,2 to 17,0*/
                    arr1[xnz - 1][yn + (3 - t)].className = xnnum3; /* 11,0 to 2,2*/

                }
                xnz++;

            }

            if (xn == 3 || xn == 6 || xn == 9 || xn == 12) {

                xn = 3; yn = 0;

                // BOX ROTAITION
                var tf = new Array(2);
                for (ro = 0; ro <= 2; ro++) {
                    tf[ro] = new Array(2);
                }

                for (var i = 0; i <= 2; i++) {
                    for (var j = 0; j <= 2; j++) {

                        tf[i][j] = arr1[i][j].className;
                    }
                }
                // CLOCK WISE ROTAITION
                arr1[0][0].className = arr1[2][0].className;
                arr1[1][0].className = arr1[2][1].className;
                arr1[2][0].className = arr1[2][2].className;

                arr1[2][1].className = arr1[1][2].className;
                arr1[0][1].className = tf[1][0];

                arr1[2][2].className = tf[0][2];
                arr1[1][2].className = tf[0][1];
                arr1[0][2].className = tf[0][0];

                for (t = 12; t <= 15; t++) {

                    xnnum1 = arr1[xn + 3][yn + (t - 12)].className;  /*6,012 */
                    xnnum2 = arr1[xn][yn + (t - 12)].className;   /*3,012 */
                    xnnum3 = arr1[xn + 6][yn + (t - 12)].className;    /*9,012 */



                    arr1[xn][yn + (t - 12)].className = xnnum1;   /* 6,0 to 3,0*/
                    arr1[xn + 6][yn + (t - 12)].className = arr1[xn + 9][yn + (t - 12)].className;   /* 12,0 to 9,0*/
                    arr1[xn + 9][yn + (t - 12)].className = xnnum2; /* 3,0 to 12,0*/
                    arr1[xn + 3][yn + (t - 12)].className = xnnum3; /* 9,0 to 6,0*/
                }
            }




            if (xn == 4 || xn == 7 || xn == 10 || xn == 13) {
                xn = 4; yn = 0;
                for (t = 12; t <= 15; t++) {

                    num1 = arr1[xn + 3][yn + (t - 12)].className;  /*7,012 */
                    num2 = arr1[xn][yn + (t - 12)].className;   /*4,012 */
                    num3 = arr1[xn + 6][yn + (t - 12)].className;    /*10,012 */



                    arr1[xn][yn + (t - 12)].className = num1;   /* 7,0 to 4,0*/
                    arr1[xn + 6][yn + (t - 12)].className = arr1[xn + 9][yn + (t - 12)].className;   /* 13,0 to 10,0*/
                    arr1[xn + 9][yn + (t - 12)].className = num2; /* 4,0 to 13,0*/
                    arr1[xn + 3][yn + (t - 12)].className = num3; /* 10,0 to 7,0*/
                }
            }

            if (xn == 5 || xn == 8 || xn == 11 || xn == 14) {
                xn = 5; yn = 0;
                for (t = 12; t <= 15; t++) {

                    num1 = arr1[xn + 3][yn + (t - 12)].className;  /*8,012 */
                    num2 = arr1[xn][yn + (t - 12)].className;   /*5,012 */
                    num3 = arr1[xn + 6][yn + (t - 12)].className;    /*11,012 */



                    arr1[xn][yn + (t - 12)].className = num1;   /* 8,0 to 5,0*/
                    arr1[xn + 6][yn + (t - 12)].className = arr1[xn + 9][yn + (t - 12)].className;   /* 14,0 to 11,0*/
                    arr1[xn + 9][yn + (t - 12)].className = num2; /* 5,0 to 14,0*/
                    arr1[xn + 3][yn + (t - 12)].className = num3; /* 11,0 to 8,0*/
                }
            }

            break;

        case 'right':
            alert("right click");


            break;


    }
}








