import { Howl, HowlOptions } from "howler";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export type HowlPlayerRefType = {
  play: () => number;
  pause: (id?: number) => Howl;
  seek: (pos?: number) => number;
  stop: (id?: number) => Howl;
  mute: () => boolean;
  volume: (volume: number) => number | Howl;
  loop: (id?: number | undefined) => boolean;
  duration: (id?: number | undefined) => number;
  load: () => Howl;
  fade: (
    from: number,
    to: number,
    duration: number,
    callback?: () => void
  ) => Howl;
  reset: () => void;
};

const HowlPlayer = forwardRef<HowlPlayerRefType, HowlOptions>(
  (
    {
      src,
      format = [],
      xhr = {},
      mute = false,
      loop = false,
      preload = true,
      volume = 1.0,
      rate = 1,
      autoplay = false,
      onend = () => {},
      onpause = () => {},
      onplay = () => {},
      onplayerror = () => {},
      onvolume = () => {},
      onstop = () => {},
      onload = () => {},
      onseek = () => {},
      onloaderror = () => {},
      html5 = false,
    }: HowlOptions,
    ref
  ) => {
    const howler = useRef<Howl | null>(null);

    useImperativeHandle(ref, () => ({
      play: () => howler.current!.play(),
      pause: (id?: number) => howler.current!.pause(id),
      seek: (pos?: number) => howler.current!.seek(pos),
      stop: (id?: number) => howler.current!.stop(id),
      mute: () => howler.current!.mute(),
      volume: (volume: number) => howler.current!.volume(volume),
      loop: (id?: number | undefined) => howler.current!.loop(id),
      duration: (id?: number | undefined) => howler.current!.duration(id),
      load: () => howler.current!.load(),
      fade: (
        from: number,
        to: number,
        duration: number,
        callback?: () => void
      ) => {
        if (callback) {
          howler.current!.once("fade", callback);
        }
        return howler.current!.fade(from, to, duration);
      },
      reset: () => updateHowler(),
    }));

    useEffect(() => {
      // Clean up existing howler on unmount
      return () => {
        destroyHowler();
      };
    }, []);

    useEffect(() => {
      // Initialize/update howler on props change
      updateHowler();
    }, [src]);

    const destroyHowler = () => {
      if (howler.current) {
        howler.current.off();
        howler.current.stop();
        howler.current.unload();
        howler.current = null;
      }
    };

    const updateHowler = () => {
      destroyHowler();

      if (typeof Howl !== "undefined") {
        const newHowler = new Howl({
          src,
          format,
          xhr,
          mute,
          loop,
          preload,
          volume,
          rate,
          onend,
          onplay,
          onplayerror,
          onpause,
          onvolume,
          onstop,
          onload,
          onseek,
          onloaderror,
          html5,
        });

        if (autoplay) {
          newHowler.play();
        }

        howler.current = newHowler;
      }
    };

    return <></>;
  }
);

export default HowlPlayer;
