export default function Lend() {
  return (
    <>
     <div className="w-full h-[100vh] flex justify-center items-center">
     <div className="success-card">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="checkmark success-i">✓</i>
        </div>
        <h1 className="success-h1">Success</h1>
        <p className="success-p">
          Position Successfully Created !!!
          
        </p>
      </div>
     </div>
    </>
  );
}
