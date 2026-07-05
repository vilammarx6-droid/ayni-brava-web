import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useHomeData } from '../sanity/client';
import homeDataBackup from '../content/home.json';
import './SocialFeed.css';

const SocialFeed = () => {
  const { data } = useHomeData();
  const tiktokUrl = data?.latestTikTokUrl || homeDataBackup.latestTikTokUrl;
  const facebookUrl = data?.latestFacebookUrl || homeDataBackup.latestFacebookUrl;
  const youtubeUrl = data?.latestYoutubeUrl || homeDataBackup.latestYoutubeUrl;

  const [tiktokVideoId, setTiktokVideoId] = useState(null);
  const [cleanTiktokUrl, setCleanTiktokUrl] = useState(null);
  const [youtubeVideoId, setYoutubeVideoId] = useState(null);

  useEffect(() => {
    // Extract TikTok video ID from URL
    if (tiktokUrl && tiktokUrl.includes('/video/')) {
      const parts = tiktokUrl.split('/video/');
      if (parts.length === 2) {
        // Handle URLs with query params
        const id = parts[1].split('?')[0];
        setTiktokVideoId(id);
        setCleanTiktokUrl(`${parts[0]}/video/${id}`);
      }
    }

    // Extract YouTube video ID from URL
    if (youtubeUrl) {
      try {
        let id = null;
        if (youtubeUrl.includes('youtube.com/watch')) {
          const urlObj = new URL(youtubeUrl);
          id = urlObj.searchParams.get('v');
        } else if (youtubeUrl.includes('youtu.be/')) {
          const parts = youtubeUrl.split('youtu.be/');
          if (parts.length === 2) {
            id = parts[1].split('?')[0];
          }
        }
        if (id) {
          setYoutubeVideoId(id);
        }
      } catch (e) {
        console.error("Invalid YouTube URL");
      }
    }
  }, [tiktokUrl, youtubeUrl]);

  // Include TikTok embed script if needed
  useEffect(() => {
    if (tiktokVideoId) {
      const scriptId = 'tiktok-embed-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [tiktokVideoId]);

  // If no URLs are provided, don't render the section
  if (!tiktokUrl && !facebookUrl && !youtubeUrl) {
    return null;
  }

  return (
    <section className="section social-feed-section">
      <div className="container">
        <motion.div 
          className="text-center section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">Nuestras Últimas Novedades</h2>
          <p>Lo que estamos compartiendo en nuestras redes sociales.</p>
        </motion.div>

        <div className="social-feed-grid">
          {/* TikTok Embed */}
          {tiktokVideoId && (
            <motion.div 
              className="social-card tiktok-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="social-card-title">📱 Último en TikTok</h3>
              <div className="embed-container tiktok-container">
                <blockquote 
                  className="tiktok-embed" 
                  cite={cleanTiktokUrl} 
                  data-video-id={tiktokVideoId} 
                  style={{ maxWidth: '605px', minWidth: '325px' }} 
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@ayniglobalsolutions">
                      @ayniglobalsolutions
                    </a>
                  </section>
                </blockquote>
              </div>
            </motion.div>
          )}

          {/* YouTube Embed */}
          {youtubeVideoId && (
            <motion.div 
              className="social-card youtube-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="social-card-title">▶️ Último en YouTube</h3>
              <div className="embed-container youtube-container">
                <iframe 
                  width="100%" 
                  height="315" 
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}

          {/* Facebook Embed */}
          {facebookUrl && (
            <motion.div 
              className="social-card facebook-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="social-card-title">👍 Último en Facebook</h3>
              <div className="embed-container facebook-container">
                <iframe 
                  src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(facebookUrl)}&show_text=true&width=350`} 
                  width="350" 
                  height="400" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
