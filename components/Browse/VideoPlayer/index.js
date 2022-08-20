import React, { useRef, useEffect, useState } from "react";
import {
  FaUndoAlt,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeOff,
  FaVolumeMute,
  FaArrowLeft,
  FaExpand,
  FaStepForward,
  FaCog,
  FaClone,
  FaCompress,
  FaRedoAlt,
} from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import forward10 from "../../../public/icons/forward.png";
import backward10 from "../../../public/icons/backward.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiCheck, FiX } from "react-icons/fi";
import {
  Loading,
  StandyByInfo,
  VideoPreLoading,
  Container,
  Controlls,
  VolumeControll,
  ItemPlaybackRate,
  IconPlayBackRate,
  ItemNext,
  ItemListReproduction,
  ItemListQuality,
} from "./styles";

const VideoPlayer = ({ src, ref, title = "" }) => {
  let subTitle = "Episode 1";
  let fullPlayer = true;
  let backButton = true;
  let autoPlay = true;
  let onCanPlay = undefined;
  let onTimeUpdate = undefined;
  let onEnded = undefined;
  let onErrorVideo = undefined;
  let onCrossClick = () => {};
  let startPosition = 0;
  let playbackRateEnable = true;
  let overlayEnabled = true;
  let autoControllCloseEnabled = true;

  let playbackRateOptions = [
    "0.25",
    "0.5",
    "0.75",
    "Normal",
    "1.25",
    "1.5",
    "2",
  ];
  let playbackRateStart = 1;

  const videoComponent = useRef(null);
  const timerRef = useRef(null);
  const timerBuffer = useRef(null);
  const playerElement = useRef(null);
  const listReproduction = useRef(null);

  const [videoReady, setVideoReady] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [end, setEnd] = useState(false);
  const [controlBackEnd, setControlBackEnd] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [volume, setVolume] = useState(100);
  const [muted, setMuted] = useState(false);
  const [error, setError] = useState(false);
  const [waitingBuffer, setWaitingBuffer] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(playbackRateStart);
  const [started, setStarted] = useState(false);

  const [showControlVolume, setShowControlVolume] = useState(false);
  const [showQuality, setShowQuality] = useState(false);
  const [showDataNext, setShowDataNext] = useState(false);
  const [showPlaybackRate, setShowPlaybackRate] = useState(false);
  const [showReproductionList, setShowReproductionList] = useState(false);

  const primaryColor = "red";
  const secundaryColor = "white";

  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  const secondsToHms = (d) => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    let seconds = s.toString();

    if (s < 10) {
      seconds = `0${s}`;
    }

    if (h) {
      return `${h}:${m}:${seconds}`;
    }

    return `${m}:${seconds}`;
  };

  const timeUpdate = (e) => {
    setShowInfo(false);
    setEnd(false);
    if (playing) {
      setPlaying(true);
    }

    if (waitingBuffer) {
      setWaitingBuffer(false);
    }

    if (timerBuffer.current) {
      clearTimeout(timerBuffer.current);
    }

    timerBuffer.current = setTimeout(() => setWaitingBuffer(true), 1000);

    if (onTimeUpdate) {
      onTimeUpdate(e);
    }

    let choseBuffer = 0;

    const target = e.target;

    const lenghtBuffer = target.buffered.length;
    let start = 0;
    let endBuffer = 0;
    const atualTime = target.currentTime;

    for (let i = 1; i <= lenghtBuffer; i++) {
      const startCheck = target.buffered.start(i - 1);
      const endCheck = target.buffered.end(i - 1);

      if (endCheck > atualTime && atualTime > startCheck) {
        choseBuffer = i;

        if (endCheck > endBuffer) {
          endBuffer = endCheck;
        }

        if (startCheck < start) {
          start = startCheck;
        }
      }
    }
    setProgress(target.currentTime);
  };

  const goToPosition = (position) => {
    if (videoComponent.current) {
      videoComponent.current.currentTime = position;
      setProgress(position);
    }
  };

  const play = () => {
    if (videoComponent.current) {
      setPlaying(!playing);

      if (videoComponent.current.paused) {
        videoComponent.current.play();
        return;
      }

      videoComponent.current.pause();
    }
  };

  const onEndedFunction = () => {
    if (videoComponent.current) {
      if (
        +startPosition === +videoComponent.current.duration &&
        !controlBackEnd
      ) {
        setControlBackEnd(true);
        videoComponent.current.currentTime =
          videoComponent.current.duration - 30;
        if (autoPlay) {
          setPlaying(true);
          videoComponent.current.play();
        } else {
          setPlaying(false);
        }
      } else {
        setEnd(true);
        setPlaying(false);

        if (onEnded) {
          onEnded();
        }
      }
    }
  };

  const nextSeconds = (seconds) => {
    if (videoComponent.current) {
      const current = videoComponent.current.currentTime;
      const total = videoComponent.current.duration;

      if (current + seconds >= total - 2) {
        videoComponent.current.currentTime =
          videoComponent.current.duration - 1;
        setProgress(videoComponent.current.duration - 1);
        return;
      }

      videoComponent.current.currentTime += seconds;
      setProgress(videoComponent.current.currentTime + seconds);
    }
  };

  const previousSeconds = (seconds) => {
    if (videoComponent.current) {
      const current = videoComponent.current.currentTime;

      if (current - seconds <= 0) {
        videoComponent.current.currentTime = 0;
        setProgress(0);
        return;
      }

      videoComponent.current.currentTime -= seconds;
      setProgress(videoComponent.current.currentTime - seconds);
    }
  };

  const startVideo = () => {
    if (videoComponent.current) {
      try {
        setDuration(videoComponent.current.duration);
        setVideoReady(true);

        if (!started) {
          setStarted(true);
          setPlaying(false);

          if (autoPlay) {
            videoComponent.current.play();
            setPlaying(!videoComponent.current.paused);
          }
        }

        if (onCanPlay) {
          onCanPlay();
        }
      } catch (err) {
        setPlaying(false);
      }
    }
  };

  const erroVideo = () => {
    if (onErrorVideo) {
      onErrorVideo();
    }
    setError("playError");
  };

  const setMuttedAction = (value) => {
    if (videoComponent.current) {
      setMuted(value);
      setShowControlVolume(false);
      videoComponent.current.muted = value;
    }
  };

  const setVolumeAction = (value) => {
    if (videoComponent.current) {
      setVolume(value);
      videoComponent.current.volume = value / 100;
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }

      setFullScreen(false);
    }
  };

  const enterFullScreen = () => {
    if (playerElement.current) {
      setShowInfo(true);
      if (playerElement.current.requestFullscreen) {
        playerElement.current.requestFullscreen();
        setFullScreen(true);
      }
    }
  };

  const chooseFullScreen = () => {
    if (playerElement.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        return;
      }

      setShowInfo(true);

      if (playerElement.current.requestFullscreen) {
        playerElement.current.requestFullscreen();
      }
      setFullScreen(true);
    }
  };

  const setStateFullScreen = () => {
    if (!document.fullscreenElement) {
      setFullScreen(false);
      return;
    }

    setFullScreen(true);
  };

  const controllScreenTimeOut = () => {
    if (!autoControllCloseEnabled) {
      setShowInfo(true);
      return;
    }

    setShowControls(false);
    if (!playing) {
      setShowInfo(true);
    }
  };

  const hoverScreen = () => {
    setShowControls(true);
    setShowInfo(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(controllScreenTimeOut, 5000);
  };

  const getKeyBoardInteration = (e) => {
    if (e.keyCode === 32 && videoComponent.current) {
      if (videoComponent.current.paused) {
        videoComponent.current.play();
        setPlaying(true);
        hoverScreen();
      } else {
        videoComponent.current.pause();
        setPlaying(false);
        hoverScreen();
      }
    }
  };

  const scrollToSelected = () => {
    const element = listReproduction.current;
    if (element) {
      const selected = element.getElementsByClassName("selected")[0];
      const position = selected.offsetTop;
      const height = selected.offsetHeight;
      element.scrollTop = position - height * 2;
    }
  };

  const onChangePlayBackRate = (value) => {
    if (videoComponent.current) {
      const speed = value === "Normal" ? 1 : +value;
      videoComponent.current.playbackRate = speed;
      setPlaybackRate(speed);
    }
  };

  useEffect(() => {
    if (showReproductionList) {
      scrollToSelected();
    }
  }, [showReproductionList]);

  useEffect(() => {
    if (src && videoComponent.current) {
      videoComponent.current.currentTime = startPosition;
      setProgress(0);
      setDuration(0);
      setVideoReady(false);
      setError(false);
      setShowReproductionList(false);
      setShowDataNext(false);
      setPlaying(autoPlay);
    }
  }, [src]);

  useEffect(() => {
    document.addEventListener("keydown", getKeyBoardInteration, false);
    playerElement.current &&
      playerElement.current.addEventListener(
        "fullscreenchange",
        setStateFullScreen,
        false
      );
  }, []);

  useEffect(() => {
    setStateFullScreen();
  }, [document.fullscreenElement]);

  function renderLoading() {
    return (
      <Loading color={primaryColor}>
        <div>
          <div />
          <div />
          <div />
        </div>
      </Loading>
    );
  }

  function renderInfoVideo() {
    return (
      <StandyByInfo
        primaryColor={primaryColor}
        secundaryColor={secundaryColor}
        show={showInfo === true && videoReady === true && playing === false}
      >
        {(title || subTitle) && (
          <section className="center">
            <h3 className="text">You are watching</h3>
            <h1 className="title">{title}</h1>
            <h2 className="sub-title">{subTitle}</h2>
          </section>
        )}
        <footer>paused</footer>
      </StandyByInfo>
    );
  }

  function renderCloseVideo() {
    return (
      <VideoPreLoading
        backgroundColorHoverButtonError="#f78b28"
        colorHoverButtonError="#ddd"
        colorButtonError="#ddd"
        backgroundColorButtonError="#333"
        colorTitle="#fff"
        colorSubTitle="#fff"
        colorIcon="#fff"
        show={videoReady === false || (videoReady === true && error)}
        showError={!!error}
      >
        {(title || subTitle) && (
          <header>
            <div>
              <h1>{title}</h1>
              <h2>{subTitle}</h2>
            </div>
            <FiX onClick={onCrossClick} />
          </header>
        )}

        <section>
          {error && (
            <div>
              <h1>Error Something went wrong </h1>
            </div>
          )}
        </section>
      </VideoPreLoading>
    );
  }

  return (
    <Container
      onMouseMove={hoverScreen}
      ref={playerElement}
      onDoubleClick={chooseFullScreen}
      fullPlayer={fullPlayer}
      hideVideo={!!error}
    >
      {(videoReady === false || (waitingBuffer === true && playing === true)) &&
        !error &&
        !end &&
        renderLoading()}

      {!!overlayEnabled && renderInfoVideo()}

      {renderCloseVideo()}

      <video
        ref={videoComponent}
        src={src}
        controls={false}
        onCanPlay={() => startVideo()}
        onTimeUpdate={timeUpdate}
        onError={erroVideo}
        onEnded={onEndedFunction}
      />

      <Controlls
        show={showControls === true && videoReady === true && error === false}
        primaryColor={primaryColor}
        progressVideo={(progress * 100) / duration}
      >
        {backButton && (
          <div className="back">
            <div onClick={goBackHandler} style={{ cursor: "pointer" }}>
              <FaArrowLeft />
            </div>
          </div>
        )}

        {showControlVolume !== true &&
          showQuality !== true &&
          !showDataNext &&
          !showReproductionList && (
            <div className="line-reproduction">
              <input
                type="range"
                value={progress}
                className="progress-bar"
                max={duration}
                onChange={(e) => goToPosition(+e.target.value)}
                title=""
              />
              <span>{secondsToHms(duration - progress)}</span>
            </div>
          )}

        {videoReady === true && (
          <div className="controlls">
            <div className="start">
              <div className="item-control">
                {!playing && <FaPlay onClick={play} />}
                {playing && <FaPause onClick={play} />}
              </div>

              <div className="item-control">
                <Image
                  className="timeSkip"
                  src={backward10}
                  width="35px"
                  height="35px"
                  onClick={() => previousSeconds(5)}
                />
              </div>

              <div className="item-control">
                <Image
                  className="timeSkip"
                  src={forward10}
                  width="35px"
                  height="35px"
                  onClick={() => nextSeconds(5)}
                />
              </div>

              {muted === false && (
                <VolumeControll
                  onMouseLeave={() => setShowControlVolume(false)}
                  className="item-control"
                  primaryColor={primaryColor}
                  percentVolume={volume}
                >
                  {showControlVolume === true && (
                    <div className="volumn-controll">
                      <div className="box-connector" />
                      <div className="box">
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={volume}
                          onChange={(e) => setVolumeAction(+e.target.value)}
                          title=""
                        />
                      </div>
                    </div>
                  )}
                  {/* render seperate volume icons to correspond to volume levels */}
                  {volume >= 60 && (
                    <FaVolumeUp
                      onMouseEnter={() => setShowControlVolume(true)}
                      onClick={() => setMuttedAction(true)}
                    />
                  )}

                  {volume < 60 && volume >= 10 && (
                    <FaVolumeDown
                      onMouseEnter={() => setShowControlVolume(true)}
                      onClick={() => setMuttedAction(true)}
                    />
                  )}

                  {volume < 10 && volume > 0 && (
                    <FaVolumeOff
                      onMouseEnter={() => setShowControlVolume(true)}
                      onClick={() => setMuttedAction(true)}
                    />
                  )}

                  {volume <= 0 && (
                    <FaVolumeMute
                      onMouseEnter={() => setShowControlVolume(true)}
                      onClick={() => setVolumeAction(0)}
                    />
                  )}
                </VolumeControll>
              )}

              {muted === true && (
                <div className="item-control">
                  <FaVolumeMute onClick={() => setMuttedAction(false)} />
                </div>
              )}

              <div className="item-control info-video">
                <span className="info-first">{title}</span>
                <span className="info-secund">{subTitle}</span>
              </div>
            </div>

            <div className="end">
              {!!playbackRateEnable && (
                <div
                  className="item-control"
                  onMouseLeave={() => setShowPlaybackRate(false)}
                >
                  {showPlaybackRate === true && (
                    <ItemPlaybackRate>
                      <div>
                        <div className="title">speeds</div>
                        {playbackRateOptions.map((item, key) => (
                          <div
                            key={key}
                            className="item"
                            onClick={() => onChangePlayBackRate(item)}
                          >
                            {(+item === +playbackRate ||
                              (item === "Normal" && +playbackRate === 1)) &&
                              FiCheck({})}
                            <div className="bold">
                              {item === "Normal" ? item : `${item}x`}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="box-connector" />
                    </ItemPlaybackRate>
                  )}

                  <IconPlayBackRate
                    className="playbackRate"
                    onMouseEnter={() => setShowPlaybackRate(true)}
                  >
                    <span>
                      <SiSpeedtest size={"1.2em"} />
                    </span>
                  </IconPlayBackRate>
                </div>
              )}

              <div className="item-control">
                {fullScreen === false && <FaExpand onClick={enterFullScreen} />}
                {fullScreen === true && <FaCompress onClick={exitFullScreen} />}
              </div>
            </div>
          </div>
        )}
      </Controlls>
    </Container>
  );
};

export default VideoPlayer;
