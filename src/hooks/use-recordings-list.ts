import { useState, useEffect } from "react";

import { deleteAudio } from "~/handlers/recordings-list";
import generateKey from "~/utils/generate-keys";

import { type Audio } from "~/types/recorder";

export default function useRecordingsList(audio: string | null) {
  const [recordings, setRecordings] = useState<Audio[]>([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState: Audio[]) => {
        return [...prevState, { key: generateKey(), audio }];
      });
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey: string) => deleteAudio(audioKey, setRecordings),
  };
}
