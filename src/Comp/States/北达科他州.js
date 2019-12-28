import React from 'react';
import '../../App.css';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';



function 北达科他州() {
  return (
    <section id="one">
        <div class="inner">
            <header>
                <center>
                {/* <img src={cp} /> */}
                </center>
                <br></br>
                <h2>北达科他州</h2>
            </header>
            <br></br>
            <div class="jumbotron">
                <p >
                    <center>Contents coming soon</center><br></br>
                </p>
                <div class="row mb-5">

        {/* <!--Grid column--> */}
        <div class="col-lg-4 col-md-12">

          <p class="h5 mb-4">.z-depth-1</p>

          <div class="embed-responsive embed-responsive-16by9 z-depth-1">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style={{height: '101%'}}
              allowfullscreen title="frame1"></iframe>
          </div>

        </div>
        {/* <!--Grid column--> */}


                {/* <!--Grid column--> */}
                <div class="col-lg-4 col-md-6">
                    <p class="h5 mb-4">.z-depth-1-half</p>
                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style={{height: '101%'}}
                        allowfullscreen title="frame2"></iframe>
                    </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-lg-4 col-md-6">

                <p class="h5 mb-4">.z-depth-2</p>

                <div class="embed-responsive embed-responsive-16by9 z-depth-2">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style={{height: '101%'}}
                    allowfullscreen title="frame3"></iframe>
                </div>

                </div>
                {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row mb-5">

                {/* <!--Grid column--> */}
                <div class="col-lg-4 col-md-12">

                <p class="h5 mb-4">.z-depth-3</p>

                <div class="embed-responsive embed-responsive-16by9 z-depth-3">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen title="frame4"></iframe>
                </div>

                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-lg-4 col-md-6">

                <p class="h5 mb-4">.z-depth-4</p>

                <div class="embed-responsive embed-responsive-16by9 z-depth-4">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen title="frame5"></iframe>
                </div>

                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-lg-4 col-md-6">

                <p class="h5 mb-4">.z-depth-5</p>

                <div class="embed-responsive embed-responsive-16by9 z-depth-5">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen title="frame6"></iframe>
                </div>

                </div>
                {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row d-flex justify-content-center">

                {/* <!--Grid column--> */}
                <div class="col-md-6">

                <p class="h5 mb-4">.hoverable</p>

                <div class="embed-responsive embed-responsive-16by9 hoverable">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style={{height: '101%'}}
                    allowfullscreen title="frame7"></iframe>
                </div>

                </div>
                {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                <ul class="actions">
                    <li><a href="#" class="button alt">button</a></li>
                </ul>
            </div>
            
        </div>
    </section>
  );
}

function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  
  
export default 北达科他州;