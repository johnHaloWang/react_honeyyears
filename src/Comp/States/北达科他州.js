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
                <br></br>
                <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 shadow-sm">
                        <YouTube
                            videoId="4x0_e0t7tUo"
                            opts={{
                            height: '200',
                            width: '250',
                            playerVars: {
                                autoplay: 1
                            }}
                            }
                            onReady={_onReady}
                        />
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <YouTube
                            videoId="4x0_e0t7tUo"
                            opts={{
                            height: '200',
                            width: '250',
                            playerVars: {
                                autoplay: 1
                            }}
                            }
                            onReady={_onReady}
                        />
                    </div><div class="card mb-4 shadow-sm">
                        <YouTube
                            videoId="4x0_e0t7tUo"
                            opts={{
                            height: '200',
                            width: '250',
                            playerVars: {
                                autoplay: 1
                            }}
                            }
                            onReady={_onReady}
                        />
                    </div><div class="card mb-4 shadow-sm">
                        <YouTube
                            videoId="4x0_e0t7tUo"
                            opts={{
                            height: '200',
                            width: '250',
                            playerVars: {
                                autoplay: 1
                            }}
                            }
                            onReady={_onReady}
                        />
                    </div>
                    
                </div>
                {/* <YouTube
                    videoId="4x0_e0t7tUo"
                    opts={{
                    height: '40',
                    width: '60',
                    playerVars: {
                        autoplay: 1
                    }}
                    }
                    onReady={_onReady}
                /> */}
                <br></br>

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