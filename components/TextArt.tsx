const TextArt = () => {
  return (
    <div>
      <div className="bear-welcome">
      ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───<br />
      ───█▒▒░░░░░░░░░▒▒█───<br />
      ────█░░█░░░░░█░░█────<br />
      ─▄▄──█░░░▀█▀░░░█──▄▄─<br />
      █░░█─▀▄░░░░░░░▄▀─█░░█<br />
      █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█<br />
      █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█<br />
      █░░║║║╠─║─║─║║║║║╠─░░█<br />
      █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█<br />
      █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█<br />
      </div>
      <style jsx>{`
        .bear-welcome {
          font-family: 'lucida grande',tahoma,verdana,arial,sans-serif;
          line-height: 1;
          font-size: 13px;
          color: hsl(32, 100%, 40%);
          margin: 29px 33px 0 0;
          float: left;
          background: linear-gradient(to top left,hsl(32, 100%, 50%),hsl(338, 78%, 28%));
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </div>
  )
}

export default TextArt;