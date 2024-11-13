'use strict';
import Continer from '@/Components/Continer'
import CustomHead from '@/Components/Head'
import { Link } from 'lucide-react';
import React from 'react'

export default function page() {
  return (
    <>
      <CustomHead
        title="Portofolio"
        description="lorem ipsum"
        keywords="Portfolio, web, app"
      />
      <Continer>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex justify-center">
            <blockquote 
              className="tiktok-embed rounded-lg shadow-md"
              style={{ maxWidth: "100%", minWidth: "325px" }}
              cite="https://www.tiktok.com/@dimas_ardiminda/video/7436019557707287826" 
              data-video-id="7436019557707287826"
            > 
              <section> 
                <Link target="_blank" href="https://www.tiktok.com/@dimas_ardiminda?refer=embed">@dimas_ardiminda</Link>
                {/* <Link target="_blank" title="♬ original sound  - dimas_ardiminda" href="https://www.tiktok.com/music/original-sound-dimasardiminda-7436019603962874625?refer=embed">♬ original sound  - dimas_ardiminda</link> */}
              </section>
            </blockquote>
          </div>
          
          <div className="flex justify-center">
            <blockquote 
              className="tiktok-embed rounded-lg shadow-md"
              cite="https://www.tiktok.com/@dimas_ardiminda/video/7435679983412006161" 
              data-video-id="7435679983412006161" 
              style={{ maxWidth: "100%", minWidth: "325px" }}
            > 
              <section>
                <Link target="_blank" href="https://www.tiktok.com/@dimas_ardiminda?refer=embed">@dimas_ardiminda</Link>
                the journey has been started ...
                {/* <Link title="pesonaindonesia" target="_blank" href="https://www.tiktok.com/tag/pesonaindonesia?refer=embed">#pesonaindonesia</Link> */}
                {/* Add other hashtags here */}
              </section>
            </blockquote>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <blockquote
            className="instagram-media rounded-lg shadow-md"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DBsHOqDSn9m/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "calc(100% - 2px)",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href="https://www.instagram.com/reel/DBsHOqDSn9m/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: 0,
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full h-10 w-10 mr-4" />
                  <div className="flex flex-col justify-center flex-grow">
                    <div className="bg-gray-200 rounded-md h-3 w-24 mb-1" />
                    <div className="bg-gray-200 rounded-md h-3 w-16" />
                  </div>
                </div>
                <div className="mt-5" />
                <div className="block h-12 w-12 mx-auto mb-3">
                  <svg width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    {/* SVG paths here */}
                  </svg>
                </div>
                <div className="pt-2 text-blue-600 font-semibold text-sm text-center">
                  View this post on Instagram
                </div>
              </a>
            </div>
           
          </blockquote>
        </div>
      </Continer>
    </>
  )
}
