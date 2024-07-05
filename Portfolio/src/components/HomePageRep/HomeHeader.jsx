import "./HomeHeader.scss";

function HeroTop (props) {
    return (
        <div className={props.className}>
        {Array.from({ length: 400 }, (_, i) => (
          <div key={i} className="trigger"></div>
        ))}
        <div className="monitor">
          <div className="camera o-x">
            <div className="camera o-y">
              <div className="camera o-z">
                <div className="vr">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default HeroTop