import React, { Component } from "react";

class PaintPots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paintbrush: "empty",
    };

    this.changePaint = this.changePaint.bind(this);
  }

  changePaint(event, newPaint) {
    if (newPaint !== null) {
      this.setState({
        paintbrush: newPaint,
      });
      this.props.parentChangePaintCallback(newPaint);
    }
  }

  render() {
    return (
      <svg id="paint-pots-frame" width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <foreignObject id="help-text" x="39" y="78" width="109" height="200">
            <p id="help-text-inner" className={this.state.paintbrush=='0pc' ? 'active': ''} >I can't make it. I'm already booked.</p>
            <p id="help-text-inner" className={this.state.paintbrush=='30pc' ? 'active': ''} >There's only a very small chance I can make it.</p>
            <p id="help-text-inner" className={this.state.paintbrush=='70pc' ? 'active': ''} >I could be free, if I rearrange some things.</p>
            <p id="help-text-inner" className={this.state.paintbrush=='90pc' ? 'active': ''} >I'm almost definitely free (but you never know).</p>
          </foreignObject>

          <g id="pathways">
            <path id="pathway-0pc" className={this.state.paintbrush=='0pc' ? 'active': ''} d="M214.5 118L150.5 194.5H42.5"/>
            <path id="pathway-30pc" className={this.state.paintbrush=='30pc' ? 'active': ''} d="M261.5 147.5L222.5 194.5H42"/>
            <path id="pathway-70pc" className={this.state.paintbrush=='70pc' ? 'active': ''} d="M251 211L221.5 194.5H42.5"/>
            <path id="pathway-90pc" className={this.state.paintbrush=='90pc' ? 'active': ''}  d="M190 216L151 194.5H42.5"/>
          </g>
          <g id="paint-pots">
            <circle id="circle-0pc" cx="214" cy="80" r="37.5" onClick={(e) => this.changePaint(e, "0pc")}/>
            <circle id="circle-30pc" cx="288" cy="122" r="37.5" onClick={(e) => this.changePaint(e, "30pc")}/>
            <circle id="circle-70pc" cx="288" cy="206" r="37.5" onClick={(e) => this.changePaint(e, "70pc")}/>
            <circle id="circle-90pc" cx="214" cy="244" r="37.5" onClick={(e) => this.changePaint(e, "90pc")}/>
          </g>
          <g id="text-inter-bold">
            <text id="0%" xmlSpace="preserve"><tspan x="188" y="94.3182">0%</tspan></text>
            <text id="30%" xmlSpace="preserve"><tspan x="262" y="139.318">30%</tspan></text>
            <text id="70%" xmlSpace="preserve"><tspan x="262" y="223.318">70%</tspan></text>
            <text id="90%" xmlSpace="preserve"><tspan x="188" y="261.318">90%</tspan></text>
            <text id="I am" xmlSpace="preserve"><tspan x="174" y="31.3182">I am...</tspan></text>
            <text id="available" xmlSpace="preserve"><tspan x="234" y="299.318">...available</tspan></text>
          </g>
          <g id="paintbrush">
            <path id="paintbrush-bristles" className={`paintbrush-${this.state.paintbrush}`} d="M216.373 170.221L219.956 173.228L210.272 184.775C209.853 185.274 209.253 185.603 208.649 185.656L208.651 185.656C208.047 185.708 207.472 185.482 206.975 185.063L192.56 172.968C192.082 172.571 191.783 171.999 191.728 171.38C191.674 170.76 191.87 170.145 192.272 169.671L201.961 158.126L205.544 161.13L201.802 165.59C203.375 165.103 204.821 164.986 205.238 165.218C207.849 166.686 200.79 171.62 203.655 172.441C204.055 172.553 204.798 172.405 205.815 171.808C207.974 170.55 209.631 170.294 210.329 171.118C211.142 172.072 208.209 175.446 211.231 176.353L216.373 170.221Z"/>
            <path id="handle" d="M222.568 170.118L226.509 165.419C227.311 164.471 227.702 163.242 227.593 162.004C227.485 160.767 226.887 159.624 225.932 158.829L224.014 157.153C223.048 156.34 223.767 154.86 224.539 153.86C225.117 153.099 225.76 152.332 226.228 152.088C227.991 151.159 230.498 149.667 232.455 147.337C235.378 143.853 236.14 139.708 234.149 138.038C232.159 136.368 228.209 137.838 225.286 141.324C223.332 143.653 221.35 147.341 220.742 149.247C220.583 149.75 219.931 150.509 219.29 151.219C218.446 152.148 218.042 152.151 217.085 151.338L215.101 149.741C214.153 148.938 212.923 148.547 211.685 148.655C210.447 148.763 209.303 149.362 208.509 150.318L204.568 155.017L222.568 170.118ZM229.81 145.8C229.206 145.853 228.567 145.706 228.068 145.289C227.074 144.455 226.939 142.915 227.773 141.919C228.63 140.923 230.125 140.792 231.143 141.624C232.141 142.48 232.272 143.977 231.438 144.994C231.018 145.491 230.415 145.747 229.81 145.8Z"/>
          </g>
        </g>
      </svg>
    );
  }
}

export default PaintPots;
