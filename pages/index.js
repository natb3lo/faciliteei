import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="content">
      <div className="logo">
        <img src="/faciliteei-logo.svg"></img>
        <div className={inter.className}>
          <p>
            <b>Coming soon...</b>
          </p>
        </div>
      </div>
      <style>{`
        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          background-color: black;
        }

        .logo {
        max-height: none;
        max-width: none;
        min-height: 20vw;
        min-width: 20vw;
        }

        .logo img{
           width: 40vw;
           height: auto;
        }

        p {
        margin: 0;
        padding: 0;
        color: #FD7401;
        max-width: none;
        max-heigh: 10vw;
        }
      
      `}</style>
    </div>
  );
}
