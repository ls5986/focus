'use client'

import { useState } from 'react'
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  url: string
  title: string
  onProgress?: (state: { played: number; playedSeconds: number }) => void
}

export function VideoPlayer({ url, title, onProgress }: VideoPlayerProps) {
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden">
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing={false}
        onReady={() => setIsReady(true)}
        onProgress={onProgress}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              disablePictureInPicture: true,
            },
          },
        }}
      />
    </div>
  )
} 