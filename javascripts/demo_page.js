$(document).ready(function() {


  //Material B is Stiffer than A video number 1 
  function material_B_stiffer(){
 
    var vids = ['https://www.youtube.com/embed/78aqHRAK8Qs'];
    var vids1 = ['https://www.youtube.com/embed/QIMo0jFbfQs'];


    var vidToken = '<iframe embed-responsive src="{{SRC}}?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';
    var vidToken1 = '<iframe embed-responsive src="{{SRC}}?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>'

    var currentVid = vidToken.replace('{{SRC}}', vids[0]);
    $('.content').html(currentVid);

    var currentVid1 = vidToken.replace('{{SRC}}', vids1[0]);
    $('.content1').html(currentVid1);
    
  //RADIO Buttons // Checking for the Right answer
  var correctAnswer = 3;
  $('input:radio[name="scale"]').change(
    function() {
      if ($(this).val() == correctAnswer) {
        // alert("okay")
        $("#myModal").show();
        $("#myModal").find(".modal-header").css("background", "green");
        $("#myModal").find("h4").html("Right Answer !!!");
        $('span').click(function() {
          $('#myModal').hide();
        });
      } else {
        //alert("wrong");
        $("#myModal").show();
        $("#myModal").find(".modal-header").css("background", "red");
        $("#myModal").find("h4").html("Wrong Answer !!!");
        $('span').click(function() {
          $('#myModal').hide();
        });
      }
      
     
    });
    
   
  }
  
   
  
  //Material A is STIFFER than B
  function material_A_Less_stiffer() {

    $('p').text("Material A is less stiffer than Material B");
    
    var material_A_Video2 = "https://www.youtube.com/embed/ycSycRPYngk";
     var material_A_Video1 = "https://www.youtube.com/embed/Xae-2BYWNzk";
   
    var vidToken = '<iframe embed-responsive src="{{SRC}}?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';

    var currentVid = vidToken.replace('{{SRC}}', material_A_Video1);
    $('.content').html(currentVid);

    var currentVid1 = vidToken.replace('{{SRC}}', material_A_Video2);
    $('.content1').html(currentVid1);
    
    
    var correctAnswer =  -3;
    $('input:radio[name="scale"]').change(
      function() {
        if ($(this).val() == correctAnswer) {
          // alert("okay")
          $("#myModal").show();
          $("#myModal").find(".modal-header").css("background", "green");
          $("#myModal").find("h4").html("Right Answer !!!");
          $('span').click(function() {
            $('#myModal').hide();
          });
        } else {
          //alert("wrong");
          $("#myModal").show();
          $("#myModal").find(".modal-header").css("background", "red");
          $("#myModal").find("h4").html("Wrong Answer !!!");
          $('span').click(function() {
            $('#myModal').hide();
          });
        }
      });

  }
  
  
  //NEXT Button 
  $("#next").click(function(e) {

      //RESET THE RADIO BOXES
  $('input:radio[name="scale"]').attr('checked', false);
   material_A_Less_stiffer();
   $("#next").text("Start").css("color","red").css("background-color","white");
   $("#next").click(function(e){
      // window.open("quiz_page.html"); //
        window.open("demo_page.html");
    });
    
  });
  
  
  
  //DEMO STARTS WITH MATERIAL B IS STIFFER THAN A
  material_B_stiffer();


});

//NOTES:
//1- CREATE IF CONDITION FOR THE VIDEOS
//if 2 videos are like switch to another video;
//2-WORK ON THE SPEED OF THE VIDEO
//3-WORK ON THE THE CHECK MARK RED AND GREEN
//4- WORK ON THE TIMER 15 SEDONS BEFORE MOVEING ON
//5- WORK THE NEXT BUTTON APPEARD AFTER 15 SEDONS
