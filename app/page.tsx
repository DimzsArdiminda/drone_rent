import SectionTitle from "@/Components/SectionTitle";
import Image from 'next/image';
import Continer from '@/Components/Continer'
import { Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  } from "@/Components/ui/card";
import Link from "next/link";
import Divider from "@/Components/Divider";
import FooterBro from "@/Components/Footer";


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>

        <SectionTitle title="RENT DRONE" perTitle="by ardiminda project" align="left">
           Fly on Your Way, Way for Fly<br/> <br/>


          Record in dazzling 4K HDR with true-to-life colors both day and night. 
          Mini 3&apos;s camera is equipped with a 1/1.3-inch CMOS sensor with dual native ISO and chip-level HDR technology. During the day, capture highlight and shadow details for more nuanced visual results with greater depth.
          Continue to capture clearly and vividly, even as day turns to night.
        </SectionTitle>
        
        </div>
        <div>
            <Continer className="flex justify-center items-center">
            <Image src="/img/DRONE_prev_ui.png" alt="Rent Drone" width={250} height={0} />
            </Continer>
        </div>
      </div>
      <Continer>
          <div className="collapse bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
              Packages that we offer
              </div>
              <div className="collapse-content">
                <ol>
                  <li>
                    <p> A. 1 Batt + Pilot + 20 Minute + Link Drive Footage =&gt; IDR 350K</p>
                  </li>
                  <li>
                    <p> B. 2 Batt + Pilot + 40 Minute + Link Drive Footage =&gt; IDR 580K </p>
                  </li>
                </ol>
              </div>
            </div>
          <div className="collapse bg-base-200 mt-5">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                How to rent drone?
              </div>
              <div className="collapse-content">
                <ol>
                  <li>
                    <p> 1. Select a plan</p>
                  </li>
                  <li>
                    <p>2. Contact Us  </p>
                  </li>
                  <li>
                    <p>3. Time Discusion  </p>
                  </li>
                </ol>
              </div>
            </div>
        </Continer>

     <Divider />

      {/* Vidioe */}
      <div className="">
        <Continer className=" flex justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/RteTXePLoAE?si=Xg6ddaC8NVdJOirT" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Continer>
        <Continer>
            <Link href={'/portofolio'} className="btn btn-outline">
            Other
            </Link>
        </Continer>

      </div>
      {/* card Q an A */}
      <Continer>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Q & A</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>Q: Can I rent a drone without a pilot?</p>
            <p>A: No, in order to prevent unwanted incidents, we do not rent out drones without pilots</p>
            <Divider/>
            <p>Q: Is the drive link permanent?</p>
            <p>A:The footage in the Gdrive link can be downloaded no later than 1 week after completing the content</p>
          </CardDescription>
        </CardContent>
      </Card>
      </Continer>

      <FooterBro/>
    </div>
  );
}
