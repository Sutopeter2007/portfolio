import whisper
import ffmpeg
import os
import cv2
import numpy as np
import streamlit as st

def extract_audio(video_path, audio_path):
    """Kinyeri a hangot a videóból."""
    os.system(f"ffmpeg -i {video_path} -ar 16000 -ac 1 -c:a pcm_s16le {audio_path}")

def generate_subtitles(audio_path):
    """AI segítségével feliratokat generál."""
    model = whisper.load_model("base")
    result = model.transcribe(audio_path)
    return result["segments"]

def overlay_subtitles(video_path, subtitle_data, output_path, font_size=24, font_color=(255, 255, 255)):
    """Feliratokat éget a videóra."""
    cap = cv2.VideoCapture(video_path)
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    font = cv2.FONT_HERSHEY_SIMPLEX
    
    frame_count = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        timestamp = frame_count / fps
        
        for segment in subtitle_data:
            start, end, text = segment["start"], segment["end"], segment["text"]
            if start <= timestamp <= end:
                text_size = cv2.getTextSize(text, font, font_size / 50, 2)[0]
                text_x = (width - text_size[0]) // 2
                text_y = height - 50
                
                cv2.putText(frame, text, (text_x, text_y), font, font_size / 50, font_color, 2, cv2.LINE_AA)
        
        out.write(frame)
        frame_count += 1
    
    cap.release()
    out.release()

def main():
    st.title("Automatikus Videófeliratozó")
    uploaded_file = st.file_uploader("Tölts fel egy videót", type=["mp4", "mov", "avi"])
    
    if uploaded_file:
        video_path = "input.mp4"
        with open(video_path, "wb") as f:
            f.write(uploaded_file.read())
        
        audio_path = "temp.wav"
        extract_audio(video_path, audio_path)
        
        subtitle_data = generate_subtitles(audio_path)
        output_video = "output.mp4"
        
        font_size = st.slider("Felirat mérete", 10, 50, 24)
        font_color = st.color_picker("Felirat színe", "#FFFFFF")
        
        r, g, b = tuple(int(font_color[i:i+2], 16) for i in (1, 3, 5))
        overlay_subtitles(video_path, subtitle_data, output_video, font_size, (b, g, r))
        
        st.video(output_video)

if __name__ == "__main__":
    main()

# Dockerfile létrehozása
with open("Dockerfile", "w") as f:
    f.write("""
    FROM python:3.9
    WORKDIR /app
    COPY . /app
    RUN pip install --no-cache-dir openai-whisper ffmpeg-python opencv-python streamlit numpy
    CMD ["streamlit", "run", "script.py"]
    """)

# Docker indítási utasítások kiírása
print("Használati utasítás:")
print("1. Nyisd meg a terminált és navigálj a projekt mappájába.")
print("2. Futtasd: docker build -t video-subtitle .")
print("3. Majd indítsd el: docker run -p 8501:8501 video-subtitle")
print("Ezután a böngésződben megnyithatod: http://localhost:8501")
