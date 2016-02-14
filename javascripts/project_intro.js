$(document).ready(function() {

  //Hide next and pre buttons
  $("#next").hide();
  $("#pre").hide();
  $(".videoContent").hide();
  $("#experimentIntroduction").show();
  // nextVideo();
  // nextVideo1();
  //span 
  var $questionNumber = $("#questionNum");
  //Click button start to begin the experiment

  $("#start").click(function(e) {

    $("#experimentIntroduction").hide();
    $(".videoContent").show();
    nextVideo();
    nextVideo1();
    $("#next").show();
    $("#pre").show();

  });

  //Call functions to move the video

  $("#next").click(function(e) {

    nextVideo();
    nextVideo1();
    $("#intro").hide();
  });

  function nextVideo() {

    var vidIndex = parseInt(localStorage.getItem("vidIndex"));

    var vids = ['https://www.youtube.com/embed/wSoTDjZGVBs',
      'https://www.youtube.com/embed/w9pm0vsvPoY',
      'https://www.youtube.com/embed/hdfcYIxzzFc',
       'https://www.youtube.com/embed/pdJc5nwn29I',
        'https://www.youtube.com/embed/aSSc3J2Pj_c',
         'https://www.youtube.com/embed/qR-qImAv3cY',
          'https://www.youtube.com/embed/bTTjI2Glaj8',
           'https://www.youtube.com/embed/1RZaTFuVKzg'
    ];

    var vidToken = '<iframe embed-responsive src="{{SRC}}" frameborder="0" allowfullscreen></iframe>';

    if (vidIndex) {
      if (vidIndex >= vids.length) {
        vidIndex = 0;
      }

    } else {
      if (!vidIndex && vidIndex !== 0) {
        vidIndex = 0;
      }
    }

    var currentVid = vidToken.replace('{{SRC}}', vids[vidIndex]);
    $('.content').html(currentVid);
    $('#vidIndex').val(vidIndex);
    vidIndex++;
    localStorage.setItem('vidIndex', vidIndex);

    //Adding one to the questionNum
    if ($questionNumber.text() < 10) {

      $questionNumber.text(+$questionNumber.text() + 1);
    }

  }

  //Second Video Function

  function nextVideo1() {

    var vids = ['https://www.youtube.com/embed/1gXW8nUjGek',
      'https://www.youtube.com/embed/u-TivFYh9Hg',
      'https://www.youtube.com/embed/ixk_lqgyhrU',        'https://www.youtube.com/embed/wyWKaFw7GLs',
      'https://www.youtube.com/embed/EcHyoJ7IoZs',
      'https://www.youtube.com/embed/FYf1dic8iY4',
        'https://www.youtube.com/embed/wecue5qdckk',
         'https://www.youtube.com/embed/9co3JzUWZ_w'
    ];

    var vidIndex = parseInt(localStorage.getItem("vidIndex"));

    var vidToken = '<iframe embed-responsive src="{{SRC}}" frameborder="0" allowfullscreen></iframe>';

    if (vidIndex) {
      if (vidIndex >= vids.length) {
        vidIndex = 0;
      }

    } else {
      if (!vidIndex && vidIndex !== 0) {
        vidIndex = 0;
      }
    }

    var currentVid = vidToken.replace('{{SRC}}', vids[vidIndex]);
    $('.content1').html(currentVid);
    $('#vidIndex').val(vidIndex);
    vidIndex++;
    localStorage.setItem('vidIndex', vidIndex);

  }

});
