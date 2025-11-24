import ReactPlayer from 'react-player';

export default function VideoBackground(props: { src: string }) {
  return (
    <div className="fixed bottom-0 -z-10 h-full w-full bg-black">
      <div className="relative h-full w-full">
        <ReactPlayer
          src={props.src}
          style={{
            
            width: '100%',
            height: 'auto',
            position: 'fixed',
            bottom: 0,
          }}
          playing={true}
          muted={true}
          loop={true}
        />
        <div className="absolute top-0 w-full h-full bg-black opacity-80"> tes</div>

      </div>
    </div>
  );
}
