import "./App.css";
import Plx from "react-plx";

function App() {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "16vw",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "30vw",
          }}
          src="/text-img.webp"
          alt="Goonies"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "20%",
          top: "10vw",
          width: "380px",
          height: "180px",
          cursor: "pointer",
          border: "3px solid transparent",
          boxShadow: "0 0 20px rgba(255, 255, 0, 2)",
          borderRadius: "10px",
        }}
      >
        <img
          style={{
            width: "20vw",
          }}
          src="/wepon1.png"
          alt="wepon1"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "20%",
          top: "10vw",
          width: "380px",
          height: "180px",
          cursor: "pointer",
          border: "3px solid transparent",
          boxShadow: "0 0 20px rgba(255, 255, 0, 2)",
          borderRadius: "10px",
          zIndex: 500,
        }}
      >
        <img
          style={{
            width: "20vw",
          }}
          src="/wepon1.png"
          alt="wepon1"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "55%",
          top: "10vw",
          width: "380px",
          height: "180px",
          cursor: "pointer",
          border: "3px solid transparent",
          boxShadow: "0 0 20px rgba(255, 255, 0, 2)",
          borderRadius: "10px",
        }}
      >
        <img
          style={{
            width: "20vw",
          }}
          src="/wepon2.png"
          alt="wepon2"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "55%",
          top: "10vw",
          width: "380px",
          height: "180px",
          cursor: "pointer",
          border: "3px solid transparent",
          boxShadow: "0 0 20px rgba(255, 255, 0, 2)",
          borderRadius: "10px",
          zIndex: 500,
        }}
      >
        <img
          style={{
            width: "20vw",
            cursor: "pointer",
          }}
          src="/wepon2.png"
          alt="wepon2"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
