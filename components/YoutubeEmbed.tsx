import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YoutubeEmbed({ videoId, title = 'YouTube video player' }: YoutubeEmbedProps) {
  return (
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 ratio
      height: 0,
      overflow: 'hidden',
      maxWidth: '100%',
      borderRadius: '16px',
      margin: '2rem 0',
      boxShadow: 'var(--shadow-md)',
      background: '#000'
    }}>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
