$(document).ready(function() {

  //Link to all of the json files
  var videoLinks1 = ['https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile1.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile2.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile3.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile4.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile5.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile6.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile7.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile8.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile9.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile10.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile11.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile12.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile13.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile14.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile15.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile16.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile17.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile18.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile19.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile20.json'
  ];

   var videoLinks2 = ['https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile1.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile2.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile3.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile4.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile5.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile6.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile7.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile8.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile9.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile10.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile11.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile12.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile13.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile14.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile15.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile16.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile17.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile18.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile19.json',
    'https://zeemax.github.io/Amazon_mechanical_turk_project/videoFile20.json'
  ];
  
  var randomize_jsonFiles1 = Math.floor(Math.random() * videoLinks1.length);
  var randomize_jsonFiles2 = Math.floor(Math.random() * videoLinks2.length);

  var $questionNumber = $("#questionNum");
  

  //Hide next and pre buttons
  $("#next").hide();
  $("#pre").hide();
  $(".videoContent").hide();
  $("#experimentIntroduction").show();
  
  


  //A function that show the random files
  function showVideos1() {

    var vidIndex = parseInt(localStorage.getItem("vidIndex"));

    $.getJSON(videoLinks1[randomize_jsonFiles1], function(videos) {

      var videoFrame = '<iframe embed-responsive src="{{SRC}}?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';

      var randomNumber = Math.floor(Math.random() * 19);

      if (vidIndex) {
        if (vidIndex >= videoLinks1.length) {
          vidIndex = 0;
        }

      } else {
        if (!vidIndex && vidIndex !== 0) {
          vidIndex = 0;
        }
      }

      var currentVid = videoFrame.replace('{{SRC}}', videos[randomNumber].link);
      //alert(videos[0].link);
     $('.content').html(currentVid);
      $('#vidIndex').val(vidIndex);
      vidIndex++;
      localStorage.setItem('vidIndex', vidIndex);

    });

  }
  
  
 
  //A function that call back videoLinks2 
  function showVideos2() {

    var vidIndex = parseInt(localStorage.getItem("vidIndex"));

    $.getJSON(videoLinks2[randomize_jsonFiles2], function(videos) {

      var videoFrame = '<iframe embed-responsive src="{{SRC}}?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';

      var randomNumber = Math.floor(Math.random() * 19);

      if (vidIndex) {
        if (vidIndex >= videoLinks2.length) {
          vidIndex = 0;
        }

      } else {
        if (!vidIndex && vidIndex !== 0) {
          vidIndex = 0;
        }
      }

      var currentVid = videoFrame.replace('{{SRC}}', videos[randomNumber].link);
      //alert(videos[0].link);
      $('.content1').html(currentVid);
      $('#vidIndex').val(vidIndex);
      vidIndex++;
      localStorage.setItem('vidIndex', vidIndex);

    });

  }
 
  
  

  //START Button
  $("#start").click(function(e) {
    $("#experimentIntroduction").hide();
    $(".videoContent").show();
    showVideos1();
    showVideos2();
    $("#next").show();
    $("#pre").show();

  });

  //NEXT button
    $("#next").click(function(e) {
      showVideos1();
      showVideos2();
      $("#intro").hide();
      
      if ($questionNumber.text() < 10) {

        $questionNumber.text(+$questionNumber.text() + 1);
      }

    });

  
 


});
